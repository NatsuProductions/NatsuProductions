# Natsu studio design system

## Direction

Treat the site as a studio portfolio and a guided inquiry experience. Large, tightly spaced headlines express confidence; roomy body text explains decisions. A blue motion graphic built around the existing logo communicates the studio's craft. Real project previews provide the visual evidence.

## Foundations

| Role | Token / value | Usage |
| --- | --- | --- |
| Brand | `--studio-blue`, `#2563eb` | Primary actions, motion artwork, section labels |
| Ink | `--studio-ink`, `#10121a` | Text and dark sections |
| Paper | `--studio-paper`, `#f5f6f8` | Alternating section backgrounds |
| White | `#ffffff` | Cards, forms, and breathing room |
| Muted text | `--studio-muted`, `#5f6472` | Descriptions on light backgrounds |
| Border | `--studio-line`, `#dfe2e9` | Fields, separators, and cards |
| Accent | `--studio-lime`, `#dcf98a` | Decorative logo surface and accents on dark backgrounds |

Space Grotesk is the sans-serif family for headlines, paragraphs, form controls, and buttons. IBM Plex Mono is reserved for standalone labels, metadata, and section numbers. Do not change font families within one text block. Mono labels must remain separate elements. Font loading has a swap strategy and local fallbacks.

Use the `.shell` container (maximum 1240px), `.studio-section` vertical spacing, `.section-title` heading group, `.eyebrow` label, and `.studio-button` action style. Mobile is the default layout; the 640px and 1000px breakpoints add columns and desktop navigation. Avoid styling arbitrary `header`, `section`, or `button` elements globally.

## Components and behavior

- Primary button: blue with white text. Outline and light variants are used on light and blue cards respectively. Hover motion is subtle; keyboard focus remains visible. Disabled buttons retain their labels.
- Project card: 16:9 media, visible title, explicit play action, and an accessible external YouTube link. The featured desktop card spans two columns. Only one video is mounted at a time.
- Service selector: native buttons with `aria-pressed`. Price, included scope, examples, and inquiry actions remain visible.
- Mobile navigation: inline disclosure that stays in document order, closes after navigation, and supports Escape returning focus to the toggle.
- FAQ: native details/summary controls provide keyboard behavior and open state without a dependency.
- Inquiry: labels, connected field errors, consent, busy state, success confirmation, and retry feedback. Preserve entered data after delivery errors. Do not imply a confirmed booking.
- Testimonials: real approved quotes only. Empty state is honest and links to the work.

## Motion and accessibility

The hero has a short entrance and slow orbiting graphic. Buttons use a small upward hover movement. Motion's reduced-motion configuration disables transforms for visitors who request reduced motion, and CSS removes transitions and spinners for that preference. Text and inputs do not drift or animate while being read.

Keep a single page h1. The embedded inquiry uses h2; the standalone inquiry uses h1. Use native controls, visible focus rings, touch targets of approximately 44px or larger, descriptive video titles, and meaningful empty/error states. Never use decorative graphics as the sole source of information.
