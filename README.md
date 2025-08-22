# Rubi Platform Builder

Rubi Platform Builder is a modular frontend framework designed for building scalable creator platforms with a focus on speed, UX clarity, and AI-ready components.

## 🔧 Project Setup

### Install dependencies:
```bash
pnpm install
```

### Run local dev server:
```bash
pnpm dev
```

## 📁 Directory Structure

```
src/
├── components/        # Shared UI components
│   └── ui/            # Styled system-level elements
├── layouts/           # App layout wrappers
├── pages/             # Route-level pages
├── hooks/             # Reusable logic
├── lib/               # Helper modules (API, utils, etc.)
├── styles/            # Tailwind + custom CSS
├── types/             # Global TypeScript declarations
├── assets/            # Static images, icons, etc.
```

## 🧠 Features

- Built with **Next.js 15**, **TailwindCSS**, and **TypeScript**
- Modular components with clean separation of concerns
- Optimized for AI integration (Codex, Claude, GPT workflows)
- Smooth developer onboarding with CLI tools
- Easily extendable to match your ecosystem

## 🧪 Developer Scripts

```bash
pnpm lint            # Run ESLint checks
pnpm format          # Format with Prettier
pnpm build           # Production build
pnpm dev             # Start local dev server
```

## 🚧 Status

Rubi Platform Builder is actively in development. Expect frequent updates as new components, layout features, and build tools are introduced.

## 📌 Best Practices

- ✅ Keep UI logic and layout logic separate
- ✅ Use `.tsx` for all components and pages
- ✅ Add a JSDoc-style comment to each function
- ✅ Use `@/` alias for clean imports
- ✅ Validate with `pnpm lint` before each commit

## 🧠 Tip

For new UI features, start with `/src/components/ui`, then integrate into pages via `/src/pages`. Keep core logic in `/lib` and reusable logic in `/hooks`.

## 📫 Contact

> Managed by TD Studios — [tdstudiosny.com](https://tdstudiosny.com)
- ✅ Use `.tsx` for all components and pages
- ✅ Add a JSDoc-style comment to each function
- ✅ Use `@/` alias for clean imports
- ✅ Validate with `pnpm lint` before each commit

---

## 🧠 Tip

For new UI features, start with `/src/components/ui`, then integrate into pages via `/src/pages`. Keep core logic in `/lib` and reusable logic in `/hooks`.

---

## 📫 Contact

> Managed by TD Studios — [tdstudiosny.com](https://tdstudiosny.com)
