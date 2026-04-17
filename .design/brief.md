# Design Brief — Torvik Hauling
Generated: 2026-04-17 by using-design

## Aesthetic Direction
Warm-trades (palette-substituted). A hard-working contractor who cares — tactile, grounded, trustworthy. Chunky display type, tactile paper-cream background, deep navy primary, cool light-blue accent. Feels like a family-owned trades business that's been doing honest work for a generation — not a junk-removal franchise, not a tech startup.

## Why This Direction
Warm-trades is the semantic home for junk removal, hauling, and local blue-collar services. It projects "family-owned, reliable, does the heavy lifting" — which is exactly Torvik's positioning (tagline: *Family Owned. Community Focused.*). The tactile details — soft shadows, subtle paper texture, grounded typography — counter the AI-generic look that most competitor sites fall into. Target audience (homeowners 30-65 in Lake County / NW Cook County) responds to authenticity over polish.

## Palette Override (important for implementer)
The standard warm-trades direction uses a **warm tan or sunset orange accent**. We have explicitly substituted this with a **cool light blue** (#6FA8DC) to comply with Torvik's brand intake:

- **Preferred colors:** dark blue, light blue, white
- **Avoided colors:** orange, yellow, green

We kept warm-trades' grounded *feel* (tactile paper background, soft shadows, chunky display) while swapping the accent hue family entirely. If `frontend-design` feels the mockups drift warm, that's the tension between the aesthetic-direction's default and the palette override — trust the palette.

## Palette
See `palette.json`. Primary is #0B2E5B (deep navy), used for trust, headlines, primary CTAs. Accent is #6FA8DC (cool light blue), reserved for highlights, callouts, eco-friendly messaging, and limited-use flourishes. Background: #F7F5F0 (warm paper off-white — gives tactile feel without breaking color rules). Text: #1A2033.

## Typography
See `typography.json`. Display: Recoleta / Body: Inter / Base size 17px, scale ratio 1.25.

Recoleta (a slab-serif with warmth) gives warm-trades' "chunky, grounded" character without falling into generic sans. Inter for body is safe and widely available. Both free.

## Motion Language
Medium. Animation cues: subtle slide + fade on scroll reveals, very gentle parallax on hero photo (≤15px translate). No horizontal-scroll tricks, no auto-playing carousels, no hover animations that move more than 4px.

## Layout Grammar
grid-strict. Max content width 1200px. Section rhythm: generous — 96-128px vertical padding between sections, 48-64px between sub-elements within sections. Tactile details allowed: soft 1px borders (#E4E4DD), subtle paper texture on background cards, 8% opacity drop shadows on elevated surfaces only.

## Reference Artifacts
- Mockups: `mockups/hero.jpg`, `mockups/full-page.jpg`, `mockups/section-close-up.jpg`, `mockups/mobile.jpg` (Nano Banana 2 emitted JPEG, not PNG — glob `mockups/<name>.*` if consuming programmatically)
- Structure: `structure/layout.html`, `structure/mobile.html` (reference only — rebuild in your framework of choice; Stitch substituted Domine for Recoleta as a slab-serif fallback since Recoleta wasn't in its library)
- Components: `components.json` (17 picks across 9 roles, 10 strong / 7 medium / 1 gap)

## Constraints & Don'ts
- **NO orange, yellow, or green** anywhere in the palette (explicit client avoid list)
- **NO Inter or Arial as display type.** Inter is body-only.
- **NO stereotypical junk-removal aesthetics** — no orange trucks as hero imagery, no "We'll haul it all!" megaphone energy, no "before/after" arrows
- **NO purple gradients, rainbow gradients, or any gradient on primary CTAs**
- **NO stock photos of generic cleaning / family / "teamwork" tropes** — use real Torvik photos when available, or photorealistic mockup imagery of actual equipment/trucks
- **NO auto-playing video or carousel** on hero
- **Accent (#6FA8DC) gets ≤8% of any viewport's pixel area** — scarcity creates intensity
- **Trust messaging must feel earned** — show the reviews, show the response time, show the eco practices. Don't say "best junk removal" or "#1 in the area"

## Notes for implementer
- Torvik has 3 strong Google reviews — use them verbatim on the site
- Process has 4 steps (Contact → Quote & Schedule → Haul or Demo → Clean & Done) — these go in the How It Works section
- Eco messaging is real (recycles, donates) — not greenwashing. Give it real estate.
- Response time promise is 1-2 hours — put this in the hero trust bar, not buried in the FAQ
- Service-area page needs a map (30+ cities) — components.json will flag this as a gap since 21st.dev doesn't have a strong map component
