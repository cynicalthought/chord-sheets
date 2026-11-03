/*
 * Theme: Chalkboard
 * White and pastel chalk handwriting on a green school chalkboard, in a
 * wooden frame with a chalk ledge, eraser smudges and chalk dust.
 *
 * Usage: loaded by index.html from the Themes folder, e.g.
 *   index.html?theme=chalkboard
 */
(function () {
    'use strict';

    // Chord chalk colours (read by getColorHex in index.html)
    window.SONG_THEME = {
        name: 'chalkboard',
        chordColors: {
            red: '#ff9d8c',     // rose / salmon chalk
            blue: '#8fd2ff',    // sky blue chalk
            green: '#b9f08e',   // lime chalk
            black: '#f6e27d'    // yellow chalk (black ink has no chalk equivalent)
        }
    };

    // Handwriting fonts (Mynerve includes Greek)
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Mynerve&display=swap';
    document.head.appendChild(font);

    var style = document.createElement('style');
    style.id = 'theme-chalkboard';
    style.textContent = `
        :root {
            --hand-font: 'Mynerve', 'Caveat', 'Segoe Script', 'Bradley Hand', cursive;
            --chord-hand: 'Caveat', 'Mynerve', 'Segoe Script', 'Bradley Hand', cursive;
            --chalk: #f3f5ec;
            --chalk-dim: #c9d8c8;
        }

        /* ---- Classroom wall ---- */
        body { background-color: #161c19; background-image: none; }
        body::before {
            content: "";
            position: fixed;
            inset: 0;
            z-index: -1;
            pointer-events: none;
            background-color: #26302b;
            background-image:
                radial-gradient(ellipse at 50% 25%, rgba(255, 255, 255, 0.08) 0%, transparent 60%),
                radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.65) 100%),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .8 0 0 0 0 .85 0 0 0 0 .8 0 0 0 .07 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E");
        }

        /* ---- Navigation: dark board rail with chalk lettering ---- */
        .nav-menu {
            background-image: linear-gradient(to bottom, #22352c, #182620);
            border: 1px solid #44594d;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.07);
        }
        .nav-link {
            color: var(--chalk);
            border-right-color: rgba(243, 245, 236, 0.16);
        }
        .nav-item.active > .nav-link,
        .nav-item:hover > .nav-link {
            background-color: rgba(243, 245, 236, 0.1);
            box-shadow: inset 0 -2px 0 var(--chalk);
            color: #ffffff;
        }
        .nav-link:focus-visible, .submenu-link:focus-visible { outline-color: var(--chalk); }

        .submenu {
            background-color: #223a2f;
            border-color: #5b4226;
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.65);
        }
        .submenu-item { border-bottom-color: rgba(243, 245, 236, 0.14); }
        .submenu-link { color: var(--chalk); }
        .submenu-item.active > .submenu-link { background-color: #2f5242; }
        @media (hover: hover) {
            .submenu-item:hover > .submenu-link { background-color: #2f5242; }
        }
        .submenu .submenu { background-color: rgba(0, 0, 0, 0.22); border-top-color: rgba(243, 245, 236, 0.14); }
        .menu-collage-grid { background: #35503f; border-color: #5b7466; }
        .composer-avatar { border-color: #5b7466; }

        /* ---- The board: wooden frame holds the slate ---- */
        .sheet-container {
            background-color: #7c4f25;
            background-image:
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cfilter id='w' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.006 .17' numOctaves='4' seed='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .2 0 0 0 0 .1 0 0 0 0 .03 1.6 0 0 0 -.55'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23w)'/%3E%3C/svg%3E"),
                linear-gradient(to bottom, #98662f, #6c4219);
            border: none;
            border-radius: 5px;
            padding: 66px 54px 58px;
            box-shadow:
                0 24px 50px rgba(0, 0, 0, 0.7),
                0 3px 8px rgba(0, 0, 0, 0.6),
                inset 0 0 0 1px rgba(255, 220, 160, 0.28),
                inset 0 0 0 3px rgba(60, 32, 10, 0.5);
            color: var(--chalk);
        }
        .sheet-container > * { position: relative; z-index: 1; }

        /* The slate itself */
        .sheet-container::before {
            content: "";
            position: absolute;
            inset: 16px;
            border: none;
            border-radius: 2px;
            pointer-events: none;
            background-color: #2f5444;
            background-image:
                /* fine slate grain */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .85 0 0 0 0 .92 0 0 0 0 .86 0 0 0 .1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E"),
                /* eraser swipes and chalk dust smears */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'%3E%3Cfilter id='s' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.0035 .012' numOctaves='4' seed='12' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .86 0 0 0 0 .92 0 0 0 0 .86 0.7 0 0 0 -.3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23s)'/%3E%3C/svg%3E"),
                /* darker and lighter cloudy patches in the slate */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'%3E%3Cfilter id='b' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.005' numOctaves='4' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .1 0 0 0 0 .22 0 0 0 0 .16 1.9 0 0 0 -.7'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23b)'/%3E%3C/svg%3E"),
                radial-gradient(ellipse at 50% 35%, rgba(255, 255, 255, 0.09) 0%, transparent 65%);
            background-size: 240px 240px, 1200px 1200px, 1000px 1000px, auto;
            box-shadow:
                inset 0 0 0 2px rgba(15, 8, 3, 0.6),
                inset 0 0 80px rgba(0, 0, 0, 0.55),
                0 0 0 1px rgba(255, 235, 190, 0.22);
        }

        /* Chalk ledge with chalk and an eraser */
        .sheet-container::after {
            content: "";
            position: absolute;
            left: -14px;
            right: -14px;
            bottom: -24px;
            height: 36px;
            z-index: 2;
            pointer-events: none;
            background-repeat: no-repeat;
            background-image:
                linear-gradient(to bottom, #fbfbf5, #d3d3c7),
                linear-gradient(to bottom, #f6e9a6, #d8c872),
                linear-gradient(to bottom, #b98650, #96662f),
                linear-gradient(to bottom, #4c4c47, #272725),
                linear-gradient(to bottom, #a36d36 0%, #7c4f25 55%, #5a3716 100%);
            background-size: 58px 9px, 34px 8px, 80px 6px, 80px 10px, 100% 26px;
            background-position:
                right 17% bottom 26px,
                right 26% bottom 26px,
                left 12% bottom 36px,
                left 12% bottom 26px,
                left bottom;
            box-shadow: 0 8px 14px rgba(0, 0, 0, 0.5);
            clip-path: inset(-20px -20px -6px -20px);
        }

        /* ---- Header: chalk lettering ---- */
        .song-title {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: clamp(2.1rem, 5.4vw, 3.1rem);
            letter-spacing: 0;
            color: #ffffff;
            text-shadow: 0 0 1px rgba(255, 255, 255, 0.8), 0 0 9px rgba(255, 255, 255, 0.14);
            transform: rotate(-0.6deg);
            filter: url(#chalk-rough);
        }
        .meta-label {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: 0.85rem;
            letter-spacing: 0.6px;
            text-transform: none;
            color: #f6e27d;
        }
        .meta-value {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: 1.2rem;
            color: var(--chalk);
            text-shadow: 0 0 1px rgba(255, 255, 255, 0.6), 0 0 6px rgba(255, 255, 255, 0.1);
        }
        .meta-item + .meta-item { border-left: 1px dashed rgba(243, 245, 236, 0.35); }
        .ornament { color: var(--chalk); }
        .ornament::before { background: linear-gradient(to right, transparent, rgba(243, 245, 236, 0.7)); }
        .ornament::after { background: linear-gradient(to left, transparent, rgba(243, 245, 236, 0.7)); }

        /* ---- Lyrics and chords: chalk with a broken, grainy edge ---- */
        .song-content { filter: url(#chalk-rough); mix-blend-mode: normal; }
        .song-content::after { content: none; }

        .token-lyric {
            font-family: var(--hand-font) !important;
            font-size: 1em;
            font-weight: 400;
            letter-spacing: 0;
            line-height: 1.25;
            color: var(--chalk);
            -webkit-text-stroke: 0.3px rgba(255, 255, 255, 0.45);
            text-shadow: 0 0 1px rgba(255, 255, 255, 0.55), 0 0 7px rgba(255, 255, 255, 0.12);
        }
        .token-chord, .instrumental-chord {
            font-family: var(--chord-hand) !important;
            font-size: 1.02em;
            font-weight: 700;
            letter-spacing: 0.2px;
            line-height: 1.05;
            min-height: 1.05em;
            text-shadow: 0 0 1px currentColor, 0 0 7px rgba(255, 255, 255, 0.12);
        }

        /* Hand-written irregularity */
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

        .lyric-line-block { transform-origin: 0 50%; margin-bottom: 22px; }
        .song-content > .lyric-line-block:nth-child(5n+1) { transform: rotate(-0.22deg); }
        .song-content > .lyric-line-block:nth-child(5n+2) { transform: rotate(0.14deg); }
        .song-content > .lyric-line-block:nth-child(5n+3) { transform: rotate(-0.08deg) translateX(1px); }
        .song-content > .lyric-line-block:nth-child(5n+4) { transform: rotate(0.2deg); }
        .song-content > .lyric-line-block:nth-child(5n)   { transform: rotate(-0.15deg) translateX(-1px); }

        @media (max-width: 750px) {
            .sheet-container { padding: 44px 24px 36px; }
            .sheet-container::before { inset: 10px; }
            .sheet-container::after { left: -8px; right: -8px; }
        }
    `;
    document.head.appendChild(style);

    // Chalk filter: slight wobble plus grainy gaps so strokes look dry and broken
    var DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <filter id="chalk-rough" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="3" result="w"/>
        <feDisplacementMap in="SourceGraphic" in2="w" scale="2.6" xChannelSelector="R" yChannelSelector="G" result="d"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="9" result="g"/>
        <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  6 0 0 0 -1.7" result="gm"/>
        <feComposite in="d" in2="gm" operator="in"/>
    </filter>
</svg>`;

    function install() {
        if (!document.getElementById('chalk-rough')) {
            document.body.insertAdjacentHTML('afterbegin', DEFS);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', install);
    } else {
        install();
    }
})();
