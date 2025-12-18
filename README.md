# Portfolio 2026

Modern, responsive portfolio website showcasing professional experience, projects, and skills with dark/light theme switching and bilingual support (English/Spanish).

## Features

- **Bilingual Support** - Toggle between English and Spanish
- **Theme Switching** - Dark/Light mode with system preference detection
- **Animated UI** - Custom animations including encrypted text reveal, blur fade, and marquee effects
- **Responsive Design** - Mobile-first approach with floating dock navigation
- **Resume Downloads** - PDF resumes available in both languages
- **Project Showcase** - Grid layout with project cards and tech stack badges
- **Graduation Gallery** - Photo viewer for education section

## Tech Stack

- **Framework:** Next.js 16.0.10 with App Router
- **UI Library:** React 19.2.1
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Components:** Radix UI primitives + Custom components
- **Animations:** Framer Motion 12
- **Icons:** Lucide React + Tabler Icons
- **Theme:** next-themes

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm (recommended)

### Installation

```bash
# Clone repository
git clone <repository-url>

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Project Structure

```
app/              # Next.js App Router
├── layout.tsx    # Root layout with theme provider
├── page.tsx      # Main portfolio page
└── globals.css   # Global styles

components/       # UI components
├── molecules/    # Composite components (cards)
└── ui/          # Atomic components (buttons, animations)

data/            # Portfolio data
└── resume.tsx   # Bilingual resume data

public/          # Static assets
├── avatar/      # Profile images
├── graduation/  # Education photos
├── logos/       # Company/tech logos
├── resume_en.pdf
└── resume_es.pdf
```

## Customization

### Update Portfolio Data

Edit `/data/resume.tsx` to update:
- Personal information
- Work experience
- Education
- Skills
- Projects
- Contact information

Data structure supports both English and Spanish translations.

### Add New Section

1. Create new section in `/app/page.tsx`
2. Use `BlurFade` for animations
3. Use `EncryptedText` for text reveals
4. Update navigation in floating dock if needed

### Modify Theme

Colors and theme configuration in:
- `/app/globals.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind theme extensions

## Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Import project in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify

Build output: `pnpm build` creates optimized production build in `.next/`

## License

Private project - All rights reserved

## Contact

**Victor Alvarez**
- Email: alvarez3197@gmail.com
- GitHub: [@vhalvarez](https://github.com/vhalvarez)
- LinkedIn: [/in/vhalvarez](https://linkedin.com/in/vhalvarez)
