/* JavaScript Engine for Grouping, Searching, and Rendering Index Pages */
let allCategoryGroups = [];
let activeMode = 'composer';

const MODE_FOLDERS = {
    composer: 'Composers',
    artist: 'Artists',
    lyricist: 'Lyricists',
    rhythm: 'Rhythms'
};

const FOLDER_OVERRIDES = {
    "Δημήτρης Μητροπάνος": "Dimitris Mitropanos",
    "Άκης Πάνου": "Akis Panou",
    "Ειρήνη Χρυσοβέργη": "Eirini Chrysovergi"
};

function removeGreekAccents(str) {
    if (!str) return str;
    if (str === str.toLocaleUpperCase('el')) {
        return str
            .replace(/[Άά]/g, 'Α')
            .replace(/[Έέ]/g, 'Ε')
            .replace(/[Ήή]/g, 'Η')
            .replace(/[ΊίΐΪϊ]/g, 'Ι')
            .replace(/[Όό]/g, 'Ο')
            .replace(/[ΎύΰΫϋ]/g, 'Υ')
            .replace(/[Ώώ]/g, 'Ω')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .normalize('NFC');
    }
    return str;
}

function initBrowserPage(extractorFn, mode = 'composer') {
    activeMode = mode;
    loadAllSongScripts().then(() => {
        allCategoryGroups = extractGroupedData(extractorFn);
        buildAlphabetBar();
        renderCategories(allCategoryGroups, activeMode);
    });
}

function extractGroupedData(extractorFn) {
    const map = new Map();
    [...(SONGS_DB.greek || []), ...(SONGS_DB.english || [])].forEach(group => {
        group.songs.forEach(song => {
            const data = getSongData(song.value);
            if (data) {
                let rawKey = extractorFn(data);
                if (rawKey && rawKey.trim()) {
                    const keys = rawKey.split(/[,;]+/).map(k => k.trim()).filter(Boolean);
                    
                    keys.forEach(key => {
                        if (!map.has(key)) {
                            map.set(key, []);
                        }
                        if (!map.get(key).some(s => s.value === song.value)) {
                            map.get(key).push({
                                label: song.label,
                                value: song.value,
                                script: song.script
                            });
                        }
                    });
                } else {
                    const key = 'Άγνωστος';
                    if (!map.has(key)) map.set(key, []);
                    if (!map.get(key).some(s => s.value === song.value)) {
                        map.get(key).push({
                            label: song.label,
                            value: song.value,
                            script: song.script
                        });
                    }
                }
            }
        });
    });

    const categories = Array.from(map.entries()).map(([cat, songs]) => ({
        category: cat,
        songs: songs.sort((a, b) => a.label.localeCompare(b.label, 'el'))
    }));

    return categories.sort((a, b) => a.category.localeCompare(b.category, 'el'));
}

function buildAlphabetBar() {
    const bar = document.getElementById("alphabet-bar");
    if (!bar) return;
    bar.innerHTML = "";

    const letters = ["Όλα", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                     "Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω"];

    letters.forEach(l => {
        const btn = document.createElement("button");
        btn.className = "alpha-btn" + (l === "Όλα" ? " active" : "");
        btn.textContent = l;
        btn.onclick = () => {
            document.querySelectorAll(".alpha-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterByLetter(l);
        };
        bar.appendChild(btn);
    });
}

function renderCategories(groups, mode) {
    const grid = document.getElementById("categories-grid");
    if (!grid) return;
    grid.innerHTML = "";

    if (groups.length === 0) {
        grid.innerHTML = `<div class="no-results">Δεν βρέθηκαν αποτελέσματα.</div>`;
        return;
    }

    const folderName = MODE_FOLDERS[mode] || 'Composers';

    groups.forEach(group => {
        const card = document.createElement("div");
        card.className = "category-card";

        const subfolderName = FOLDER_OVERRIDES[group.category] || group.category;
        const entityFolderPath = `../${folderName}/${encodeURIComponent(subfolderName)}`;
        const avatarHtml = `<img src="${entityFolderPath}/Profile.webp" class="category-avatar" onerror="if(this.src.endsWith('Profile.webp')){this.src='${entityFolderPath}/Profile.jpeg';}else if(this.src.endsWith('Profile.jpeg')){this.src='${entityFolderPath}/profile.jpeg';}else if(this.src.endsWith('profile.jpeg')){this.src='${entityFolderPath}/Profile.jpg';}else if(this.src.endsWith('Profile.jpg')){this.src='${entityFolderPath}/profile.jpg';}else{this.style.display='none';}">`;

        card.innerHTML = `
            <div class="category-header">
                ${avatarHtml}
                <h2 class="category-title">${removeGreekAccents(group.category)} <span class="badge">${group.songs.length}</span></h2>
            </div>
            <ul class="song-list">
                ${group.songs.map(song => {
                    const queryParam = `id=${encodeURIComponent(song.value)}&person=${encodeURIComponent(group.category)}&mode=${mode}`;
                    
                    let displayLabel = song.label;
                    if (mode === 'artist') {
                        const dashIndex = displayLabel.indexOf(' - ');
                        if (dashIndex !== -1) {
                            displayLabel = displayLabel.substring(0, dashIndex);
                        }
                    }

                    return `
                        <li>
                            <a href="../song.html?${queryParam}" class="song-item-link">
                                ${removeGreekAccents(displayLabel)}
                            </a>
                        </li>
                    `;
                }).join('')}
            </ul>
        `;
        grid.appendChild(card);
    });
}

function filterGroups() {
    const query = document.getElementById("search-input").value.toLowerCase().trim();
    if (!query) {
        renderCategories(allCategoryGroups, activeMode);
        return;
    }

    const filtered = allCategoryGroups.map(group => {
        const catMatches = group.category.toLowerCase().includes(query);
        const matchingSongs = group.songs.filter(s => s.label.toLowerCase().includes(query));

        if (catMatches) return group;
        if (matchingSongs.length > 0) {
            return { category: group.category, songs: matchingSongs };
        }
        return null;
    }).filter(Boolean);

    renderCategories(filtered, activeMode);
}

function filterByLetter(letter) {
    if (letter === "Όλα") {
        renderCategories(allCategoryGroups, activeMode);
        return;
    }

    const filtered = allCategoryGroups.filter(group => {
        const firstChar = group.category.charAt(0).toUpperCase();
        return firstChar === letter;
    });

    renderCategories(filtered, activeMode);
}