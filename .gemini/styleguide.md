# ✨ TypeScript + Next.js 15 + React 19 Code Style Guide

## General Principles

- Always use TypeScript with strict type checking.
- Prefer `interface` over `type` unless using utility types.
- Avoid `enum`; use `const` objects + `as const` and union types.
- Use early returns for clarity and avoid deeply nested code.
- Prefer functional, declarative patterns over imperative logic.
- Keep functions small, single-responsibility, and composable.

## Component Architecture (React 19, Next.js App Router)

- Prefer **React Server Components**. Use `"use client"` only when needed.
- Use **file-based routing** with clear folder boundaries (e.g. `/app/(auth)/login/page.tsx`).
- Co-locate related files under feature-based folders.
- Wrap dynamic imports with `suspense` and always provide fallbacks.
- Use `useFormStatus`, `useActionState`, and `useOptimistic` from React 19.
- Always handle `searchParams` and `params` in async layout/page/server components.

## Naming Conventions

- Variables: use `camelCase`
- Boolean: start with `is`, `has`, `can`, `should`
- Event Handlers: prefix with `handle` (e.g. `handleClick`)
- Directories: use `kebab-case` (e.g. `components/user-avatar`)
- Components: named exports only, PascalCase

## Tailwind CSS Guidelines

- Use utility-first classes for layout, spacing, and typography.
- Abstract repeated styles into `@apply`-able utility classes via `.css` or `tailwind.config.ts`.
- Avoid using className conditionals inside logic-heavy expressions.
- Prefer semantic HTML + ARIA attributes for accessibility.

## Radix UI Guidelines

- Use only accessible primitives from Radix UI.
- Compose Radix primitives with your own styled components using Tailwind.
- Do not rely on unstyled UI libraries like `shadcn/ui`.

## Async Logic and API Usage

- Always use async/await in server functions and handlers.
- Use `cookies()`, `headers()`, and `draftMode()` from Next.js runtime via async only.
- Avoid client-side fetch unless absolutely required (e.g. for user interactions).
- Use `useSWR` or `react-query` only if needed for CSR. Prefer server-side data fetching.

## Linting & Formatting

- Use ESLint with `@typescript-eslint` and `eslint-plugin-react`.
- Prettier should be used for formatting. No manual styling.
- Enable import sorting and auto-fix on save.

## Test Strategy

- Unit tests: colocated `*.test.ts(x)` files, but excluded from Gemini review
- E2E: Cypress or Playwright stored in `/e2e`
- Snapshot tests are discouraged

## PR Expectations

- Each PR should contain a meaningful title and description.
- Avoid large PRs. Prefer small, isolated changes.
- Always include test coverage for new logic.
