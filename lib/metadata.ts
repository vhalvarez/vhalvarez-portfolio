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
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Clean Architecture",
    "Microservices",
    "Cloud Solutions",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "GraphQL",
    "Caracas",
    "Venezuela",
    "Remote Developer",
    "Web Development",
    "Backend Developer",
    "Frontend Developer",
    "DevOps",
    "Software Architecture",
    "DDD",
    "CQRS",
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
    default: `${siteConfig.name} | Full Stack Developer`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

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
    title: `${siteConfig.name} | Full Stack Developer`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer Portfolio`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full Stack Developer`,
    description: siteConfig.description,
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
      "Node.js",
      "NestJS",
      "Clean Architecture",
      "Microservices",
      "Cloud Computing",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
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
};

// Helper function to generate JSON-LD script
export function getStructuredData(type: keyof typeof structuredData) {
  return {
    __html: JSON.stringify(structuredData[type]),
  };
}
