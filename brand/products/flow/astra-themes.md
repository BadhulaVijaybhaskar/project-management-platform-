# Astra colour themes (from AstraConnect v2 console, read-only reference)
Source: VijayAstranovain/Astraconnect console/frontend-v2/src/lib/theme.ts, index.css, components/ThemePicker.tsx (Tailwind v4)

Two separate choices: mode (html.dark, localStorage 'astra.v2.theme') and colour theme (html[data-accent=<id>] plus inline vars --ac --ac2 --acm --ac-l --night). The default 'astra' has no data-accent. Combined: localStorage 'astra-theme'={id,dark}.
UI: a palette button in the header opens a popover with 4x2 swatches (135deg ac->ac2 gradient) plus a dark switch. Settings > Appearance has bigger swatches. Fade: html.theme-anim for 550ms, skipped when prefers-reduced-motion.

## Themes (ac, ac2, acm, l, night)
astra 'Astra Blue + Teal': #145CF6 #09B5A4 #0E8BD6 #7FA6FF #0A1426  (default; matches the Astra HRMS logo)
violet: #7C3AED #DB2777 #A855F7 #C4B5FD #150B2E
emerald: #059669 #0EA5E9 #10B981 #6EE7B7 #06201A
sunset 'Sunset Orange': #EA580C #E11D48 #F97316 #FDBA74 #241008
rose: #E11D48 #F59E0B #F43F5E #FDA4AF #260A14
indigo: #4F46E5 #06B6D4 #6366F1 #A5B4FC #0F0E2E
slate: #334155 #0D9488 #475569 #CBD5E1 #0B1220
Base gradient: linear-gradient(100deg,#1667F5 0%,#1A8CF0 55%,#13B5A6 100%)

## Light base (:root)
background #F4F6FB; foreground #0B1324; card #FFFFFF; muted surface #F7F9FC; muted-fg #5B6478; faint #8A94A6; border #E3E8F0; input #D5DDE8; primary #1677FF; accent/teal #13B5A6; ring = primary at 16% (color-mix)
sidebar: linear-gradient(180deg,#0B1733 0%,#091228 60%,#08101F 100%). Navy in BOTH modes, white text.
shadow: 0 1px 2px #0B13240a, 0 6px 20px -12px #0B13241f

## Dark base (html.dark)
background #0A1222; foreground #E8EDF5; card #0F182B; muted #131E33; muted-fg #9AA6BC; faint #6E7A91; border #1E2A42; input #2A3853; primary #4D94FF; primary-soft #12305E
success #4ADE9E warning #FBBF4A danger #F87171 info #7DB2FF; shadow 0 1px 2px #0006, 0 10px 28px -16px #000a

## Non-default theme mapping (html[data-accent])
Light: primary var(--ac); teal var(--ac2); gradient 100deg ac 0% / acm 55% / ac2 100%; soft bg color-mix(ac 9%, white); hover color-mix(ac 85%, black); sidebar 180deg color-mix(night 88%, white) 0% / night 60% / color-mix(night 80%, black) 100%; glow color-mix(ac 70%, transparent)
Dark: primary color-mix(acm 55%, ac-l); soft bg color-mix(ac 30%, #0A1222); 600/700 = ac-l

## Charts (static)
palette #1677FF #09b5a5 #0E63E0 #00b180 #D89B22 #334155 #64748B #94A3B8; sentiment pos #22A06B neu #94A3B8 neg #D94A4A unk #D8E2EE. In dark mode, ticks use muted, grid uses border, tooltip uses card.
Fonts: Inter/Manrope (v2), Plus Jakarta Sans + Noto Telugu/Devanagari (v1-pro). Radius: cards 16-20px, buttons pill 999px.
