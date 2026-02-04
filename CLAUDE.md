# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
pnpm dev                # Start development server at localhost:3000
pnpm build             # Build for production
pnpm start             # Start production server
pnpm lint              # Run ESLint

# Testing
pnpm test              # Run all unit tests (Vitest)
pnpm test -- <file>    # Run specific test file
pnpm test:e2e          # Run E2E tests (Playwright)
pnpm test:e2e:ui       # Run E2E tests with Playwright UI
```

## Architecture Overview

### Bilingual Portfolio System

This is a **Next.js 16 App Router** portfolio with comprehensive bilingual support (English/Spanish). All content is managed through a single source of truth in `/data/resume.tsx` with separate `en` and `es` objects.

**Language Management:**
- `LanguageContext` (`contexts/LanguageContext.tsx`) provides global language state using React Context
- Language preference persists in localStorage as `portfolio-lang`
- Translation keys use dot notation (e.g., `t("hero.greeting")`)
- Content data (work, education, projects) is language-specific in `DATA.en` and `DATA.es`

### Design Pattern Implementation

The codebase follows clean architecture principles with several design patterns:

**Repository Pattern** (`lib/repositories/`):
- `StaticPortfolioRepository` abstracts data access to `DATA` object
- Implements `IPortfolioRepository` interface for potential future API integration

**Factory Pattern** (`lib/factories/`):
- `SkillIconFactory` creates icon components using Adapter pattern
- Three adapters: `LucideIconAdapter`, `LocalImageIconAdapter`, `SimpleIconAdapter`
- Automatically selects correct icon source based on skill name

**Strategy Pattern** (`lib/strategies/`):
- `StaggeredAnimationStrategy` calculates animation delays for sections
- `AnimationConfig` provides preconfigured strategies for each portfolio section
- Delay calculation: `baseDelay * sectionMultiplier + (index * itemDelayIncrement)`

### Component Structure

```
components/
├── sections/          # Page sections (HeroSection, WorkSection, etc.)
├── molecules/         # Composite components (cards)
└── ui/               # Atomic components + custom animations
    ├── blur-fade.tsx         # Scroll-triggered fade animations
    ├── encrypted-text.tsx    # Text reveal effect
    ├── floating-dock.tsx     # Floating navigation dock
    └── ...
```

**Sections** (`components/sections/`):
All sections follow this pattern:
- Import `useLanguage()` hook for translations and language-specific data
- Use `AnimationConfig.<section>` for staggered animations
- Use `BlurFade` wrapper for scroll-triggered animations
- Sections are ordered: Hero → About → Work → Education → Skills → Projects → Contact

**Custom Animations** (`components/ui/`):
- `BlurFade`: Scroll-triggered fade-in animations with delay support
- `EncryptedText`: Matrix-style character randomization text reveal
- `HyperText`: Animated text with character transitions
- All animations use Framer Motion

### Theme System

- **Provider**: `ThemeProvider` wraps app with next-themes
- **Default**: Dark mode (`defaultTheme="dark"`)
- **Switching**: Theme toggle in `FloatingDockSection`
- **Styling**: CSS custom properties in `app/globals.css`, Tailwind 4 configuration

### Testing

**Unit Tests** (`__tests__/`):
- Vitest with jsdom environment
- Testing React components with `@testing-library/react`
- Test files mirror source structure
- Run specific tests: `pnpm test -- <file-pattern>`

**E2E Tests** (`e2e/`):
- Playwright with Chromium + Mobile Chrome
- Auto-starts dev server on `localhost:3000`
- Test both desktop and mobile viewports

### Static Assets

```
public/
├── avatar/                    # Profile images (avatar.webp)
├── graduation/                # Education section photos (*.webp)
├── logos/                     # Company/tech logos (*.svg, *.png)
├── Victor_Alvarez_Resume.pdf  # English resume
└── Victor_Alvarez_CV.pdf      # Spanish CV
```

## Key Technical Decisions

1. **Single Data Source**: `/data/resume.tsx` contains all portfolio content. To update portfolio data, edit this file only.

2. **Animation Timing**: All section animations are centrally configured in `AnimationConfig`. Modify `BASE_DELAY` or section multipliers to adjust animation timing globally.

3. **Icon Resolution**: Skills automatically resolve to icons via `SkillIconFactory`. To add custom icons, update the `iconMap` in the factory.

4. **Type Safety**: Uses TypeScript 5 with strict mode. Repository interfaces in `lib/repositories/interfaces.ts` define data contracts.

5. **Analytics**: Vercel Analytics and Plausible (domain: vhalvarez.com) track usage.

6. **SEO**: Structured data (Person, Website, ProfessionalService) configured in `lib/metadata.ts`.
