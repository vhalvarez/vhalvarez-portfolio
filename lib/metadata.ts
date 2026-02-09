import { Metadata } from "next";
import { DATA } from "@/data/resume";

const siteConfig = {
  name: DATA.en.name,
  description: DATA.en.description,
  url: DATA.en.url,
  ogImage: `${DATA.en.url}/og-image.png`,
  twitterHandle: "@vhalvarez",
  keywords: [
    "Victor Alvarez",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Architect",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Fastify Developer",
    "Vue.js Developer",
    "Clean Architecture",
    "Domain-Driven Design",
    "DDD",
    "CQRS",
    "Event Sourcing",
    "Microservices Architecture",
    "Cloud Solutions",
    "AWS Developer",
    "Docker Specialist",
    "Kubernetes",
    "PostgreSQL Expert",
    "Redis",
    "RabbitMQ",
    "NATS",
    "GraphQL",
    "REST API",
    "PKI Infrastructure",
    "HashiCorp Vault",
    "OCSP",
    "JWT Authentication",
    "Bull Queues",
    "Prisma ORM",
    "Vitest",
    "Jest",
    "Playwright",
    "Testing",
    "CI/CD",
    "DevOps Engineer",
    "Software Architecture",
    "Design Patterns",
    "Caracas Developer",
    "Venezuela",
    "Remote Developer",
    "Full-Stack Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Web Development",
    "Enterprise Software",
    "Scalable Systems",
    "High Performance",
    "4+ years experience",
  ],
  authors: [
    {
      name: DATA.en.name,
      url: DATA.en.url,
    },
  ],
  creator: DATA.en.name,
  publisher: DATA.en.name,
};

export const enhancedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Full Stack Developer & Backend Architect | NestJS, React, AWS`,
    template: `%s | ${siteConfig.name}`,
  },

  description: "Full Stack Software Engineer with 4+ years of experience building scalable enterprise microservices using Clean Architecture, DDD, CQRS. Expert in TypeScript, NestJS, React, Next.js, PostgreSQL, AWS. Proven track record supporting 1,000-100,000 daily users. Open to remote opportunities.",

  keywords: siteConfig.keywords,

  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Full Stack Developer & Backend Architect`,
    description: "4+ years building scalable microservices with Clean Architecture, DDD & CQRS. Expert in TypeScript, NestJS, React, AWS. Proven track record supporting 100K+ daily users. Available for remote opportunities worldwide.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer & Backend Architect | 4+ Years Experience`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full Stack Developer & Backend Architect`,
    description: "4+ years building scalable microservices with Clean Architecture, DDD & CQRS. Expert in TypeScript, NestJS, React, AWS. Available for remote opportunities.",
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "es-ES": `${siteConfig.url}?lang=es`,
    },
  },

  verification: {
    google: "google-site-verification-code-here",
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },

  category: "technology",

  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

// JSON-LD Structured Data
export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.en.name,
    url: DATA.en.url,
    image: `${DATA.en.url}/avatar/avatar.png`,
    sameAs: [
      DATA.en.contact.social.GitHub.url,
      DATA.en.contact.social.LinkedIn.url,
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "FIIIDT",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Caracas",
      addressCountry: "VE",
    },
    email: DATA.en.contact.email,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad Nueva Esparta",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "NestJS",
      "Fastify",
      "Vue.js",
      "Clean Architecture",
      "Domain-Driven Design",
      "CQRS",
      "Microservices Architecture",
      "Cloud Computing",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "NATS",
      "PKI Infrastructure",
      "HashiCorp Vault",
    ],
    description: "Full Stack Software Engineer with 4+ years of experience building scalable enterprise systems and microservices architectures. Specialized in Clean Architecture, Domain-Driven Design, CQRS patterns, and AI integration.",
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer - Backend Architect",
      occupationLocation: {
        "@type": "Country",
        name: "Venezuela",
      },
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "base",
        currency: "USD",
        percentile10: 40000,
        percentile25: 60000,
        median: 80000,
      },
    },
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${DATA.en.name} Portfolio`,
    url: DATA.en.url,
    description: DATA.en.description,
    author: {
      "@type": "Person",
      name: DATA.en.name,
    },
    inLanguage: ["en-US", "es-ES"],
  },

  professionalService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${DATA.en.name} - Software Development Services`,
    url: DATA.en.url,
    description: DATA.en.description,
    priceRange: "$$",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Spanish"],
    slogan: "Building scalable solutions with Clean Architecture",
  },

  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: DATA.en.url,
      },
    ],
  },

  profilePage: {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: DATA.en.name,
      description: "Full Stack Software Engineer with 4+ years of experience",
      image: `${DATA.en.url}/avatar/avatar.png`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: DATA.en.url,
        },
      ],
    },
  },

  workExperience: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "OrganizationRole",
        roleName: "Software Engineer - Backend Architect",
        startDate: "2024-06",
        endDate: "2026-01",
        organization: {
          "@type": "Organization",
          name: "FIIIDT",
          url: "http://www.fii.gob.ve",
        },
        description: "Architected microservices platform supporting 1,000-100,000 daily users using Clean Architecture, DDD, and CQRS",
      },
      {
        "@type": "OrganizationRole",
        roleName: "Backend Developer & BI Specialist",
        startDate: "2018-11",
        endDate: "2021-07",
        organization: {
          "@type": "Organization",
          name: "Bancamiga",
          url: "https://bancamiga.com",
        },
        description: "Migrated legacy Excel models to Laravel RESTful APIs with interactive Vue.js dashboards",
      },
    ],
  },
};

// Helper function to generate JSON-LD script
export function getStructuredData(type: keyof typeof structuredData) {
  return {
    __html: JSON.stringify(structuredData[type]),
  };
}
