# 90s TV UI/UX audit

## Prioritized findings

| Priority | Finding | Resolution |
| --- | --- | --- |
| P0 | The fixed 600x500 TV and 100px controls could overflow narrow screens. | Replaced fixed sizing with a fluid aspect-ratio layout and clamped controls. |
| P0 | Channel controls were images rather than keyboard-operable controls. | Added semantic buttons, accessible names, visible focus states, and touch-friendly sizing. |
| P1 | The page had weak responsive hierarchy and could create vertical overflow from `100vh`. | Added mobile-first spacing, responsive type, `min-height: 100svh`, and a constrained content shell. |
| P1 | Playback had no user-facing loading/error state and autoplay was not reliably permitted. | Added live channel status, error messaging, muted inline playback, and guarded play calls. |
| P1 | Text contrast and interaction feedback were inconsistent. | Added readable sans-serif utility text, stronger focus/hover/active states, and improved link treatment. |
| P2 | Inline footer styling and the invalid `</br>` element made the structure harder to maintain. | Moved presentation into CSS and replaced it with semantic markup. |

## Responsive audit

The layout is designed mobile-first from 320px upward. The TV uses a proportional container, the controls use clamped dimensions, and the content shell uses a max width so it does not become excessively sparse on ultrawide displays. Horizontal overflow is prevented at the document level while preserving the TV control placement.

## Intentional retro direction

The Monoton display face, neon pink/cyan/blue shadow treatment, CRT-like frame, background video, static sound, and channel metaphor remain unchanged. Improvements focus on polish and access rather than replacing the personality with a generic application layout.

## Remaining media considerations

The bundled `.mov` files are large and may be slow on constrained connections. A future media pass should generate browser-friendly, compressed MP4/WebM variants and provide poster frames; that requires transcoding the source assets rather than a safe CSS/HTML-only change.
