<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


---

## Project Architecture & Conventions

> **Read this before writing or editing any file in this project.** The project is new; this describes how we work. Update the folder tree as features are added.

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.4.x (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (use classes directly) |
| Data | Mock / in-memory for now (no backend yet) |

### Mobile First (ALWAYS)

- **Every page and component must be mobile compatible.** Design for mobile first, then scale up.
- Breakpoints: default = mobile, `sm:` 640px+, `md:` 768px+, `lg:` 1024px+.
- Use fluid widths (`w-full max-w-*`), responsive padding, and touch-friendly sizes (inputs/buttons at least `h-12`).
- Never use fixed pixel widths that overflow a ~360px screen. Test layouts at mobile width.

### Folder Structure

```
src/
├── app/                      ← ROUTING ONLY — thin pages that mount a View
│   ├── layout.tsx
│   ├── page.tsx              ← redirects "/" → "/login"
│   ├── login/page.tsx        ← <LoginView />
│   ├── signup/page.tsx       ← <SignupView />
│   └── dashboard/page.tsx    ← <DashboardView />
│
├── components/               ← GENERIC reusable components used across features
│   ├── app-bar/              ← Top App Bar (Model / Controller / View)
│   ├── channel-switcher/     ← Center station buttons: Pune Primary & Pune VBS
│   ├── profile-button/       ← Right-side profile icon button
│   ├── side-menu/            ← Slide-out profile & navigation side drawer
│   └── star-rating/          ← Reusable 5-star interactive rating component
│
├── data/                     ← Mock metadata JSON files
│   └── programs.json         ← Station & scheduled program metadata (Primary & VBS)
│
└── features/                 ← Feature modules (MVC, one folder per feature page)
    ├── auth/
    │   ├── components/       ← Components used ONLY inside auth
    │   │   ├── auth-text-field/      ← text / email / tel field
    │   │   ├── auth-password-field/  ← password field (show/hide)
    │   │   ├── auth-button/          ← submit / action button
    │   │   └── auth-card/            ← card wrapper (title, subtitle, footer)
    │   ├── login/            ← LoginModel / LoginController / LoginView
    │   └── signup/           ← SignupModel / SignupController / SignupView
    └── dashboard/            ← DashboardModel / DashboardController / DashboardView
        └── components/       ← Components used ONLY inside dashboard
            ├── station-banner/       ← Active station header card
            ├── remark-box/           ← Listener remark textarea with counter
            └── program-review-card/  ← Single live program & anchor review card
```

### Where do components go?

- Used by **one feature only** → `src/features/<feature>/components/<component-name>/`
- Used by **multiple features** (generic) → `src/components/<component-name>/`
- Pages in `src/app/` only **call** (import + render) the feature View. They never contain logic or feature components.

### MVC Rules (STRICTLY FOLLOW)

- **Model (`*Model.ts`)** — TypeScript interfaces/types only. No functions, no state, no React.
- **Controller (`*Controller.ts`)** — a custom hook (e.g. `useLogin`) holding all state, validation, API calls and navigation. Mark `"use client"` when using hooks. Pure helpers (validation, formatting) may be exported from it.
- **View (`*View.tsx`)** — renders UI only; calls the Controller hook. No business logic. Mark `"use client"` when using hooks. Private sub-components live at the bottom of the same file.
- **Component folders** follow the same pattern: `XModel.ts` (props), optional `XController.ts` (only if it needs state), `XView.tsx`.
- **Page (`app/<route>/page.tsx`)** — 3–20 lines, only layout wrapper + mounts the View. No state, no Controller/Model imports.

### Conventions

- Import from **explicit files** (e.g. `@/features/auth/login/LoginView`), not folder barrels.
- Do NOT create `models/`, `logic/`, `ui/` subfolders inside features — use the flat `<page-name>/` folder with Model/Controller/View.
- New page → create `features/<feature>/<page>/` with the three MVC files, then add a thin `app/<route>/page.tsx`.
- Use Tailwind classes for styling; plain CSS only in `app/globals.css`.
- Use inline `style={{}}` only to force colors (e.g. white card immune to dark mode).
- Keep `<!-- BEGIN:nextjs-agent-rules -->` block above untouched.
- **Before finishing any change, run** `npx tsc --noEmit` and `npx eslint src`; both must report 0 errors.
