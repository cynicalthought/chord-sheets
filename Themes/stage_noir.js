/*
 * Theme: Stage Noir / Opening Soon
 * Inspired by a black-and-white cinema title card: a grainy charcoal screen with
 * scratches and dust, tall chalk-white poster lettering with ornamental flourishes,
 * and a silhouetted audience in cinema seats watching from below.
 */
(function () {
    'use strict';

    window.SONG_THEME = {
        name: 'stage_noir',
        chordColors: {
            red: '#ff9d96',     // warm projector-lit rose
            blue: '#93c8ff',    // cool silver-blue
            green: '#9be8b0',   // pale mint
            black: '#ffffff'    // pure white on the dark screen
        }
    };

    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@500;600;700&family=Fira+Sans+Condensed:wght@400;500;600;700&family=Source+Serif+4:wght@400;500;600&display=swap';
    document.head.appendChild(font);

    var style = document.createElement('style');
    style.id = 'theme-stage-noir';
    style.textContent = `
        :root {
            --screen: #262626;
            --screen-hi: #3b3b3b;
            --ink: #f1f1ec;
            --ink-dim: #c6c6c0;
            --edge: #3a3a3a;
            --display: 'Fira Sans Extra Condensed', 'Fira Sans Condensed', 'Arial Narrow', sans-serif;
            --ui: 'Fira Sans Condensed', 'Fira Sans', 'Arial Narrow', sans-serif;
            --serif: 'Source Serif 4', 'Noto Serif', Georgia, serif;
        }

        /* ---- Darkened cinema: black room, grain and a projector beam ---- */
        body {
            background-color: #060606;
            background-image: none;
            font-family: var(--ui);
            padding-bottom: 260px !important;
        }
        body::before {
            content: "";
            position: fixed;
            inset: 0;
            z-index: -2;
            pointer-events: none;
            background-color: #060606;
            background-image:
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' seed='14' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.7 0 0 0 -0.26'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
                radial-gradient(ellipse at 50% -10%, rgba(255, 255, 255, 0.10) 0%, transparent 60%),
                radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(0, 0, 0, 0.8) 100%);
            background-size: 300px 300px, auto, auto;
        }
        body::after {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 85vh;
            z-index: -1;
            pointer-events: none;
            clip-path: polygon(43% 0, 57% 0, 100% 100%, 0 100%);
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.015) 60%, transparent);
        }

        /* ---- Navigation: black marquee strip ---- */
        .nav-menu {
            background-color: #111 !important;
            background-image: none !important;
            border: 1px solid #333 !important;
            border-radius: 3px !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.06) !important;
        }
        .nav-link {
            font-family: var(--ui);
            font-weight: 600;
            font-size: 0.95rem;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #d8d8d3 !important;
            border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
            transition: background-color 0.2s ease, color 0.2s ease;
        }
        .nav-item.active > .nav-link,
        .nav-item:hover > .nav-link {
            background-color: rgba(255, 255, 255, 0.09) !important;
            background-image: none !important;
            color: #ffffff !important;
            box-shadow: inset 0 -2px 0 #ffffff !important;
        }
        .nav-link:focus-visible, .submenu-link:focus-visible { outline: 2px solid #ffffff; outline-offset: -3px; }

        .submenu, .submenu .submenu {
            background-color: #141414 !important;
            border: 1px solid #353535 !important;
            border-radius: 3px !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9) !important;
        }
        .submenu-item { border-bottom: 1px solid rgba(255, 255, 255, 0.07) !important; }
        .submenu-link {
            color: #e6e6e1 !important;
            font-family: var(--ui);
            font-weight: 500;
            letter-spacing: 0.02em;
        }
        .submenu-item.active > .submenu-link { background-color: rgba(255, 255, 255, 0.12) !important; color: #fff !important; }
        @media (hover: hover) {
            .submenu-item:hover > .submenu-link { background-color: rgba(255, 255, 255, 0.12) !important; color: #fff !important; }
        }
        .menu-collage-grid { background: #2a2a2a !important; border: 1px solid #444 !important; }
        .composer-avatar { border: 1px solid #555 !important; filter: grayscale(100%) contrast(1.05); }

        /* ---- The cinema screen ---- */
        .sheet-container {
            background-color: var(--screen) !important;
            background-image: radial-gradient(ellipse at 50% 36%, var(--screen-hi) 0%, #2b2b2b 45%, #181818 100%) !important;
            border: 1px solid #444 !important;
            border-radius: 3px !important;
            box-shadow:
                0 0 0 9px #000,
                0 0 0 10px #2c2c2c,
                0 30px 90px rgba(0, 0, 0, 0.95),
                0 0 140px rgba(255, 255, 255, 0.07) !important;
            padding: 62px 50px 56px !important;
            color: var(--ink) !important;
        }
        /* film grain, dust and scratches across the screen */
        .sheet-container::before {
            content: "";
            position: absolute;
            inset: 0;
            border: none !important;
            border-radius: inherit;
            pointer-events: none;
            z-index: 0;
            box-shadow: inset 0 0 130px rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='700'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7 .0009' numOctaves='1' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .85 0 0 0 0 .85 0 0 0 0 .85 12 0 0 0 -8.55'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='360'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.6' numOctaves='2' seed='11' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 6 0 0 0 -3.3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='420'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.28' numOctaves='3' seed='7' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.4 0 0 0 -0.12'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.6 0 0 0 -0.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
            background-size: 500px 700px, 360px 360px, 420px 420px, 300px 300px;
        }
        /* audience in cinema seats, below the screen */
        .sheet-container::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            margin-top: 10px;
            height: 214px;
            pointer-events: none;
            z-index: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1152' height='214' viewBox='0 0 1152 214'%3E%3Cdefs%3E%3ClinearGradient id='sb' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%236a6a6a'/%3E%3Cstop offset='1' stop-color='%232a2a2a'/%3E%3C/linearGradient%3E%3ClinearGradient id='sk' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23454545'/%3E%3Cstop offset='1' stop-color='%231c1c1c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1152' height='214' fill='%230a0a0a'/%3E%3Crect width='1152' height='18' fill='%23000'/%3E%3Crect x='2' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='98' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='194' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='290' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='386' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='482' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='578' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='674' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='770' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='866' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='962' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Crect x='1058' y='74' width='88' height='70' rx='9' fill='url(%23sk)' stroke='%23707070' stroke-width='2'/%3E%3Ccircle cx='142' cy='64' r='19' fill='%23000'/%3E%3Cpath d='M108 100 C110 80 128 76 142 76 C156 76 174 80 176 100 Z' fill='%23000'/%3E%3Ccircle cx='334' cy='64' r='19' fill='%23000'/%3E%3Cpath d='M300 100 C302 80 320 76 334 76 C348 76 366 80 368 100 Z' fill='%23000'/%3E%3Ccircle cx='430' cy='64' r='19' fill='%23000'/%3E%3Cpath d='M396 100 C398 80 416 76 430 76 C444 76 462 80 464 100 Z' fill='%23000'/%3E%3Ccircle cx='622' cy='64' r='19' fill='%23000'/%3E%3Cpath d='M588 100 C590 80 608 76 622 76 C636 76 654 80 656 100 Z' fill='%23000'/%3E%3Ccircle cx='814' cy='64' r='19' fill='%23000'/%3E%3Cpath d='M780 100 C782 80 800 76 814 76 C828 76 846 80 848 100 Z' fill='%23000'/%3E%3Ccircle cx='910' cy='64' r='19' fill='%23000'/%3E%3Cpath d='M876 100 C878 80 896 76 910 76 C924 76 942 80 944 100 Z' fill='%23000'/%3E%3Ccircle cx='1102' cy='64' r='19' fill='%23000'/%3E%3Cpath d='M1068 100 C1070 80 1088 76 1102 76 C1116 76 1134 80 1136 100 Z' fill='%23000'/%3E%3Crect x='4' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='14' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Crect x='132' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='142' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Crect x='260' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='270' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Crect x='388' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='398' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Crect x='516' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='526' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Crect x='644' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='654' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Crect x='772' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='782' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Crect x='900' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='910' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Crect x='1028' y='120' width='116' height='100' rx='12' fill='url(%23sb)' stroke='%23b4b4b4' stroke-width='3'/%3E%3Crect x='1038' y='132' width='96' height='4' rx='2' fill='%23ffffff' opacity='.1'/%3E%3Cg transform='translate(62 82) scale(1.0)' fill='%23000'%3E%3Cpath d='M-56 70 C-54 30 -30 18 -11 16 L11 16 C30 18 54 30 56 70 Z'/%3E%3Crect x='-9' y='0' width='18' height='22'/%3E%3Cellipse cx='0' cy='-6' rx='22' ry='25'/%3E%3Ccircle cx='2' cy='-36' r='11'/%3E%3C/g%3E%3Cg transform='translate(318 78) scale(1.04)' fill='%23000'%3E%3Cpath d='M-56 70 C-54 30 -30 18 -11 16 L11 16 C30 18 54 30 56 70 Z'/%3E%3Crect x='-9' y='0' width='18' height='22'/%3E%3Cellipse cx='0' cy='-6' rx='22' ry='25'/%3E%3Cpath d='M-26 -8 C-26 -40 26 -40 26 -8 L32 44 C20 52 -20 52 -32 44 Z'/%3E%3C/g%3E%3Cg transform='translate(446 88) scale(0.98)' fill='%23000'%3E%3Cpath d='M-56 70 C-54 30 -30 18 -11 16 L11 16 C30 18 54 30 56 70 Z'/%3E%3Crect x='-9' y='0' width='18' height='22'/%3E%3Cellipse cx='0' cy='-6' rx='22' ry='25'/%3E%3Cellipse cx='0' cy='-14' rx='24' ry='19'/%3E%3C/g%3E%3Cg transform='translate(574 80) scale(1.0)' fill='%23000'%3E%3Cpath d='M-56 70 C-54 30 -30 18 -11 16 L11 16 C30 18 54 30 56 70 Z'/%3E%3Crect x='-9' y='0' width='18' height='22'/%3E%3Cellipse cx='0' cy='-6' rx='22' ry='25'/%3E%3Ccircle cx='2' cy='-36' r='11'/%3E%3C/g%3E%3Cg transform='translate(702 84) scale(1.02)' fill='%23000'%3E%3Cpath d='M-56 70 C-54 30 -30 18 -11 16 L11 16 C30 18 54 30 56 70 Z'/%3E%3Crect x='-9' y='0' width='18' height='22'/%3E%3Cellipse cx='0' cy='-6' rx='22' ry='25'/%3E%3Cpath d='M-26 -8 C-26 -40 26 -40 26 -8 L32 44 C20 52 -20 52 -32 44 Z'/%3E%3C/g%3E%3Cg transform='translate(958 76) scale(1.03)' fill='%23000'%3E%3Cpath d='M-56 70 C-54 30 -30 18 -11 16 L11 16 C30 18 54 30 56 70 Z'/%3E%3Crect x='-9' y='0' width='18' height='22'/%3E%3Cellipse cx='0' cy='-6' rx='22' ry='25'/%3E%3Cpath d='M16 -26 C46 -30 44 10 30 30 C36 0 30 -14 14 -16 Z'/%3E%3C/g%3E%3Cg transform='translate(1086 86) scale(1.0)' fill='%23000'%3E%3Cpath d='M-56 70 C-54 30 -30 18 -11 16 L11 16 C30 18 54 30 56 70 Z'/%3E%3Crect x='-9' y='0' width='18' height='22'/%3E%3Cellipse cx='0' cy='-6' rx='22' ry='25'/%3E%3Cellipse cx='0' cy='-14' rx='24' ry='19'/%3E%3C/g%3E%3C/svg%3E");
            background-repeat: repeat-x;
            background-position: center top;
            background-size: auto 214px;
            -webkit-mask-image: linear-gradient(to bottom, #000 62%, transparent 100%);
            mask-image: linear-gradient(to bottom, #000 62%, transparent 100%);
        }

        /* ---- Header: title card ---- */
        .song-header { border-bottom: none; padding-bottom: 6px; margin-bottom: 34px; }
        .song-title {
            font-family: var(--display) !important;
            font-weight: 700 !important;
            font-size: clamp(2.5rem, 7.4vw, 4.4rem) !important;
            line-height: 1.04 !important;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            margin: 0 0 22px !important;
            text-wrap: balance;
            color: transparent !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' seed='9' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 7 0 0 0 -4.1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"), linear-gradient(to bottom, #fbfbf7, #dcdcd6);
            background-size: 300px 300px, 100% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.22));
            text-shadow: none !important;
            transform: none !important;
        }
        .meta-grid { gap: 14px 0 !important; }
        .meta-item { padding: 0 24px !important; align-items: center !important; }
        .meta-item + .meta-item { border-left: 1px solid #4a4a4a !important; padding-left: 24px !important; }
        .meta-label {
            font-family: var(--ui) !important;
            font-size: 0.7rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.2em !important;
            text-transform: uppercase !important;
            color: var(--ink-dim) !important;
        }
        .meta-value {
            font-family: var(--ui) !important;
            font-size: 1.2rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.02em;
            color: var(--ink) !important;
            text-shadow: none !important;
            -webkit-text-stroke: 0 !important;
        }
        .ornament { color: #e8e8e2 !important; gap: 10px !important; margin-top: 26px !important; }
        .ornament::before, .ornament::after {
            content: "" !important;
            flex: 1;
            height: 26px !important;
            background-repeat: no-repeat !important;
            background-size: 100% 100% !important;
            opacity: 0.9;
        }
        .ornament::before { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 28' preserveAspectRatio='none'%3E%3Cpath d='M398 14 H300 C270 14 262 5 232 5 C200 5 190 21 160 21 C135 21 125 9 100 9 C80 9 70 4 55 4 C38 4 30 13 36 20 C41 26 52 24 52 18 C52 14 46 13 44 16' fill='none' stroke='%23e8e8e2' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M398 21 H330 C310 21 300 15 282 15' fill='none' stroke='%23e8e8e2' stroke-width='1' stroke-linecap='round' opacity='.7'/%3E%3Ccircle cx='20' cy='22' r='2' fill='%23e8e8e2'/%3E%3C/svg%3E") !important; }
        .ornament::after  { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 28' preserveAspectRatio='none'%3E%3Cg transform='translate(400 0) scale(-1 1)'%3E%3Cpath d='M398 14 H300 C270 14 262 5 232 5 C200 5 190 21 160 21 C135 21 125 9 100 9 C80 9 70 4 55 4 C38 4 30 13 36 20 C41 26 52 24 52 18 C52 14 46 13 44 16' fill='none' stroke='%23e8e8e2' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M398 21 H330 C310 21 300 15 282 15' fill='none' stroke='%23e8e8e2' stroke-width='1' stroke-linecap='round' opacity='.7'/%3E%3Ccircle cx='20' cy='22' r='2' fill='%23e8e8e2'/%3E%3C/g%3E%3C/svg%3E") !important; }
        .ornament span { font-size: 0.85rem; }

        /* ---- Lyrics and chords ---- */
        .song-content { position: relative; color: var(--ink) !important; }
        .token-lyric {
            font-family: var(--serif) !important;
            font-size: 1.05em !important;
            font-weight: 500 !important;
            letter-spacing: 0.01em;
            color: var(--ink) !important;
            text-shadow: 0 0 9px rgba(255, 255, 255, 0.16);
        }
        .token-chord, .instrumental-chord {
            font-family: var(--display) !important;
            font-size: 1em !important;
            font-weight: 700 !important;
            letter-spacing: 0.06em !important;
            text-transform: none !important;
            padding-bottom: 3px;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.18), 0 2px 6px rgba(0, 0, 0, 0.7);
        }
        .lyric-line-block { margin-bottom: 24px !important; }
        .verse-space { height: 26px !important; }
        /* worn print: flecks of screen-grey eat into the lettering like old film */
        .song-content::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' seed='21' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 7 0 0 0 -4.15'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
            background-size: 260px 260px;
            opacity: 0.55;
        }

        @media (max-width: 750px) {
            .sheet-container { padding: 38px 20px 34px !important; }
            .sheet-container::after { height: 150px; background-size: auto 150px; }
            body { padding-bottom: 190px !important; }
            .meta-item { padding: 0 14px !important; }
            .meta-item + .meta-item { padding-left: 14px !important; }
        }
    `;
    document.head.appendChild(style);

    function normalizeChordCasing(text) {
        if (!text) return text;
        var trimmed = text.trim();
        if (trimmed.length === 0) return text;
        return trimmed.split(/\s+/).map(function (chordPart) {
            if (chordPart.length === 0) return chordPart;
            if (chordPart.indexOf('/') !== -1) {
                return chordPart.split('/').map(function (sub) {
                    return sub.length > 0 ? sub.charAt(0).toUpperCase() + sub.slice(1).toLowerCase() : sub;
                }).join('/');
            }
            return chordPart.charAt(0).toUpperCase() + chordPart.slice(1).toLowerCase();
        }).join(' ');
    }

    var observer;

    function enforceChordFormatting() {
        var chords = document.querySelectorAll('.token-chord, .instrumental-chord');
        chords.forEach(function (el) {
            if (el.textContent) {
                var fixed = normalizeChordCasing(el.textContent);
                if (fixed !== el.textContent) {
                    el.textContent = fixed;
                }
            }
        });
    }

    function install() {
        enforceChordFormatting();
        var content = document.getElementById('song-content');
        if (content && typeof MutationObserver !== 'undefined') {
            observer = new MutationObserver(function () {
                observer.disconnect();
                enforceChordFormatting();
                observer.observe(content, { childList: true, subtree: true });
            });
            observer.observe(content, { childList: true, subtree: true });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', install);
    } else {
        install();
    }
})();