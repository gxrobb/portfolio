# Robert Kregloh's Portfolio

Source for [robertkregloh.com](https://robertkregloh.com): the portfolio home page and an RPG-themed lorem ipsum generator at [`/rpgIpsum`](https://robertkregloh.com/rpgIpsum). Built with Next.js (Pages Router), React, TypeScript and Sass, running on Bun and deployed to Netlify.

## Getting started

Requires [Bun](https://bun.sh) 1.4.2 or newer (the version is pinned in `packageManager` in `package.json`).

```bash
bun install
bun run dev
```

The dev server runs at [http://localhost:8080](http://localhost:8080).

## Scripts

| Command                | What it does                                          |
| ---------------------- | ----------------------------------------------------- |
| `bun run dev`          | Start the dev server on port 8080                     |
| `bun run build`        | Production build (includes a type check)              |
| `bun run start`        | Serve the production build                            |
| `bun run lint`         | ESLint, including the full `jsx-a11y` recommended set |
| `bun run typecheck`    | Generate Next's route types, then run `tsc`           |
| `bun run format`       | Format everything with Prettier                       |
| `bun run format:check` | Check formatting without writing                      |

CI runs `format:check`, `lint`, `typecheck` and `build` on every pull request and push to `main`.

## Project structure

```
components/
  common/     Shared building blocks: PageHead (metadata), Section
  layout/     Page frame: Navigation, SideIcons, Footer
  home/       Home page sections (Hero, About, Experience, Contact) and their parts
  ipsum/      RPG ipsum form and generated output
constants/    Site title/URL, job history, skills list
lib/          RPG ipsum text generator
pages/        Routes: index.tsx (/), rpgIpsum.tsx (/rpgIpsum), plus _app and _document
public/       Images, resume.pdf, robots.txt, sitemap.xml
styles/       Global styles, Sass variables and mixins, page-level modules
```

Imports use the `@/` alias for the repo root (`@/components/home/Hero`, `@/constants/jobs`). Imports from the same folder stay relative.

## Styling

- **Component styles** live in a CSS module next to the component (`Hero.tsx` + `Hero.module.scss`), including that component's breakpoint rules.
- **Page-level styles** go in `styles/pages/`. They're kept out of `pages/` because Next treats files there as routes.
- **Global styles** are in `styles/globals.scss`: element resets plus the `.container`, `.button` and `.visually-hidden` utilities.
- **Shared Sass:** `styles/_variables.scss` holds the colors and the `$breakpoint-lg` (991px), `$breakpoint-md` (767px) and `$breakpoint-sm` (620px) breakpoints. `styles/_mixins.scss` holds the green `bullet-list-item`. Load them from a component module with `@use '../../styles/variables' as *;`.
- **Font:** Open Sans is self-hosted with `next/font` in `pages/_app.tsx`.

## Updating content

- **Jobs:** `constants/jobs.ts`. **Skills:** `constants/skills.ts`.
- **Site title, description and URL:** `constants/site.ts`. Each page sets its own metadata through `PageHead`.
- **Resume:** replace `public/resume.pdf`.
- **New pages:** add them to `public/sitemap.xml`.

## Notes

- **TypeScript 7 and 6 side by side:** `tsc` (and `bun run typecheck`) uses TypeScript 7, installed as `@typescript/native`. The `typescript` package is an alias for TypeScript 6. typescript-eslint needs its API, and Next's build-time type check runs its compiler.
- **`transpilePackages` in `next.config.ts`:** works around a Bun dev-server bug that breaks Font Awesome on a fresh `.next`. Keep it until that's fixed in Bun.
- **`.next/dev/types` is excluded in `tsconfig.json`:** without that, `build` and `typecheck` fail with duplicate identifiers after running `dev`.

## Deployment

Netlify builds the site with `bun run build`, publishes `.next`, and applies its Next.js adapter automatically. The build and serverless functions use the Node version in `.node-version` (24). Bun's version comes from the `BUN_VERSION` environment variable in Netlify.

When upgrading Node, update `.node-version` and `@types/node` together. Dependabot is set to skip major `@types/node` updates for this reason.

## Dependency updates

Dependabot checks monthly. Minor and patch updates for Bun packages arrive as one grouped PR, and GitHub Actions updates as another. Major versions open individual PRs.
