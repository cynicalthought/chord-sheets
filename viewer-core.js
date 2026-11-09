/* Core Song Rendering, Accidental Preference & Transposition Logic */
function fitSong() {
    const contentContainer = document.getElementById("song-content");
    if (!contentContainer) return;
    const sheetContainer = contentContainer.closest('.sheet-container');
    if (!sheetContainer) return;
    
    const containerStyle = window.getComputedStyle(sheetContainer);
    const paddingX = parseFloat(containerStyle.paddingLeft) + parseFloat(containerStyle.paddingRight);
    const availableWidth = (sheetContainer.clientWidth - paddingX) * 0.95;

    contentContainer.style.fontSize = '1.8rem';
    const elements = contentContainer.querySelectorAll('.lyric-line-block, .instrumental-grid-block');
    if (elements.length === 0) return;

    let maxWidth = 0;
    elements.forEach(el => {
        if (el.scrollWidth > maxWidth) maxWidth = el.scrollWidth;
    });

    if (maxWidth > 0) {
        const currentSize = parseFloat(window.getComputedStyle(contentContainer).fontSize);
        const targetSize = currentSize * (availableWidth / maxWidth);
        contentContainer.style.fontSize = targetSize + 'px';
    }
}

function normalizeChordCasing(text) {
    if (!text) return text;
    const trimmed = text.trim();
    if (trimmed.length === 0) return text;
    
    return trimmed.split(/\s+/).map(chordPart => {
        if (chordPart.length === 0) return chordPart;
        if (chordPart.includes('/')) {
            return chordPart.split('/').map(sub => 
                sub.length > 0 ? sub.charAt(0).toUpperCase() + sub.slice(1).toLowerCase() : sub
            ).join('/');
        }
        return chordPart.charAt(0).toUpperCase() + chordPart.slice(1).toLowerCase();
    }).join(' ');
}

function parseInlineLineToTokens(rawString, colorState) {
    const tokens = [];
    const regex = /\(([^)]*)\)/g;
    let lastIndex = 0;
    let match;

    const firstParen = rawString.indexOf('(');
    if (firstParen > 0) {
        tokens.push({
            chord: "",
            color: colorState.current,
            text: rawString.substring(0, firstParen)
        });
        lastIndex = firstParen;
    } else if (firstParen === -1 && rawString.length > 0) {
        return [{ chord: "", color: colorState.current, text: rawString }];
    }

    while ((match = regex.exec(rawString)) !== null) {
        let tagContent = match[1].trim();
        let chordName = tagContent;
        let isSpacer = false;

        if (tagContent === "_" || tagContent === "") {
            isSpacer = true;
            chordName = "";
        } else if (tagContent.includes(':')) {
            const parts = tagContent.split(':');
            chordName = parts[0];
            colorState.current = parts[1];
        }

        let textStart = regex.lastIndex;
        let nextParenIndex = rawString.indexOf('(', textStart);
        let textEnd = nextParenIndex !== -1 ? nextParenIndex : rawString.length;
        let textChunk = rawString.substring(textStart, textEnd);

        const lyricText = (!textChunk) ? "" : textChunk;

        tokens.push({
            chord: normalizeChordCasing(chordName),
            color: colorState.current,
            text: isSpacer ? "" : lyricText,
            isSpacer: isSpacer
        });
        lastIndex = textEnd;
    }

    return tokens;
}

function parseInstrumentalLine(rawString, colorState) {
    const chords = [];
    const regex = /\(([^)]+)\)/g;
    let match;

    while ((match = regex.exec(rawString)) !== null) {
        let tagContent = match[1];
        let chordName = tagContent;

        if (tagContent.includes(':')) {
            const parts = tagContent.split(':');
            chordName = parts[0];
            colorState.current = parts[1];
        }

        chords.push({
            chord: normalizeChordCasing(chordName),
            color: colorState.current
        });
    }
    return chords;
}

const NOTE_PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const CHORD_RE = /^([A-G])([#b\u266F\u266D]?)([^\/]*)(?:\/([A-G])([#b\u266F\u266D]?))?$/i;

function accidentalValue(a) {
    if (a === '#' || a === '\u266F') return 1;
    if (a === 'b' || a === '\u266D') return -1;
    return 0;
}

function determineSongAccidentalPreference(data, semitones) {
    const counts = Array.from({ length: 12 }, () => 0);
    const minorCounts = Array.from({ length: 12 }, () => 0);

    function evaluateChord(chordStr) {
        const m = CHORD_RE.exec(chordStr);
        if (!m) return;
        const pc = ((NOTE_PC[m[1].toUpperCase()] + accidentalValue(m[2])) % 12 + 12) % 12;
        counts[pc]++;
        if (/^m(?!aj)/i.test(m[3] || '')) minorCounts[pc]++;
    }

    function scanString(str) {
        const regex = /\(([^)]+)\)/g;
        let match;
        while ((match = regex.exec(str)) !== null) {
            let content = match[1].split(':')[0].trim();
            content.split(/\s+/).forEach(singleChord => {
                evaluateChord(singleChord);
            });
        }
    }

    if (Array.isArray(data.stanzas)) {
        data.stanzas.forEach(stanza => {
            if (Array.isArray(stanza.lines)) {
                stanza.lines.forEach(line => {
                    if (typeof line.rawInline === 'string') scanString(line.rawInline);
                    if (Array.isArray(line.tokens)) {
                        line.tokens.forEach(t => {
                            if (t.chord) {
                                t.chord.split(/\s+/).forEach(singleChord => {
                                    evaluateChord(singleChord);
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    let tonic = 0;
    let best = -1;
    for (let pc = 0; pc < 12; pc++) {
        const score = counts[pc] + minorCounts[pc] * 0.5;
        if (score > best) { best = score; tonic = pc; }
    }

    const transposedTonic = ((tonic + (semitones || 0)) % 12 + 12) % 12;
    const isMinorKey = minorCounts[tonic] > 0;
    const majorKeyNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
    const flatMinorTonics = new Set([0, 2, 3, 5, 7, 10]);
    const sourceFlatKey = flatMinorTonics.has(tonic);
    const sharpMinorKeyNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const flatMinorKeyNames = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];
    const minorKeyNames = sourceFlatKey ? flatMinorKeyNames : sharpMinorKeyNames;
    const tonicName = (isMinorKey ? minorKeyNames : majorKeyNames)[transposedTonic];
    const flatKey = isMinorKey
        ? ([0, 2, 5, 7, 10].includes(transposedTonic) || (transposedTonic === 3 && sourceFlatKey))
        : (tonicName.includes('b') || tonicName === 'F');
    return flatKey ? FLAT_NAMES : SHARP_NAMES;
}

function transposeWord(word, semitones, preferredNames) {
    const m = CHORD_RE.exec(word);
    if (!m) return word;
    const rootLetter = m[1].toUpperCase();
    const suffix = m[3] || '';
    const shiftedPc = ((NOTE_PC[rootLetter] + accidentalValue(m[2]) + semitones) % 12 + 12) % 12;
    
    const naturalPcs = [0, 2, 4, 5, 7, 9, 11];
    let root = preferredNames[shiftedPc];
    if (naturalPcs.includes(shiftedPc)) {
        for (let l in NOTE_PC) {
            if (NOTE_PC[l] === shiftedPc) {
                root = l;
                break;
            }
        }
    }

    let out = root + suffix;
    if (m[4]) {
        const bassLetter = m[4].toUpperCase();
        const bassPc = ((NOTE_PC[bassLetter] + accidentalValue(m[5]) + semitones) % 12 + 12) % 12;
        let bass = preferredNames[bassPc];
        if (naturalPcs.includes(bassPc)) {
            for (let l in NOTE_PC) {
                if (NOTE_PC[l] === bassPc) {
                    bass = l;
                    break;
                }
            }
        }
        out += '/' + bass;
    }
    return normalizeChordCasing(out);
}

function transposeChord(chord, semitones, preferredNames) {
    if (!chord) return chord;
    return chord.split(/\s+/).map(subChord => {
        const m = CHORD_RE.exec(subChord);
        if (!m) return subChord;
        return transposeWord(subChord, semitones, preferredNames);
    }).join(' ');
}

const TRANSPOSE_MIN = -11, TRANSPOSE_MAX = 11;
let currentSongValue = null;

function readTranspose(songValue) {
    try {
        const n = parseInt(localStorage.getItem('transpose:' + songValue), 10);
        if (Number.isFinite(n)) return Math.max(TRANSPOSE_MIN, Math.min(TRANSPOSE_MAX, n));
    } catch (e) {}
    return 0;
}

window.setTranspose = function (n) {
    if (currentSongValue === null) return;
    n = Math.max(TRANSPOSE_MIN, Math.min(TRANSPOSE_MAX, n));
    try {
        if (n === 0) localStorage.removeItem('transpose:' + currentSongValue);
        else localStorage.setItem('transpose:' + currentSongValue, String(n));
    } catch (e) {}
    const y = window.scrollY;
    window.loadSongUI(currentSongValue);
    window.scrollTo(0, y);
};

window.getTranspose = function () {
    return currentSongValue === null ? 0 : readTranspose(currentSongValue);
};

function getColorHex(colorName) {
    const t = window.SONG_THEME && window.SONG_THEME.chordColors;
    if (t) return t[colorName] || t.red;
    if (colorName === 'blue') return '#0d47a1';
    if (colorName === 'green') return '#1b5e20';
    if (colorName === 'black') return '#000000';
    return '#8b1e1e';
}

window.loadSongUI = function(value) {
    const data = getSongData(value);
    if (!data) return;

    localStorage.setItem("activeSongValue", value);
    currentSongValue = value;
    const semitones = readTranspose(value);
    const preferredNames = determineSongAccidentalPreference(data, semitones);

    document.getElementById("meta-title").textContent = data.title || "";
    document.getElementById("meta-timesig").textContent = data.timeSignature || "";
    document.getElementById("meta-rhythm").textContent = data.rhythm || "";
    document.getElementById("meta-artist").textContent = data.artist || "";
    document.getElementById("meta-composer").textContent = data.composer || "";
    document.getElementById("meta-lyricist").textContent = data.lyricist || "";
    document.getElementById("meta-year").textContent = data.year || "";

    const contentContainer = document.getElementById("song-content");
    contentContainer.innerHTML = "";

    const colorState = { current: "red" };

    if (Array.isArray(data.stanzas)) {
        data.stanzas.forEach((stanza, sIdx) => {
            if (Array.isArray(stanza.lines)) {
                const isInstrumentalStanza = stanza.lines.every(line => {
                    let textToCheck = "";
                    if (Array.isArray(line.tokens)) {
                        textToCheck = line.tokens.map(t => t.text || "").join("").trim();
                    } else if (typeof line.rawInline === "string") {
                        const parsed = parseInlineLineToTokens(line.rawInline, { current: colorState.current });
                        textToCheck = parsed.map(t => t.text || "").join("").trim();
                    }
                    return textToCheck === "";
                });

                if (isInstrumentalStanza && stanza.lines.length > 0) {
                    const parsedRows = stanza.lines.map(line => {
                        if (Array.isArray(line.tokens)) {
                            return line.tokens.filter(t => t.chord).map(t => ({ chord: normalizeChordCasing(t.chord), color: t.color || colorState.current }));
                        } else {
                            return parseInstrumentalLine(line.rawInline, colorState);
                        }
                    });

                    const maxCols = Math.max(...parsedRows.map(row => row.length), 1);
                    const gridBlock = document.createElement("div");
                    gridBlock.className = "instrumental-grid-block";
                    gridBlock.style.gridTemplateColumns = `repeat(${maxCols}, auto)`;

                    parsedRows.forEach(row => {
                        for (let colIdx = 0; colIdx < maxCols; colIdx++) {
                            const chordSpan = document.createElement("span");
                            chordSpan.className = "instrumental-chord";
                            if (row[colIdx]) {
                                chordSpan.style.color = getColorHex(row[colIdx].color);
                                chordSpan.textContent = transposeChord(row[colIdx].chord, semitones, preferredNames);
                            } else {
                                chordSpan.textContent = "";
                            }
                            gridBlock.appendChild(chordSpan);
                        }
                    });

                    contentContainer.appendChild(gridBlock);
                } else {
                    stanza.lines.forEach((line) => {
                        const lineBlock = document.createElement("div");
                        lineBlock.className = "lyric-line-block";

                        let tokens = line.tokens;
                        if (typeof line.rawInline === "string") {
                            tokens = parseInlineLineToTokens(line.rawInline, colorState);
                        }

                        if (Array.isArray(tokens)) {
                            tokens.forEach((token) => {
                                const pairSpan = document.createElement("span");
                                pairSpan.className = "token-pair" + (token.isSpacer ? " spacer-token" : "");

                                const chordSpan = document.createElement("span");
                                chordSpan.className = "token-chord";
                                chordSpan.style.color = getColorHex(token.color || colorState.current);
                                chordSpan.textContent = transposeChord(normalizeChordCasing(token.chord || ""), semitones, preferredNames);

                                const lyricSpan = document.createElement("span");
                                lyricSpan.className = "token-lyric";
                                lyricSpan.textContent = token.text || "";

                                pairSpan.appendChild(chordSpan);
                                pairSpan.appendChild(lyricSpan);
                                lineBlock.appendChild(pairSpan);
                            });
                        }

                        contentContainer.appendChild(lineBlock);
                    });
                }
            }

            if (sIdx < data.stanzas.length - 1) {
                const spaceDiv = document.createElement("div");
                spaceDiv.className = "verse-space";
                contentContainer.appendChild(spaceDiv);
            }
        });
    }
    fitSong();
    if (window.updateTransposeUI) window.updateTransposeUI(semitones);
};

/* Floating Controls Injection (Theme & Transposition) */
(function () {
    var THEMES = [
        { id: 'handwritten_parchment', label: 'Handwritten Parchment' },
        { id: 'beach_sand', label: 'Beach Sand' },
        { id: 'professional_executive', label: 'Executive Professional' },
        { id: 'stage_noir', label: 'Stage Noir' },
        { id: 'atelier_luxe', label: 'Atelier Luxe' },
        { id: 'chalkboard', label: 'Chalkboard' },
        { id: 'plain', label: 'Plain' }
    ];
    var current = window.ACTIVE_THEME || 'handwritten_parchment';

    var wrap = document.createElement('div');
    wrap.className = 'theme-switcher';
    wrap.innerHTML =
        '<div class="theme-switcher-panel" role="radiogroup" aria-label="Theme">' +
            '<div class="theme-switcher-title">Theme</div>' +
        '</div>' +
        '<button type="button" class="theme-switcher-btn" aria-haspopup="true" aria-expanded="false" aria-label="Change theme" title="Change theme">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
                '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/>' +
                '<circle cx="7.5" cy="11" r="1" fill="currentColor"/><circle cx="10.5" cy="7" r="1" fill="currentColor"/><circle cx="15" cy="7.5" r="1" fill="currentColor"/>' +
            '</svg>' +
        '</button>';

    var panel = wrap.querySelector('.theme-switcher-panel');
    var btn = wrap.querySelector('.theme-switcher-btn');

    THEMES.forEach(function (t) {
        var o = document.createElement('button');
        o.type = 'button';
        o.className = 'theme-option';
        o.setAttribute('role', 'radio');
        o.setAttribute('aria-checked', String(t.id === current));
        o.innerHTML = '<span></span><span class="tick" aria-hidden="true">&#10003;</span>';
        o.firstChild.textContent = t.label;
        o.addEventListener('click', function () {
            if (t.id === current) { setOpen(false); return; }
            try { localStorage.setItem('songTheme', t.id); } catch (e) {}
            var url = new URL(location.href);
            url.searchParams.delete('theme');
            url.searchParams.set('theme', t.id);
            location.href = url.toString();
        });
        panel.appendChild(o);
    });

    function setOpen(open) {
        wrap.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
    }

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        setOpen(!wrap.classList.contains('open'));
    });

    document.addEventListener('pointerdown', function (e) {
        if (!wrap.contains(e.target)) setOpen(false);
    });

    document.body.appendChild(wrap);
})();

(function () {
    var wrap = document.createElement('div');
    wrap.className = 'transpose-control';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Transpose');
    wrap.innerHTML =
        '<button type="button" class="transpose-step" data-dir="-1" aria-label="Transpose down one semitone" title="Down one semitone">&minus;</button>' +
        '<button type="button" class="transpose-value" aria-label="Transposition: original key. Tap to reset" title="Tap to reset to the original key">' +
            '<span class="transpose-number" aria-live="polite">0</span>' +
            '<span class="transpose-caption">Original</span>' +
        '</button>' +
        '<button type="button" class="transpose-step" data-dir="1" aria-label="Transpose up one semitone" title="Up one semitone">+</button>';

    var down = wrap.querySelector('[data-dir="-1"]');
    var up = wrap.querySelector('[data-dir="1"]');
    var value = wrap.querySelector('.transpose-value');
    var number = wrap.querySelector('.transpose-number');
    var caption = wrap.querySelector('.transpose-caption');

    window.updateTransposeUI = function (n) {
        number.textContent = n > 0 ? '+' + n : String(n);
        caption.textContent = n === 0 ? 'Original' : (Math.abs(n) === 1 ? 'semitone' : 'semitones');
        wrap.classList.toggle('is-shifted', n !== 0);
        down.disabled = n <= -11;
        up.disabled = n >= 11;
        value.setAttribute('aria-label', n === 0
            ? 'Transposition: original key'
            : 'Transposed ' + (n > 0 ? 'up ' : 'down ') + Math.abs(n) + ' semitone' + (Math.abs(n) === 1 ? '' : 's') + '. Tap to reset');
        value.title = n === 0 ? 'Original key' : 'Tap to reset to the original key';
    };

    down.addEventListener('click', function () { window.setTranspose(window.getTranspose() - 1); });
    up.addEventListener('click', function () { window.setTranspose(window.getTranspose() + 1); });
    value.addEventListener('click', function () { window.setTranspose(0); });

    document.body.appendChild(wrap);
})();