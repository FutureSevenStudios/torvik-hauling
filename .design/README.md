# Design Package for Torvik Hauling
Generated 2026-04-17 by /using-design.

## How to use this folder
1. Read `brief.md` first. It is the source of truth.
2. Look at `mockups/` to understand the visual target. (Files are `.jpg` — Nano Banana 2 emitted JPEG.)
3. Check `components.json` for pre-picked building blocks (17 picks across 9 roles, 1 gap for service-area-map).
4. `structure/layout.html` and `structure/mobile.html` are *hints*, not code to copy. Stitch substituted Domine for Recoleta in its live library — that's the fallback; your build should use Recoleta per `typography.json`.
5. `palette.json` and `typography.json` are the design tokens — wire them into your CSS variables / Tailwind theme before writing any components.

## Regenerate
- Full regenerate: `/using-design` (will overwrite this folder — commit first)
- Single stage: `/using-design:mockup`, `/using-design:components`, etc.
- Targeted revision: `/using-design:revise <target> "<change>"`

## Handoff to frontend-design
When implementing with `frontend-design`, reference this folder in the skill's context by pointing at `brief.md`. **Do not re-decide aesthetic direction** — it's locked here as warm-trades with a palette override to cool blues. See the "Palette Override" section of the brief for why.

## Known gaps & flags
- **service-area-map** — no strong 21st.dev match. Build custom with Mapbox GL JS or Leaflet + GeoJSON of the 30 service-area cities, or a styled static SVG of Lake County + NW Cook County with highlighted cities.
- **Logo files, photos, video** — client referenced uploads that haven't arrived. See `/Users/lucassenechal/Projects/jaron-websites/torvik-hauling/_context/QUESTIONS.md` for the full list.
- **Licensed & Insured** — unknown; if confirmed, add as a trust badge in the hero trust bar.

## Parallel-MCP caveat for future runs
Stage 4 (21st.dev Magic) hit zod validation errors when the subagent tried to run 4+ parallel `21st_magic_component_inspiration` calls. Sequential calls worked. Future `stage-4-components.md` prompt should say "sequential, not parallel."
