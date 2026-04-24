# Design System Notes

This file captures layout and spacing rules that should be reused when adding new pages or expanding existing sections.

## Card Grids

- Shared card grids should use CSS Grid and explicitly stretch cards to the tallest item in the row.
- Use `gap: 24px` by default for editorial card grids. Denser utility grids can tighten to `16px` or `20px`, but the spacing should be deliberate and consistent within the pattern.
- Card grids must set `align-items: stretch`.
- Cards inside shared grids should fill the row height of the largest card in that grid.
- In shared grid patterns, apply `height: 100%` to the direct grid children so equal-height behavior is explicit rather than accidental.
- If a card appears in a grid, equal-height presentation is the default. Opt out only when the layout is intentionally masonry-like or list-like.

## Card Internals

- Shared editorial cards should use a vertical stack pattern: `display: flex`, `flex-direction: column`, `gap: 12px`.
- Do not build card rhythm with one-off `margin-bottom` and `margin-top` rules on headings, labels, quotes, and metadata if the card can use a shared stack.
- Keep card padding consistent unless a card type is structurally different:
  `padding: 22px 24px`
- Section-level spacing should live on the grid or the section wrapper, not on the first or last child inside the card.
- If a card uses nested body wrappers, the wrapper should usually take `flex: 1` so the card content fills the available height cleanly.
- If a stretched card has a footer, CTA row, or step list, use `flex: 1` on the body wrapper or `margin-top: auto` on the lower content block so empty height stays intentional instead of appearing as stray whitespace under the card content.

## Tips & Tricks

- Reusable editorial tips should use the shared `tip-trick` pattern from `shared.css` instead of ad hoc highlighted paragraphs.
- Keep them short, practical, and action-oriented: one move the reader can apply immediately on that page.
- Use the dark variant in dark sections: `tip-trick tip-trick--dark`.

## Development Page Pattern

For development-page cards in `shared.css`, the reference pattern is:

- Grid gap: `24px`
- Card internal gap: `12px`
- Card padding: `22px 24px`
- Grid items: stretched to equal height within the row

If a new development section introduces a new card type, match this pattern first and only diverge when the content structure actually requires it.

## Page Openings

- Do not place a standalone utility header bar directly under the global nav if the page already opens with a hero or page-header block.
- Each page should have one top-level introduction pattern only:
  a hero section, or a page-header block, but not both plus an extra header bar.
- Use the hero eyebrow, title, subtitle, chips, or metadata rows to carry orientation details instead of adding a redundant second header.
- Do not add top-of-page reading progress strips as a default pattern. If progress matters, solve it in-page with section navigation or other content-specific UI rather than a persistent strip under the nav.

## Badges And Pills

- Labels that serve the same job across pages should share one base shape, type scale, and spacing system.
- Reuse the shared badge language in `shared.css` for chips, tags, phase badges, comparison badges, prompt badges, and craft labels instead of inventing page-specific badge styling.
- Badge variants should usually change color only. Avoid introducing new font sizes, padding, corner radii, or casing rules for a one-off page treatment.
- If a new badge needs a different meaning, add a modifier class to the shared badge pattern instead of styling it inline in the HTML.

## Authoring Rule

- Before adding a new shared layout pattern, check whether it belongs in `shared.css` and should be documented here.
- If a spacing fix is needed in more than one place, fix the component pattern and update this file instead of patching a single page.
- When reviewing a grid of cards, check two things every time:
  equal-height rows across each grid
  consistent vertical spacing inside each card and between the grid and adjacent elements
- When reviewing a new page, check that the top of the page contains a single introduction pattern and no redundant header bar beneath the global nav.
