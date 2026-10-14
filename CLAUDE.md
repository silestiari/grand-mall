@AGENTS.md

# Grand Mall Batumi — working rules for Claude Code

- Talk to the user in **Russian** (updates, questions, reports). The user is a beginner on Windows/VS Code: do routine setup yourself; when their action is needed, give one concrete step at a time.
- Current code beats README and `docs/*qa*.md` when they disagree; historical QA results are not fresh evidence.
- Onboarding audit, verified facts, tool status and the prioritized backlog: `docs/claude-handoff.md`. Update it when a backlog item is closed.

## Must preserve
- Locale-prefixed routes `/en`, `/ru`, `/ka` (Georgian label is "GE"), language switching that keeps path/slug/query/hash, all existing slugs and deep links.
- UI copy is translated via `copyKey` hashes of the English source (`i18n/translate.ts`, `messages/*.json` → `copy`). Changing an English string silently drops RU/KA to English — add the new key to all three dictionaries in the same change.
- Approved design baseline (Figma/MagicPath redesigns were rejected). Hero text must not cover the "GRAND MALL" sign. Entertainment hover zoom + reduced-motion behaviour, localized 404, skip link, focus styles, dialog/Escape behaviour, accessible search status.
- Localized metadata, canonical, hreflang, OG, `app/sitemap.ts`, `app/robots.ts`; origin comes from `lib/site-url.ts` / `NEXT_PUBLIC_SITE_URL`.
- Source-backed content only: no invented stores, floors, hours, phones, discounts or events. Events/Offers stay empty without `verified` + `source`. The map is illustrative — never invent venue positions. Keep image provenance (`docs/official-media.json`, `public/images/**/SOURCES.md`, `*-ASSETS.md`); renders and generated images are not photographs.

## Workflow
- Checks: `npm.cmd run lint`, `npm.cmd run typecheck`, `npm.cmd run build`. Local preview: `npm.cmd run dev` (http://localhost:3000) or `npx next start -p 3100` after a build.
- Small, reviewable changes on a feature branch; never push to `main` or deploy without explicit approval.
- Visual changes: before/after screenshots (desktop 1440, tablet 768, mobile 390/320) in `.verification/` (gitignored), including long RU/KA text.
- Report only measured results; never fabricate Lighthouse scores or test outcomes.

## Agents and tools
- Project subagents in `.claude/agents/` (VoltAgent, pinned commit recorded in each file): ui-designer, nextjs-developer, ui-ux-tester, performance-engineer, accessibility-tester, seo-specialist, test-automator, code-reviewer. Start with read-only audits, ≤3 in parallel; only one agent edits a given file at a time (or use worktrees).
- Playwright MCP is a single shared browser — only one agent may drive it at a time. Chrome DevTools MCP: diagnostics/performance traces. Context7: library docs (Next.js docs: `node_modules/next/dist/docs/` first). frontend-design skill: design work.
