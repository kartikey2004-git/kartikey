Implement a **responsive Projects carousel** for the **Projects section on the home page** using the existing **shadcn/ui Carousel** component and project data already present in the codebase.

### Requirements

* Use **shadcn/ui Carousel** rather than building a custom carousel from scratch.
* First inspect the existing project structure, design system, components, spacing, typography, and project data. **Reuse existing components/styles wherever possible.**
* Keep the current visual identity of the site intact—do not introduce an unrelated design language.
* The carousel must be **fully responsive**:

  * Mobile: 1 project card
  * Small/tablet screens: 1–2 cards depending on available width
  * Desktop: 2–3 cards depending on viewport width
  * Large screens should use the available space without making cards excessively wide.
* Use responsive `basis-*` classes or equivalent shadcn-friendly Tailwind patterns rather than hardcoded JavaScript breakpoints.
* Add previous/next controls that remain usable on mobile and desktop.
* Support touch/swipe gestures naturally on mobile.
* Ensure cards have consistent heights and alignment even when project titles/descriptions differ.
* Preserve existing project links, images, technologies, GitHub/demo buttons, and metadata.
* Do not duplicate project data just for the carousel.
* Handle an odd number of projects cleanly.
* Make sure there is no horizontal page overflow at any breakpoint.
* Ensure keyboard navigation and accessible carousel controls work correctly.
* Add appropriate ARIA labels where needed.
* Respect `prefers-reduced-motion` and avoid unnecessary animations.

### Visual behavior

The carousel should feel like a **premium portfolio section**, not a generic UI component.

* Keep spacing consistent with the rest of the homepage.
* Avoid excessive rounded containers, unnecessary borders, gradients, or decorative elements unless the existing design already uses them.
* Cards should have clear visual hierarchy:
  **project image → title → short description → tech stack → actions**
* On smaller screens, prioritize readability and interaction over showing multiple cards.
* On desktop, allow a subtle peek of the next card if it fits naturally, making it obvious that the section is horizontally scrollable.
* Keep navigation controls visually subtle and aligned with the existing design.

### Implementation constraints

* Use the project's existing Tailwind/shadcn conventions.
* Do not install another carousel library.
* Do not rewrite unrelated components.
* Do not introduce unnecessary abstractions.
* Check the implementation at approximately:
  `320px`, `375px`, `768px`, `1024px`, `1280px`, and `1440px`.
* Fix any layout shifts, overflow, clipping, or awkward card sizing discovered during testing.
* Keep the implementation clean, production-ready, and easy to maintain.

Before coding, inspect the existing homepage and project components and determine the **best integration point**. Then implement the carousel with minimal changes to the existing architecture.
