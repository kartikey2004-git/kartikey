You are working on a production-grade Next.js blog application.

implement all this on single blog page

Implement the following reading experience features with clean, modular, maintainable code. Do not break existing functionality. Reuse existing components where possible and follow the current design system.

## Requirements

### 1. Reading Progress Bar
- Thin progress bar fixed at the top.
- Progress updates smoothly while scrolling.
- Should be lightweight and performant (requestAnimationFrame/throttled if needed).

---

### 2. Words Left Counter
- Calculate total words in the article.
- Estimate words remaining based on current scroll position.
- Display:
  - "423 words left"
  - Hide when article is finished.

---

### 3. Copy Code Button
For **every** code block:
- Add a copy button in the top-right.
- Copy the raw code.
- Show success feedback ("Copied!" or check icon).
- Works for fenced code blocks (` ``` `) regardless of language.

Also support copy for any custom/preformatted code blocks already used in the project.

---

### 4. Clickable Keywords
For every keyword/tag shown in the blog:
- Clicking should open ChatGPT search for that keyword.
- URL format:

https://chatgpt.com/?q=<keyword>

Open in a new tab.

---

### 5. Scroll Milestone Messages
While reading, show small toast messages such as:

25%
"You're getting into it 👀"

50%
"Halfway there."

75%
"Almost finished."

100%
"You made it 🎉"

Requirements:
- Trigger only once per article.
- Smooth animation.
- Non-intrusive.

---

### 6. Keyboard Shortcuts

Implement:

J → next section

K → previous section

T → scroll to top

F → toggle Focus Mode

? → show shortcuts modal

Do not trigger when typing inside inputs or textareas.

---

### 7. Focus Mode
Toggle a distraction-free reading mode.

Requirements:
- Hide unnecessary UI.
- Maximize article width.
- Hide sidebar/navbar if appropriate.
- Persist preference.
- Smooth transition.

---

### 8. Adjustable Typography
Reader controls:

- Increase font size
- Decrease font size
- Reset

Also allow:

- Line height adjustment
- Content width adjustment (optional)

Persist settings using localStorage.

---

### 9. Reading Streak (localStorage)
Anonymous users only.

Requirements:
- Store last reading date.
- Track consecutive reading days.
- Display:

🔥 5 day streak

Reset streak if a day is skipped.

No backend.

---

### 10. Highlight-to-Save Notes (localStorage)

When user selects text:

Show small floating toolbar:
- Save Note

Saving should store:

{
  articleSlug,
  selectedText,
  createdAt
}

Persist in localStorage.

Allow viewing saved highlights later.

No backend.

---

### 11. Resume Reading
Save reading position automatically.

Store:
- article slug
- scroll percentage
- timestamp

When reopening the article:
- Ask:
  "Resume where you left off?"
- Restore scroll position if accepted.

localStorage only.

---

### 12. Reading Stats
Display reader stats such as:

- Reading time
- Words
- Characters
- Paragraph count
- Images
- Code blocks

Compute automatically from article content.

---

### 13. Next Recommended Read
At the end of every article:
- Show 3 recommended posts.
- Prefer:
  - Same tags
  - Same category
  - Otherwise latest posts

Include:
- Cover image
- Title
- Reading time
- Short description

---

## Technical Requirements

- Next.js App Router
- TypeScript
- React
- TailwindCSS
- shadcn/ui where appropriate
- Use reusable hooks/components
- Keep components small and composable.
- Avoid unnecessary re-renders.
- Use IntersectionObserver where beneficial.
- Use requestAnimationFrame for scroll-heavy logic.
- Store anonymous user data only in localStorage.
- No backend/database changes.
- No new heavy dependencies unless absolutely necessary.
- Ensure accessibility (ARIA labels, keyboard navigation).
- Mobile responsive.
- Maintain current visual design and avoid layout shifts.

## Deliverables

1. Implement every feature completely.
2. Create reusable hooks where appropriate.
3. Keep the code production-ready.
4. Explain any architectural decisions if significant changes are made.
5. Ensure all features work together without conflicts.