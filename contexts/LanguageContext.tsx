"use client";
import { createContext, useContext, useState, useMemo, useCallback, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    "hero.greeting": "Hi, I'm",
    "hero.location": "Building products at Avila Tek",
    "hero.downloadResume": "Download Resume",
    "about.title": "About",
    "work.title": "Work Experience",
    "education.title": "Education",
    "skills.title": "Skills",
    "projects.title": "My Projects",
    "projects.subtitle": "Selected projects",
    "projects.description": "A selection of projects from my experience in full-stack development, integrations, and software architecture.",
    "contact.title": "Contact",
    "contact.subtitle": "Get in Touch",
    "contact.description": "Let's talk about product engineering, software architecture, and AI-assisted development. Find me on ",
    "contact.linkedin": "LinkedIn",
    "contact.shareLinkedIn": "Share on LinkedIn",
    "contact.connectLinkedIn": "Connect on LinkedIn",
    "education.viewPhotos": "View Graduation Photos 📸",
    "education.hidePhotos": "Hide Photos",
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",
    "language.english": "English",
    "language.spanish": "Español"
  },
  es: {
    "hero.greeting": "Hola, soy",
    "hero.location": "Construyendo productos en Avila Tek",
    "hero.downloadResume": "Descargar Currículum",
    "about.title": "Sobre mí",
    "work.title": "Experiencia Laboral",
    "education.title": "Educación",
    "skills.title": "Habilidades",
    "projects.title": "Mis Proyectos",
    "projects.subtitle": "Proyectos seleccionados",
    "projects.description": "Una selección de proyectos de mi trayectoria en desarrollo full stack, integraciones y arquitectura de software.",
    "contact.title": "Contacto",
    "contact.subtitle": "Ponte en Contacto",
    "contact.description": "Conversemos sobre ingeniería de producto, arquitectura de software y desarrollo asistido por IA. Encuéntrame en ",
    "contact.linkedin": "LinkedIn",
    "contact.shareLinkedIn": "Compartir en LinkedIn",
    "contact.connectLinkedIn": "Conectar en LinkedIn",
    "education.viewPhotos": "Ver Fotos de Graduación 📸",
    "education.hidePhotos": "Ocultar Fotos",
    "theme.light": "Modo Claro",
    "theme.dark": "Modo Oscuro",
    "language.english": "English",
    "language.spanish": "Español"
  }
};

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const savedLang = localStorage.getItem("portfolio-lang") as Language;
  return savedLang === "en" || savedLang === "es" ? savedLang : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  const handleSetLang = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[lang][key as keyof typeof translations.en] || key;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang: handleSetLang, t }),
    [lang, handleSetLang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
