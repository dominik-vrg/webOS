# Brainrot OS

A web-based operating system fully made for web browsers. Desing inspirations took from macOS and TikTok memes of the 2020's. It includes a boot sequence, draggable windows, a dock, Spotlight search, a working calculator, and a live theme engine.

![vibe](https://img.shields.io/badge/vibe-immaculate-00ff41?style=flat-square)
![status](https://img.shields.io/badge/status-fully%20operational-black?style=flat-square)

## Preview

Boots into a CRT-themed terminal sequence, then drops you onto a desktop with draggable, snap-to-grid icons, a magnifying dock, and a top menu bar with a live clock and Spotlight-style search.

## Features

- **Boot sequence** — a fake BIOS log types itself out on launch (skippable in Settings)
- **Draggable windows** — grab any window by its header; z-index reshuffles so the active window comes to front
- **Traffic-light controls** — minimize, maximize/restore, and close, styled after macOS but recolored
- **Dock** — click an icon to launch it, click again to minimize/restore; a running-indicator dot shows which apps are open
- **Snap-to-grid desktop icons** — drag icons around the desktop; they snap into a grid and swap places if you drop one onto an occupied cell
- **Spotlight search** — hit `⌘ K` / `Ctrl+K` or the search bar to filter and launch apps by name, fully keyboard-navigable (arrows + Enter)
- **Right-click context menu** — cycle wallpapers, toggle sound, jump to Spotlight or About, or refresh icon layout
- **Live theme engine** — change the accent color or wallpaper in Settings and the entire OS re-skins instantly (menu bar, windows, dock glow, everything), persisted via `localStorage`
- **Working calculator app** — real arithmetic (+, -, ×, ÷, %, backspace, clear)
- **Notepad app** — a plain textarea for noting things down (nothing is saved between reloads)
- **"DO NOT CLICK" button** — because of course there's one. Spawns cascading fake error popups, each dismissible, capped so it isn't infinite
- **Settings app** — tabbed panel for Appearance, Sound, System, and About, with actions to reset icon positions or wipe all saved settings
- **Optional UI sound effects** — tiny procedural beeps on window open/close, clicks, and calculator keys (Web Audio, no audio files)
- **Responsive** — collapses into a usable single-column layout on narrow/mobile viewports

## How It's Built

Everything is vanilla HTML/CSS/JS - no frameworks, no build tools, no npm install.

- **Theming** runs on CSS custom properties (`--accent`, `--wp-a`, `--wp-b`, etc.) set on `:root`. Settings changes just update these variables at runtime, so the whole UI reacts instantly without touching individual elements.
- **Window management** is a small state machine per `.window` element: drag offsets, front/back z-index, maximize toggling, and dock running state are all tracked in `script.js`.
- **Preferences** (accent color, wallpaper, reduce-motion, sound, boot-screen-on-load) persist across sessions via `localStorage`, with a one-click reset if you want to start fresh.
- **Fonts**: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) for pixel-y UI chrome, [VT323](https://fonts.google.com/specimen/VT323) for terminal-style body text, both loaded from Google Fonts.

## Browser Support

Built and tested against current Chromium. Uses standard modern web APIs (`localStorage`, Web Audio API, CSS `color-mix()`, `backdrop-filter`). Should work in any recent Chrome, Edge, Firefox, or Safari - sound effects and the accent-color mixing rely on relatively modern CSS/JS, so very old browsers may not render the full effect.

## Known Limitations

- Notepad content isn't saved - it resets on reload (by design, keeps things simple).
- Icon/window positions reset if you resize the window dramatically after arranging them.
- Sound effects require one click on the page first - this is a browser autoplay restriction, not a bug.

## License

Do whatever you want with it.