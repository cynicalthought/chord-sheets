/*
 * Theme: Handwritten Parchment
 * Aged, torn parchment pinned to worn wood, with crumpling, burns, coffee
 * stains and spilled ink. Lyrics, chords and titles look hand-written in ink.
 *
 * Usage: include in <head> AFTER the page's main <style>:
 *   <script src="themes/handwritten_parchment.js"></script>
 * Remove that line to return to the plain base look.
 */
(function () {
    'use strict';

    // Chord ink colours (read by getColorHex in index.html)
    window.SONG_THEME = {
        name: 'handwritten_parchment',
        chordColors: {
            red: '#86200f',
            blue: '#1b3a6b',
            green: '#2d4a1c',
            black: '#1a120b'
        }
    };

    // Handwriting fonts (both include the glyphs needed: Mynerve has Greek)
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Mynerve&display=swap';
    document.head.appendChild(font);

    // Theme styles
    var style = document.createElement('style');
    style.id = 'theme-handwritten-parchment';
    style.textContent = `
        /* ===== Aged parchment on worn wood (inspired by reference) ===== */
        body { background-color: #2b1d13; }
        body::before {
            content: "";
            position: fixed;
            inset: 0;
            z-index: -1;
            pointer-events: none;
            background-color: #3a2718;
            background-image:
                radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(10, 5, 2, 0.7) 100%),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='700'%3E%3Cfilter id='w' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.004 .22' numOctaves='4' seed='7' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .13 0 0 0 0 .07 0 0 0 0 .03 1.7 0 0 0 -.45'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23w)'/%3E%3Cfilter id='g' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='2' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .8 0 0 0 0 .55 0 0 0 0 .3 0 0 0 .06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
        }

        .sheet-container {
            background: none;
            border: none;
            box-shadow: none;
            border-radius: 0;
            isolation: isolate;
        }
        .sheet-container > *:not(.paper-bg) { position: relative; z-index: 1; }

        /* The paper itself: displaced edges give the torn, uneven outline */
        .paper-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background-color: #dcc196;
            background-image:
                /* horizontal creases and fibres */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Cfilter id='c' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.002 .09' numOctaves='3' seed='11' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .36 0 0 0 0 .2 0 0 0 0 .08 0 .9 0 0 -.42'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)'/%3E%3C/svg%3E"),
                /* large age blotches and foxing */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1100' height='1100'%3E%3Cfilter id='b' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.0055' numOctaves='5' seed='21' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .28 0 0 0 0 .1 2.1 0 0 0 -.78'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23b)'/%3E%3Cfilter id='s' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.04' numOctaves='3' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .4 0 0 0 0 .22 0 0 0 0 .08 3 0 0 0 -1.95'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23s)'/%3E%3C/svg%3E"),
                /* fine paper grain */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .3 0 0 0 0 .18 0 0 0 0 .07 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
                radial-gradient(ellipse at 50% 35%, rgba(255, 244, 214, 0.45) 0%, transparent 65%),
                radial-gradient(ellipse at 50% 108%, rgba(150, 95, 40, 0.55) 0%, transparent 55%),
                radial-gradient(ellipse at 0% 100%, rgba(120, 66, 28, 0.35) 0%, transparent 45%);
            background-size: 900px 900px, 1100px 1100px, 200px 200px, auto, auto, auto;
            /* burnt, darkened edges like the reference */
            box-shadow:
                inset 0 0 18px 2px rgba(98, 52, 20, 0.85),
                inset 0 0 60px 6px rgba(130, 76, 32, 0.55),
                inset 0 0 160px rgba(110, 66, 28, 0.32);
            filter: url(#torn-edge) drop-shadow(0 16px 22px rgba(0, 0, 0, 0.7)) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.6));
        }

        /* Dark iron tacks pinning the top corners */
        .sheet-container::before,
        .sheet-container::after {
            content: "";
            position: absolute;
            top: 16px;
            width: 13px;
            height: 13px;
            z-index: 2;
            border: none;
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(circle at 35% 30%, #8a7a66 0%, #3a3128 45%, #14100c 100%);
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(60, 35, 15, 0.35);
        }
        .sheet-container::before { left: 16px; right: auto; bottom: auto; }
        .sheet-container::after { right: 16px; left: auto; }

        .ornament { color: #6e4a22; }
        .meta-item + .meta-item { border-left-color: rgba(80, 48, 20, 0.38); }
        .meta-label { color: #5e4122; }
        .song-title, .meta-value, .token-lyric { text-shadow: 0 0 1px rgba(255, 240, 205, 0.25); }

        @media (max-width: 750px) {
            .sheet-container::before, .sheet-container::after { top: 10px; width: 10px; height: 10px; }
            .sheet-container::before { left: 10px; }
            .sheet-container::after { right: 10px; }
        }

        /* ===== Aged damage: crumpling, coffee, ink, burns ===== */
        .paper-bg::before,
        .paper-bg::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
        }

        /* Stains, spills and burns (sit under the crumple shading) */
        .paper-bg::before {
            background-image:
                /* cigarette-style singe near the left edge */
                radial-gradient(circle 9px at 1.6% 61%, #120a04 0, #24120a 5px, rgba(70, 32, 10, 0.85) 9px, transparent 10px),
                radial-gradient(circle 26px at 1.6% 61%, transparent 8px, rgba(120, 60, 20, 0.55) 13px, rgba(150, 85, 30, 0.2) 20px, transparent 26px),
                /* charred corners */
                radial-gradient(circle 210px at 101% calc(100% + 6px), rgba(14, 7, 3, 0.97) 0, rgba(40, 19, 7, 0.92) 60px, rgba(100, 48, 16, 0.65) 125px, rgba(150, 90, 36, 0.2) 170px, transparent 210px),
                radial-gradient(circle 170px at -3% 24%, rgba(20, 10, 4, 0.95) 0, rgba(60, 28, 10, 0.8) 50px, rgba(130, 70, 24, 0.35) 95px, transparent 150px),
                radial-gradient(circle 110px at 62% -3%, rgba(40, 20, 8, 0.7) 0, rgba(110, 56, 20, 0.4) 55px, transparent 110px),
                /* ink spill, top right, with feathered bleed */
                radial-gradient(circle 11px at 94.5% 17.5%, rgba(18, 26, 58, 0.8) 0, transparent 12px),
                radial-gradient(circle 6px at 90.5% 22%, rgba(18, 26, 58, 0.75) 0, transparent 7px),
                radial-gradient(circle 4px at 96.5% 12%, rgba(18, 26, 58, 0.7) 0, transparent 5px),
                radial-gradient(circle 34px at 92% 9.5%, rgba(20, 28, 62, 0.82) 0, rgba(24, 34, 74, 0.7) 24px, rgba(40, 52, 100, 0.25) 33px, transparent 36px),
                radial-gradient(circle 62px at 91% 10%, rgba(40, 52, 100, 0.22) 0, rgba(60, 70, 120, 0.12) 46px, transparent 62px),
                /* small ink blot, bottom left */
                radial-gradient(circle 15px at 7% calc(100% - 78px), rgba(20, 28, 62, 0.8) 0, rgba(28, 38, 80, 0.55) 11px, transparent 17px),
                radial-gradient(circle 5px at 10.5% calc(100% - 64px), rgba(20, 28, 62, 0.75) 0, transparent 6px),
                radial-gradient(circle 32px at 7% calc(100% - 78px), rgba(60, 70, 120, 0.16) 0, transparent 32px),
                /* coffee ring, upper right of the lyrics */
                radial-gradient(circle 82px at 79% 31%, rgba(120, 70, 25, 0.13) 0, rgba(120, 70, 25, 0.12) 58px, rgba(92, 48, 14, 0.5) 66px, rgba(110, 62, 22, 0.22) 73px, transparent 82px),
                radial-gradient(circle 70px at 82% 33.5%, transparent 52px, rgba(92, 48, 14, 0.3) 60px, rgba(110, 62, 22, 0.12) 67px, transparent 70px),
                /* large coffee ring, lower left */
                radial-gradient(circle 118px at 17% 76%, rgba(120, 70, 25, 0.12) 0, rgba(120, 70, 25, 0.1) 86px, rgba(92, 48, 14, 0.46) 96px, rgba(110, 62, 22, 0.2) 106px, transparent 118px),
                /* splashed coffee drops */
                radial-gradient(circle 7px at 66% 27%, rgba(92, 48, 14, 0.45) 0, transparent 8px),
                radial-gradient(circle 4px at 70% 23%, rgba(92, 48, 14, 0.4) 0, transparent 5px),
                radial-gradient(circle 5px at 31% 69%, rgba(92, 48, 14, 0.4) 0, transparent 6px),
                /* old fold lines */
                linear-gradient(to right, transparent calc(50% - 7px), rgba(70, 38, 14, 0.22) calc(50% - 1px), rgba(255, 244, 214, 0.28) calc(50% + 2px), transparent calc(50% + 9px)),
                linear-gradient(to bottom, transparent calc(34% - 7px), rgba(70, 38, 14, 0.2) calc(34% - 1px), rgba(255, 244, 214, 0.25) calc(34% + 2px), transparent calc(34% + 9px)),
                linear-gradient(to bottom, transparent calc(68% - 7px), rgba(70, 38, 14, 0.2) calc(68% - 1px), rgba(255, 244, 214, 0.25) calc(68% + 2px), transparent calc(68% + 9px));
            background-repeat: no-repeat;
        }

        /* Crumpled-paper relief: lit height map, shadows and highlights */
        .paper-bg::after {
            background-image:
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'%3E%3Cfilter id='s' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='turbulence' baseFrequency='.012 .016' numOctaves='5' seed='9' stitchTiles='stitch' result='t'/%3E%3CfeDiffuseLighting in='t' surfaceScale='7' diffuseConstant='1' lighting-color='%23fff' result='l'%3E%3CfeDistantLight azimuth='225' elevation='52'/%3E%3C/feDiffuseLighting%3E%3CfeColorMatrix in='l' values='0 0 0 0 .22 0 0 0 0 .11 0 0 0 0 .03 -2.4 0 0 0 1.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23s)'/%3E%3C/svg%3E"),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'%3E%3Cfilter id='h' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='turbulence' baseFrequency='.012 .016' numOctaves='5' seed='9' stitchTiles='stitch' result='t'/%3E%3CfeDiffuseLighting in='t' surfaceScale='7' diffuseConstant='1' lighting-color='%23fff' result='l'%3E%3CfeDistantLight azimuth='225' elevation='52'/%3E%3C/feDiffuseLighting%3E%3CfeColorMatrix in='l' values='0 0 0 0 1 0 0 0 0 .96 0 0 0 0 .85 1.8 0 0 0 -1.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23h)'/%3E%3C/svg%3E");
            background-size: 1000px 1000px;
        }

        /* ===== Ink on aged paper: text treatment ===== */
        :root { --ink: #241710; }

        .song-title {
            color: #1f140c;
            text-shadow: 0 1px 0 rgba(255, 244, 214, 0.35), 0 0 1.2px rgba(31, 20, 12, 0.55);
        }
        .meta-label { color: #5a3e22; }
        .meta-value {
            color: #2a1b11;
            text-shadow: 0 0 0.7px rgba(42, 27, 17, 0.5);
        }
        .meta-item + .meta-item { border-left-color: rgba(60, 36, 16, 0.4); }
        .ornament { color: #5a3a18; }
        .ornament::before { background: linear-gradient(to right, transparent, rgba(60, 36, 16, 0.65)); }
        .ornament::after { background: linear-gradient(to left, transparent, rgba(60, 36, 16, 0.65)); }

        /* Lyrics and chords soak into the paper like real ink */
        .song-content { position: relative; mix-blend-mode: multiply; }
        .token-lyric {
            color: var(--ink);
            font-weight: 500;
            text-shadow: 0 0 0.7px rgba(36, 23, 16, 0.65), 0 0 2.4px rgba(36, 23, 16, 0.18);
        }
        .token-chord, .instrumental-chord {
            text-shadow: 0 0 0.7px currentColor, 0 0 2.2px rgba(60, 30, 10, 0.2);
        }

        /* Wear: faint uneven fading and dry specks over the ink, like old print */
        .song-content::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='k' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.6' numOctaves='3' seed='14' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .89 0 0 0 0 .79 0 0 0 0 .6 6 0 0 0 -3.55'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23k)'/%3E%3C/svg%3E"),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Cfilter id='m' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.045' numOctaves='3' seed='31' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .87 0 0 0 0 .76 0 0 0 0 .57 2.6 0 0 0 -1.3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m)'/%3E%3C/svg%3E");
            background-size: 320px 320px, 900px 900px;
            opacity: 0.4;
        }

        .lyric-line-block { margin-bottom: 22px; }

        /* ===== Handwritten pen-on-parchment ===== */
        :root {
            --hand-font: 'Mynerve', 'Caveat', 'Segoe Script', 'Bradley Hand', cursive;
            --chord-hand: 'Caveat', 'Mynerve', 'Segoe Script', 'Bradley Hand', cursive;
        }

        /* One subtle filter wobbles every stroke edge like a real nib */
        .song-content { filter: url(#pen-wobble); }

        .token-lyric {
            font-family: var(--hand-font) !important;
            font-size: 1em;
            font-weight: 400;
            letter-spacing: 0;
            line-height: 1.25;
            color: #2a1a10;
            text-shadow: 0 0 0.6px rgba(42, 26, 16, 0.7), 0 0 2px rgba(42, 26, 16, 0.2);
        }
        .token-chord, .instrumental-chord {
            font-family: var(--chord-hand) !important;
            font-size: 1.02em;
            font-weight: 700;
            letter-spacing: 0.2px;
            line-height: 1.05;
            min-height: 1.05em;
            text-shadow: 0 0 0.7px currentColor, 0 0 2px rgba(60, 30, 10, 0.2);
        }

        /* No two words sit exactly alike: tiny tilt and baseline drift */
        .token-pair { transform-origin: 0 100%; }
        .lyric-line-block .token-pair:nth-child(7n+1) { transform: rotate(-0.7deg) translateY(0.5px); }
        .lyric-line-block .token-pair:nth-child(7n+2) { transform: rotate(0.5deg) translateY(-0.8px); }
        .lyric-line-block .token-pair:nth-child(7n+3) { transform: rotate(-0.3deg) translateY(0.9px); }
        .lyric-line-block .token-pair:nth-child(7n+4) { transform: rotate(0.8deg) translateY(0); }
        .lyric-line-block .token-pair:nth-child(7n+5) { transform: rotate(-0.5deg) translateY(-0.5px); }
        .lyric-line-block .token-pair:nth-child(7n+6) { transform: rotate(0.3deg) translateY(0.7px); }
        .lyric-line-block .token-pair:nth-child(7n)   { transform: rotate(-0.2deg) translateY(-0.9px); }
        .token-chord:nth-child(odd) { transform: rotate(-1.2deg); }
        .token-pair:nth-child(3n) .token-chord { transform: rotate(1deg) translateY(1px); }

        /* Lines drift slightly off level, as when writing without ruled lines */
        .lyric-line-block { transform-origin: 0 50%; }
        .song-content > .lyric-line-block:nth-child(5n+1) { transform: rotate(-0.22deg); }
        .song-content > .lyric-line-block:nth-child(5n+2) { transform: rotate(0.14deg); }
        .song-content > .lyric-line-block:nth-child(5n+3) { transform: rotate(-0.08deg) translateX(1px); }
        .song-content > .lyric-line-block:nth-child(5n+4) { transform: rotate(0.2deg); }
        .song-content > .lyric-line-block:nth-child(5n)   { transform: rotate(-0.15deg) translateX(-1px); }

        /* Title and credits in the same hand */
        .song-title {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: clamp(2.1rem, 5.4vw, 3.1rem);
            letter-spacing: 0;
            color: #22140b;
            text-shadow: 0 0 0.8px rgba(34, 20, 11, 0.7), 0 0 2.4px rgba(34, 20, 11, 0.2);
            transform: rotate(-0.6deg);
        }
        .meta-label {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: 0.82rem;
            letter-spacing: 0.6px;
            text-transform: none;
            color: #5a3e22;
        }
        .meta-value {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: 1.2rem;
            color: #2a1a10;
        }

    `;
    document.head.appendChild(style);

    // SVG filters (torn paper edge, pen wobble) and the paper layer
    var DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <filter id="pen-wobble" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="5" result="w"/>
        <feDisplacementMap in="SourceGraphic" in2="w" scale="2.4" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="torn-edge" x="-4%" y="-3%" width="108%" height="106%">
        <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="3" seed="8" result="big"/>
        <feDisplacementMap in="SourceGraphic" in2="big" scale="18" xChannelSelector="R" yChannelSelector="G" result="a"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" seed="2" result="fine"/>
        <feDisplacementMap in="a" in2="fine" scale="3" xChannelSelector="G" yChannelSelector="R"/>
    </filter>
</svg>`;

    function install() {
        if (!document.getElementById('torn-edge')) {
            document.body.insertAdjacentHTML('afterbegin', DEFS);
        }
        var sheet = document.querySelector('.sheet-container');
        if (sheet && !sheet.querySelector('.paper-bg')) {
            var paper = document.createElement('div');
            paper.className = 'paper-bg';
            paper.setAttribute('aria-hidden', 'true');
            sheet.insertBefore(paper, sheet.firstChild);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', install);
    } else {
        install();
    }
})();
