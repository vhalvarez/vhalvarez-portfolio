"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
    "hero.location": "Open to Remote Work 🌍",
    "hero.downloadResume": "Download Resume",
    "about.title": "About",
    "work.title": "Work Experience",
    "education.title": "Education",
    "skills.title": "Skills",
    "projects.title": "My Projects",
    "projects.subtitle": "Check out my latest work",
    "projects.description": "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    "contact.title": "Contact",
    "contact.subtitle": "Get in Touch",
    "contact.description": "Let's connect! I'm always looking to expand my professional network and discuss new technologies. Reach out to me on ",
    "contact.linkedin": "LinkedIn",
    "education.viewPhotos": "View Graduation Photos 📸",
    "education.hidePhotos": "Hide Photos",
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",
    "language.english": "English",
    "language.spanish": "Español"
  },
  es: {
    "hero.greeting": "Hola, soy",
    "hero.location": "Disponible para trabajo remoto 🌍",
    "hero.downloadResume": "Descargar Currículum",
    "about.title": "Sobre mí",
    "work.title": "Experiencia Laboral",
    "education.title": "Educación",
    "skills.title": "Habilidades",
    "projects.title": "Mis Proyectos",
    "projects.subtitle": "Mira mis últimos trabajos",
    "projects.description": "He trabajado en una variedad de proyectos, desde sitios web simples hasta aplicaciones web complejas. Aquí hay algunos de mis favoritos.",
    "contact.title": "Contacto",
    "contact.subtitle": "Ponte en Contacto",
    "contact.description": "¡Conectemos! Siempre busco expandir mi red profesional y discutir sobre nuevas tecnologías. Contáctame en ",
    "contact.linkedin": "LinkedIn",
    "education.viewPhotos": "Ver Fotos de Graduación 📸",
    "education.hidePhotos": "Ocultar Fotos",
    "theme.light": "Modo Claro",
    "theme.dark": "Modo Oscuro",
    "language.english": "English",
    "language.spanish": "Español"
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es") && savedLang !== lang) {
      // eslint-disable-next-line
      setLang(savedLang);
    }
  }, [lang]);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
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
