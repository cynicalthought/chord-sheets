/*
 * Theme: Stage Noir / Live Acoustic Concert
 * Inspired by dramatic stage lighting, high-contrast monochrome performance photography,
 * and warm incandescent spotlight ambiance.
 */
(function () {
    'use strict';

    window.SONG_THEME = {
        name: 'stage_noir',
        chordColors: {
            red: '#f87171',     // Glowing stage amber/red
            blue: '#60a5fa',    // Cool stage rim light blue
            green: '#4ade80',   // Vivid stage mint
            black: '#f3f4f6'    // High contrast light accent for dark background
        }
    };

    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,400&display=swap';
    document.head.appendChild(font);

    var style = document.createElement('style');
    style.id = 'theme-stage-noir';
    style.textContent = `
        :root {
            --noir-bg: #09090b;
            --noir-card: #121216;
            --noir-border: #27272a;
            --noir-text: #f4f4f5;
            --noir-muted: #a1a1aa;
            --noir-spotlight: rgba(255, 255, 255, 0.04);
            --noir-glow: rgba(255, 255, 255, 0.08);
        }

        /* ---- High-Contrast Cinematic Backdrop ---- */
        body {
            background-color: var(--noir-bg);
            background-image:
                radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.09) 0%, transparent 60%),
                radial-gradient(circle at 80% 80%, rgba(20, 20, 30, 0.5) 0%, transparent 50%);
            background-attachment: fixed;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* ---- Navigation: Minimalist Stage Bar ---- */
        .nav-menu {
            background-color: #18181b !important;
            border: 1px solid var(--noir-border) !important;
            border-radius: 8px !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
        }
        .nav-link {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 600;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #d4d4d8 !important;
            border-right: 1px solid rgba(255, 255, 255, 0.06) !important;
            transition: all 0.2s ease;
        }
        .nav-item.active > .nav-link,
        .nav-item:hover > .nav-link {
            background-color: rgba(255, 255, 255, 0.08) !important;
            color: #ffffff !important;
            box-shadow: inset 0 -2px 0 #ffffff;
        }

        /* ---- Dropdowns ---- */
        .submenu {
            background-color: #18181b !important;
            border: 1px solid var(--noir-border) !important;
            border-radius: 8px !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9) !important;
        }
        .submenu-item { border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important; }
        .submenu-link {
            color: #e4e4e7 !important;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 500;
        }
        .submenu-item.active > .submenu-link,
        .submenu-item:hover > .submenu-link {
            background-color: rgba(255, 255, 255, 0.1) !important;
            color: #ffffff !important;
        }
        .menu-collage-grid {
            background: #27272a !important;
            border: 1px solid #3f3f46 !important;
        }
        .composer-avatar {
            border: 1px solid #3f3f46 !important;
            filter: grayscale(20%);
        }

        /* ---- The Sheet Container: Concert Stage Card ---- */
        .sheet-container {
            background-color: var(--noir-card) !important;
            background-image: 
                radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 70%) !important;
            border: 1px solid var(--noir-border) !important;
            border-radius: 12px !important;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
            padding: 56px 44px !important;
            color: var(--noir-text) !important;
        }
        .sheet-container::before {
            top: 12px; left: 12px; right: 12px; bottom: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: 8px;
            box-shadow: none !important;
        }

        /* ---- Header & Metadata ---- */
        .song-header {
            border-bottom: 1px solid var(--noir-border);
            padding-bottom: 28px;
            margin-bottom: 36px;
        }
        .song-title {
            font-family: 'Playfair Display', serif !important;
            font-weight: 700 !important;
            font-size: clamp(2.2rem, 5vw, 3.2rem) !important;
            color: #ffffff !important;
            letter-spacing: -0.01em;
            line-height: 1.2;
            margin-bottom: 24px !important;
            text-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
        }
        .meta-grid {
            gap: 16px 24px !important;
        }
        .meta-item {
            padding: 0 !important;
            align-items: flex-start !important;
        }
        .meta-item + .meta-item { 
            border-left: 1px solid var(--noir-border) !important; 
            padding-left: 24px !important;
        }
        .meta-label {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
            font-size: 0.68rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.15em !important;
            color: var(--noir-muted) !important;
            text-transform: uppercase;
            margin-bottom: 4px;
        }
        .meta-value {
            font-family: 'Playfair Display', serif !important;
            font-size: 1.25rem !important;
            font-weight: 600 !important;
            color: #e4e4e7 !important;
            line-height: 1.25;
        }
        .ornament { color: #52525b !important; }
        .ornament::before, .ornament::after {
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2)) !important;
        }
        .ornament::after { 
            background: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.2)) !important; 
        }

        /* ---- Content Layout ---- */
        .song-content {
            font-family: 'Playfair Display', serif !important;
            color: var(--noir-text) !important;
        }
        .token-lyric {
            font-family: 'Playfair Display', serif !important;
            font-size: 1.15em !important;
            font-weight: 500 !important;
            color: #f4f4f5 !important;
            letter-spacing: 0.01em;
        }
        .token-chord, .instrumental-chord {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
            font-size: 0.82em !important;
            font-weight: 700 !important;
            letter-spacing: 0.05em !important;
            text-transform: uppercase;
            padding-bottom: 3px;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }
        .lyric-line-block {
            margin-bottom: 22px !important;
        }
        .verse-space {
            height: 24px !important;
        }

        /* ---- Responsive Adjustments ---- */
        @media (max-width: 750px) {
            .sheet-container { padding: 32px 20px !important; }
            .meta-item + .meta-item { border-left: none !important; padding-left: 0 !important; }
            .meta-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px !important; }
        }
    `;
    document.head.appendChild(style);
})();