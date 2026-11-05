/*
 * Theme: Atelier Luxe / Architectural Haute-Couture
 * An uncompromising, ultra-refined editorial design featuring a bespoke floating 
 * glass header, artisanal typography pairing (Cinzel & Plus Jakarta Sans), micro-interactions, 
 * and precise musical hierarchy.
 */
(function () {
    'use strict';

    window.SONG_THEME = {
        name: 'atelier_luxe',
        chordColors: {
            red: '#9f1239',     // Deep rose-crimson
            blue: '#1e3a8a',    // Deep obsidian-blue
            green: '#065f46',   // Deep pine-emerald
            black: '#18181b'    // Warm carbon
        }
    };

    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap';
    document.head.appendChild(font);

    var style = document.createElement('style');
    style.id = 'theme-atelier-luxe';
    style.textContent = `
        :root {
            --luxe-bg: #09090b;
            --luxe-surface: #121215;
            --luxe-card: #faf9f6;
            --luxe-text: #1c1917;
            --luxe-muted: #78716c;
            --luxe-border: #e7e5e4;
            --luxe-gold: #b45309;
            --luxe-gold-glow: rgba(180, 83, 9, 0.15);
        }

        /* ---- Deep Architectural Ambiance ---- */
        body {
            background-color: var(--luxe-bg);
            background-image:
                radial-gradient(circle at 50% -20%, rgba(180, 83, 9, 0.08) 0%, transparent 60%),
                radial-gradient(circle at 50% 120%, rgba(20, 20, 25, 0.9) 0%, transparent 80%);
            background-attachment: fixed;
            font-family: 'Plus Jakarta Sans', sans-serif;
            letter-spacing: -0.01em;
        }

        /* ---- Floating Glass Navigation Bar ---- */
        .navbar-container {
            max-width: 1040px !important;
        }
        .nav-menu {
            background-color: rgba(18, 18, 21, 0.85) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            border-radius: 12px !important;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
            padding: 4px;
        }
        .nav-link {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 500;
            font-size: 0.85rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #d6d3d1 !important;
            border-right: none !important;
            border-radius: 8px !important;
            margin: 0 2px;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-item.active > .nav-link,
        .nav-item:hover > .nav-link {
            background-color: rgba(255, 255, 255, 0.08) !important;
            color: #ffffff !important;
            box-shadow: 0 0 20px rgba(180, 83, 9, 0.2);
        }

        /* ---- Ultra-Refined Dropdowns ---- */
        .submenu {
            background-color: #121215 !important;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 12px !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85) !important;
            padding: 6px !important;
        }
        .submenu-item { border-bottom: none !important; border-radius: 6px; margin-bottom: 2px; }
        .submenu-link {
            color: #e7e5e4 !important;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 400;
            font-size: 0.95rem;
            border-radius: 6px;
            transition: background 0.2s ease;
        }
        .submenu-item.active > .submenu-link,
        .submenu-item:hover > .submenu-link {
            background-color: rgba(180, 83, 9, 0.15) !important;
            color: #ffffff !important;
        }
        .menu-collage-grid {
            background: #1c1917 !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 6px !important;
        }
        .composer-avatar {
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }

        /* ---- The Sheet Container: Haute-Couture Paper Parchment Card ---- */
        .sheet-container {
            max-width: 1040px !important;
            background-color: var(--luxe-card) !important;
            background-image:
                radial-gradient(circle at 0% 0%, rgba(245, 243, 239, 0.8) 0%, transparent 60%),
                radial-gradient(circle at 100% 100%, rgba(231, 229, 228, 0.5) 0%, transparent 50%) !important;
            border: 1px solid rgba(180, 83, 9, 0.2) !important;
            border-radius: 16px !important;
            box-shadow: 
                0 40px 100px -20px rgba(0, 0, 0, 0.8),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 0 120px rgba(180, 83, 9, 0.04) !important;
            padding: 64px 56px !important;
            color: var(--luxe-text) !important;
        }
        .sheet-container::before {
            top: 16px; left: 16px; right: 16px; bottom: 16px;
            border: 1px solid rgba(180, 83, 9, 0.15) !important;
            border-radius: 10px;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
            pointer-events: none;
        }

        /* ---- Architectural Header & Metadata Block ---- */
        .song-header {
            border-bottom: 2px solid var(--luxe-border);
            padding-bottom: 36px;
            margin-bottom: 42px;
            position: relative;
        }
        .song-header::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 2px;
            background-color: var(--luxe-gold);
        }
        .song-title {
            font-family: 'Cinzel', serif !important;
            font-weight: 600 !important;
            font-size: clamp(2.4rem, 5.5vw, 3.6rem) !important;
            color: var(--luxe-text) !important;
            letter-spacing: 0.04em;
            line-height: 1.15;
            margin-bottom: 30px !important;
            text-align: center;
        }
        .meta-grid {
            display: grid !important;
            grid-template-columns: repeat(6, 1fr);
            gap: 16px !important;
            justify-content: center;
            background: rgba(180, 83, 9, 0.03);
            border: 1px solid var(--luxe-border);
            border-radius: 10px;
            padding: 16px 20px;
        }
        .meta-item {
            padding: 0 !important;
            align-items: center !important;
            text-align: center;
        }
        .meta-item + .meta-item { 
            border-left: 1px solid var(--luxe-border) !important; 
            padding-left: 0 !important;
        }
        .meta-label {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
            font-size: 0.62rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.2em !important;
            color: var(--luxe-gold) !important;
            text-transform: uppercase;
            margin-bottom: 6px;
        }
        .meta-value {
            font-family: 'Plus Jakarta Sans', serif !important;
            font-size: 1.05rem !important;
            font-weight: 600 !important;
            color: var(--luxe-text) !important;
            line-height: 1.25;
        }
        .ornament { display: none !important; }

        /* ---- Content Layout & Typography ---- */
        .song-content {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
            color: var(--luxe-text) !important;
        }
        .token-lyric {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
            font-size: 1.15em !important;
            font-weight: 500 !important;
            color: var(--luxe-text) !important;
            letter-spacing: -0.005em;
        }
        .token-chord, .instrumental-chord {
            font-family: 'Cinzel', serif !important;
            font-size: 0.85em !important;
            font-weight: 700 !important;
            letter-spacing: 0.08em !important;
            text-transform: none !important;
            padding-bottom: 4px;
        }
        .lyric-line-block {
            margin-bottom: 26px !important;
        }
        .verse-space {
            height: 32px !important;
        }

        /* ---- Responsive Adjustments ---- */
        @media (max-width: 900px) {
            .meta-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 16px 12px !important; }
            .meta-item + .meta-item { border-left: none !important; }
        }
        @media (max-width: 750px) {
            .sheet-container { padding: 36px 20px !important; }
            .meta-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
    `;
    document.head.appendChild(style);

    // Formatter utility to ensure chord suffixes stay lowercase while first letter is capitalized
    function normalizeChordCasing(text) {
        if (!text) return text;
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    function enforceChordFormatting() {
        var chords = document.querySelectorAll('.token-chord, .instrumental-chord');
        chords.forEach(function(el) {
            if (el.textContent && el.dataset.normalized !== 'true') {
                el.textContent = normalizeChordCasing(el.textContent.trim());
                el.dataset.normalized = 'true';
            }
        });
    }

    var observer = new MutationObserver(function() {
        enforceChordFormatting();
    });

    function install() {
        enforceChordFormatting();
        var content = document.getElementById('song-content');
        if (content) {
            observer.observe(content, { childList: true, subtree: true });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', install);
    } else {
        install();
    }
})();