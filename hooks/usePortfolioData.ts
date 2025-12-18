"use client";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { StaticPortfolioRepository } from "@/lib/repositories/StaticPortfolioRepository";

const repository = new StaticPortfolioRepository();

export function usePortfolioData() {
  const { lang } = useLanguage();

  return useMemo(() => ({
    data: repository.getData(lang),
    skills: repository.getSkills(lang),
    projects: repository.getProjects(lang),
    work: repository.getWork(lang),
    education: repository.getEducation(lang),
    contact: repository.getContact(lang),
    navbar: repository.getNavbar(lang),
  }), [lang]);
}
