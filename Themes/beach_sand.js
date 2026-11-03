/*
 * Theme: Beach Sand
 * Lyrics, chords and titles drawn with a finger in damp sand: carved grooves
 * with a lit edge, wind ripples, grains, a starfish and pebbles, on a sand
 * bank washed by shallow turquoise water with foam at its edge.
 *
 * Usage: loaded by index.html from the Themes folder, e.g.
 *   index.html?theme=beach_sand
 */
(function () {
    'use strict';

    // Chord "inks": different tones of groove in the sand (read by getColorHex)
    window.SONG_THEME = {
        name: 'beach_sand',
        chordColors: {
            red: '#8a3a22',     // terracotta
            blue: '#2f5368',    // deep sea slate
            green: '#4a6a2a',   // seaweed
            black: '#2c1e10'    // dark wet sand
        }
    };

    // Handwriting fonts (Mynerve includes Greek)
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Mynerve&display=swap';
    document.head.appendChild(font);

    var style = document.createElement('style');
    style.id = 'theme-beach-sand';
    style.textContent = `
        :root {
            --hand-font: 'Mynerve', 'Caveat', 'Segoe Script', 'Bradley Hand', cursive;
            --chord-hand: 'Caveat', 'Mynerve', 'Segoe Script', 'Bradley Hand', cursive;
            --groove: #2c1e10;
            --sand: #fcf8f0;
        }

        /* ---- Shallow turquoise water and shoreline foam ---- */
        body { background-color: #0c525d; background-image: none; }
        body::before {
            content: "";
            position: fixed;
            inset: 0;
            z-index: -1;
            pointer-events: none;
            background-color: #10727b;
            background-image:
                /* shoreline foam highlights */
                radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 35%, transparent 70%),
                /* water current turbulence */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='520'%3E%3Cfilter id='c' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='turbulence' baseFrequency='.014 .018' numOctaves='3' seed='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .75 0 0 0 0 1 0 0 0 0 .93 -4.2 0 0 0 .85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)'/%3E%3C/svg%3E"),
                radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.18) 0%, transparent 65%),
                linear-gradient(to bottom, #094e5b 0%, #117881 40%, #259e94 100%);
        }

        /* ---- Navigation: driftwood bar, sand-coloured lettering ---- */
        .nav-menu {
            background-image: linear-gradient(to bottom, #4a3523, #33241a);
            border: 1px solid #6c5136;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 230, 190, 0.1);
        }
        .nav-link { color: #f3e3bd; border-right-color: rgba(243, 227, 189, 0.18); }
        .nav-item.active > .nav-link,
        .nav-item:hover > .nav-link {
            background-color: rgba(243, 227, 189, 0.12);
            box-shadow: inset 0 -2px 0 #e9cd92;
            color: #fff4d6;
        }
        .nav-link:focus-visible, .submenu-link:focus-visible { outline-color: #7a5a2e; }
        .submenu {
            background-color: #fbf5e6;
            border-color: #a58452;
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.5);
        }
        .submenu-item { border-bottom-color: rgba(120, 88, 44, 0.2); }
        .submenu-link { color: #3c2a14; }
        .submenu-item.active > .submenu-link { background-color: #f0e2c4; }
        @media (hover: hover) {
            .submenu-item:hover > .submenu-link { background-color: #f0e2c4; }
        }
        .submenu .submenu { background-color: rgba(120, 88, 44, 0.06); }

        /* ---- The sand bank ---- */
        .sheet-container {
            background: none;
            border: none;
            box-shadow: none;
            border-radius: 0;
            padding: 56px 48px 52px;
            color: var(--groove);
        }
        .sheet-container::before, .sheet-container::after { content: none; }
        .sheet-container > *:not(.sand-bg) { position: relative; z-index: 1; }

        .sand-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background-color: var(--sand);
            background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat, repeat, repeat, repeat, no-repeat, no-repeat;
            background-image:
                /* starfish */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3CradialGradient id='f' cx='45%' cy='40%' r='65%'%3E%3Cstop offset='0' stop-color='%23f0a066'/%3E%3Cstop offset='1' stop-color='%23c0602c'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cpolygon points='50.0,6.0 60.0,36.2 91.8,36.4 66.2,55.3 75.9,85.6 50.0,67.0 24.1,85.6 33.8,55.3 8.2,36.4 40.0,36.2' fill='url(%23f)' stroke='%23a2491f' stroke-width='2.2' stroke-linejoin='round'/%3E%3Ccircle cx='50.0' cy='36.0' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='50.0' cy='26.0' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='50.0' cy='17.0' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='63.3' cy='45.7' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='72.8' cy='42.6' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='81.4' cy='39.8' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='58.2' cy='61.3' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='64.1' cy='69.4' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='69.4' cy='76.7' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='41.8' cy='61.3' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='35.9' cy='69.4' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='30.6' cy='76.7' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='36.7' cy='45.7' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='27.2' cy='42.6' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='18.6' cy='39.8' r='1.5' fill='%23fffaf0'/%3E%3Ccircle cx='50' cy='50' r='4' fill='%23fffaf0'/%3E%3C/svg%3E"),
                /* pebbles */
                radial-gradient(ellipse 11px 8px at 5.5% calc(100% - 44px), #b7ab9a 0, #8d8171 70%, #5f564a 100%),
                radial-gradient(ellipse 7px 5px at 7.8% calc(100% - 36px), #c2b6a4 0, #978b7a 70%, #655b4e 100%),
                radial-gradient(ellipse 9px 6px at 94% 11%, #a9a090 0, #80766a 70%, #574f45 100%),
                radial-gradient(ellipse 6px 4px at 91.5% 14%, #b8ae9d 0, #8b8070 70%, #5f564a 100%),
                radial-gradient(ellipse 8px 5px at 3.5% 8%, #b3a897 0, #877c6c 70%, #5c5347 100%),
                /* wind ripples: shadow side */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Cfilter id='s' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='turbulence' baseFrequency='.004 .042' numOctaves='3' seed='5' stitchTiles='stitch' result='t'/%3E%3CfeDiffuseLighting in='t' surfaceScale='2' diffuseConstant='1' lighting-color='%23fff' result='l'%3E%3CfeDistantLight azimuth='225' elevation='55'/%3E%3C/feDiffuseLighting%3E%3CfeColorMatrix in='l' values='0 0 0 0 .7 0 0 0 0 .6 0 0 0 0 .45 -1.1 0 0 0 .5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23s)'/%3E%3C/svg%3E"),
                /* wind ripples: lit side */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Cfilter id='h' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='turbulence' baseFrequency='.004 .042' numOctaves='3' seed='5' stitchTiles='stitch' result='t'/%3E%3CfeDiffuseLighting in='t' surfaceScale='2' diffuseConstant='1' lighting-color='%23fff' result='l'%3E%3CfeDistantLight azimuth='225' elevation='55'/%3E%3C/feDiffuseLighting%3E%3CfeColorMatrix in='l' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1.1 0 0 0 -.55'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23h)'/%3E%3C/svg%3E"),
                /* sand grains: very subtle quartz specks */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='d' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='2' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .65 0 0 0 0 .55 0 0 0 0 .4 4 0 0 0 -3.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23d)'/%3E%3Cfilter id='l' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' seed='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 6 0 0 0 -3.3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23l)'/%3E%3C/svg%3E"),
                /* soft white sun glare */
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1100' height='1100'%3E%3Cfilter id='p' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.0045' numOctaves='4' seed='17' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .9 0 0 0 0 .85 0 0 0 0 .75 .5 0 0 0 -.1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E"),
                radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.85) 0%, transparent 75%),
                radial-gradient(ellipse at 50% 112%, rgba(220, 200, 170, 0.25) 0%, transparent 55%),
                radial-gradient(ellipse at 50% -12%, rgba(220, 200, 170, 0.2) 0%, transparent 55%);
            background-size: 100px 100px, auto, auto, auto, auto, auto, 900px 900px, 900px 900px, 220px 220px, 1100px 1100px, auto, auto, auto;
            background-position: right 3.5% bottom 26px, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
            /* light wet sand border where the water laps */
            box-shadow:
                inset 0 0 0 3px rgba(150, 130, 100, 0.3),
                inset 0 0 28px 6px rgba(170, 150, 120, 0.25),
                inset 0 0 95px rgba(200, 180, 150, 0.15);
            filter: url(#sand-edge)
                    drop-shadow(0 0 4px rgba(255, 255, 255, 0.98))
                    drop-shadow(0 0 14px rgba(214, 248, 244, 0.8))
                    drop-shadow(0 14px 20px rgba(0, 35, 45, 0.6));
        }

        /* ---- Header: lettering drawn in the sand ---- */
        .song-title {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: clamp(2.1rem, 5.4vw, 3.1rem);
            letter-spacing: 0;
            color: var(--groove);
            -webkit-text-stroke: 1.4px var(--groove);
            text-shadow: 1.5px 1.5px 0 rgba(255, 255, 255, 0.95), -1px -1px 1px rgba(100, 80, 60, 0.25), 0 0 4px rgba(120, 90, 60, 0.15);
            transform: rotate(-0.6deg);
            filter: url(#sand-draw);
        }
        .meta-label {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: 0.85rem;
            letter-spacing: 0.6px;
            text-transform: none;
            color: #5a4530;
        }
        .meta-value {
            font-family: var(--hand-font);
            font-weight: 400;
            font-size: 1.2rem;
            color: var(--groove);
            -webkit-text-stroke: 0.6px var(--groove);
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.9), -0.5px -0.5px 0.5px rgba(100, 80, 60, 0.2);
        }
        .meta-item + .meta-item { border-left: 1px solid rgba(120, 100, 80, 0.25); }
        .ornament { color: #463420; }
        .ornament::before { background: linear-gradient(to right, transparent, rgba(120, 100, 80, 0.45)); }
        .ornament::after { background: linear-gradient(to left, transparent, rgba(120, 100, 80, 0.45)); }

        /* ---- Lyrics and chords: finger-drawn grooves ---- */
        .song-content { filter: url(#sand-draw); mix-blend-mode: normal; }

        .token-lyric {
            font-family: var(--hand-font) !important;
            font-size: 1em;
            font-weight: 400;
            letter-spacing: 0;
            line-height: 1.25;
            color: var(--groove);
            -webkit-text-stroke: 1px var(--groove);
            text-shadow: 1.4px 1.4px 0 rgba(255, 255, 255, 0.95), -1px -1px 1px rgba(100, 80, 60, 0.25), 0 0 3px rgba(120, 90, 60, 0.12);
        }
        .token-chord, .instrumental-chord {
            font-family: var(--chord-hand) !important;
            font-size: 1.04em;
            font-weight: 700;
            letter-spacing: 0.2px;
            line-height: 1.05;
            min-height: 1.05em;
            -webkit-text-stroke: 0.8px currentColor;
            text-shadow: 1.4px 1.4px 0 rgba(255, 255, 255, 0.95), -0.8px -0.8px 1px rgba(100, 80, 60, 0.25);
        }

        /* Loose sand grains settled over the grooves */
        .song-content::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' seed='12' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 8 0 0 0 -5.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
            background-size: 300px 300px;
            opacity: 0.2;
        }

        /* Hand-drawn irregularity */
        .token-pair { transform-origin: 0 100%; }
        .lyric-line-block .token-pair:nth-child(7n+1) { transform: rotate(-0.8deg) translateY(0.6px); }
        .lyric-line-block .token-pair:nth-child(7n+2) { transform: rotate(0.6deg) translateY(-0.9px); }
        .lyric-line-block .token-pair:nth-child(7n+3) { transform: rotate(-0.4deg) translateY(1px); }
        .lyric-line-block .token-pair:nth-child(7n+4) { transform: rotate(0.9deg) translateY(0); }
        .lyric-line-block .token-pair:nth-child(7n+5) { transform: rotate(-0.6deg) translateY(-0.6px); }
        .lyric-line-block .token-pair:nth-child(7n+6) { transform: rotate(0.4deg) translateY(0.8px); }
        .lyric-line-block .token-pair:nth-child(7n)   { transform: rotate(-0.3deg) translateY(-1px); }
        .token-chord:nth-child(odd) { transform: rotate(-1.3deg); }
        .token-pair:nth-child(3n) .token-chord { transform: rotate(1.1deg) translateY(1px); }

        .lyric-line-block { transform-origin: 0 50%; margin-bottom: 24px; }
        .song-content > .lyric-line-block:nth-child(5n+1) { transform: rotate(-0.28deg); }
        .song-content > .lyric-line-block:nth-child(5n+2) { transform: rotate(0.18deg); }
        .song-content > .lyric-line-block:nth-child(5n+3) { transform: rotate(-0.1deg) translateX(1px); }
        .song-content > .lyric-line-block:nth-child(5n+4) { transform: rotate(0.24deg); }
        .song-content > .lyric-line-block:nth-child(5n)   { transform: rotate(-0.18deg) translateX(-1px); }

        @media (max-width: 750px) {
            .sheet-container { padding: 38px 24px 34px; }
            .sand-bg { background-size: 70px 70px, auto, auto, auto, auto, auto, 900px 900px, 900px 900px, 220px 220px, 1100px 1100px, auto, auto, auto; }
        }
    `;
    document.head.appendChild(style);

    // sand-edge: irregular shoreline. sand-draw: slightly shaky finger strokes.
    var DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <filter id="sand-edge" x="-4%" y="-3%" width="108%" height="106%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="15" result="big"/>
        <feDisplacementMap in="SourceGraphic" in2="big" scale="32" xChannelSelector="R" yChannelSelector="G" result="a"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" seed="4" result="mid"/>
        <feDisplacementMap in="a" in2="mid" scale="8" xChannelSelector="G" yChannelSelector="R"/>
    </filter>
    <filter id="sand-draw" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="w"/>
        <feDisplacementMap in="SourceGraphic" in2="w" scale="3.2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
</svg>`;

    function install() {
        if (!document.getElementById('sand-edge')) {
            document.body.insertAdjacentHTML('afterbegin', DEFS);
        }
        var sheet = document.querySelector('.sheet-container');
        if (sheet && !sheet.querySelector('.sand-bg')) {
            var sand = document.createElement('div');
            sand.className = 'sand-bg';
            sand.setAttribute('aria-hidden', 'true');
            sheet.insertBefore(sand, sheet.firstChild);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', install);
    } else {
        install();
    }
})();