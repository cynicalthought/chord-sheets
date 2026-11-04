/*
 * Theme: Executive Suite / Professional Editorial
 * A high-end, bespoke publication aesthetic designed for clarity, prestige, 
 * and effortless readability across all devices.
 */
(function () {
    'use strict';

    // Tailored chromatic palette for professional readability and contrast
    window.SONG_THEME = {
        name: 'professional_executive',
        chordColors: {
            red: '#991b1b',     // Deep crimson
            blue: '#1e40af',    // Royal navy
            green: '#166534',   // Forest emerald
            black: '#111827'    // Rich charcoal
        }
    };

    // Load typography: Inter for clean UI, Cormorant Garamond for editorial gravitas
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(font);

    var style = document.createElement('style');
    style.id = 'theme-professional';
    style.textContent = `
        :root {
            --exec-bg: #f8fafc;
            --exec-card: #ffffff;
            --exec-text: #0f172a;
            --exec-muted: #64748b;
            --exec-border: #e2e8f0;
            --exec-accent: #1e293b;
            --exec-gold: #d97706;
        }

        /* ---- Immaculate backdrop ---- */
        body {
            background-color: #0f172a;
            background-image: 
                radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.8) 0%, transparent 70%);
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* ---- Navigation: Sleek Obsidian & Brushed Metal ---- */
        .nav-menu {
            background-color: #1e293b !important;
            border: 1px solid #334155 !important;
            border-radius: 10px !important;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3) !important;
        }
        .nav-link {
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            color: #cbd5e1 !important;
            border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
            transition: all 0.2s ease;
        }
        .nav-item.active > .nav-link,
        .nav-item:hover > .nav-link {
            background-color: rgba(255, 255, 255, 0.06) !important;
            color: #ffffff !important;
            box-shadow: inset 0 -2px 0 var(--exec-gold);
        }

        /* ---- Dropdown Menus ---- */
        .submenu {
            background-color: #1e293b !important;
            border: 1px solid #334155 !important;
            border-radius: 10px !important;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.4) !important;
        }
        .submenu-item { border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; }
        .submenu-link {
            color: #e2e8f0 !important;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
        }
        .submenu-item.active > .submenu-link,
        .submenu-item:hover > .submenu-link {
            background-color: rgba(255, 255, 255, 0.08) !important;
            color: #ffffff !important;
        }
        .menu-collage-grid {
            background: #334155 !important;
            border: 1px solid #475569 !important;
            border-radius: 6px !important;
        }
        .composer-avatar {
            border: 1px solid #475569 !important;
        }

        /* ---- The Sheet Container: Crisp Paper Aesthetic ---- */
        .sheet-container {
            background-color: var(--exec-card) !important;
            background-image: none !important;
            border: 1px solid var(--exec-border) !important;
            border-radius: 14px !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.02) !important;
            padding: 56px 48px !important;
            color: var(--exec-text) !important;
        }
        .sheet-container::before {
            content: none !important;
        }

        /* ---- Typography & Headers ---- */
        .song-header {
            border-bottom: 2px solid var(--exec-border);
            padding-bottom: 28px;
            margin-bottom: 36px;
        }
        .song-title {
            font-family: 'Cormorant Garamond', serif !important;
            font-weight: 700 !important;
            font-size: clamp(2.2rem, 5vw, 3.2rem) !important;
            color: var(--exec-text) !important;
            letter-spacing: -0.015em;
            line-height: 1.15;
            margin-bottom: 24px !important;
        }
        .meta-grid {
            gap: 16px 24px !important;
        }
        .meta-item {
            padding: 0 !important;
            align-items: flex-start !important;
        }
        .meta-item + .meta-item { 
            border-left: 1px solid var(--exec-border) !important; 
            padding-left: 24px !important;
        }
        .meta-label {
            font-family: 'Inter', sans-serif !important;
            font-size: 0.7rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.12em !important;
            color: var(--exec-muted) !important;
            text-transform: uppercase;
            margin-bottom: 4px;
        }
        .meta-value {
            font-family: 'Cormorant Garamond', serif !important;
            font-size: 1.3rem !important;
            font-weight: 600 !important;
            color: var(--exec-accent) !important;
            line-height: 1.2;
        }
        .ornament { display: none !important; }

        /* ---- Content Layout: High Legibility Editorial Spacing ---- */
        .song-content {
            font-family: 'Cormorant Garamond', serif !important;
            color: var(--exec-text) !important;
            letter-spacing: -0.01em;
        }
        .token-lyric {
            font-family: 'Cormorant Garamond', serif !important;
            font-size: 1.15em !important;
            font-weight: 600 !important;
            color: var(--exec-text) !important;
            letter-spacing: 0.01em;
        }
        .token-chord, .instrumental-chord {
            font-family: 'Inter', sans-serif !important;
            font-size: 0.82em !important;
            font-weight: 700 !important;
            letter-spacing: 0.04em !important;
            text-transform: uppercase;
            padding-bottom: 3px;
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

    function install() {
        // Theme initialization logic if needed
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', install);
    } else {
        install();
    }
})();