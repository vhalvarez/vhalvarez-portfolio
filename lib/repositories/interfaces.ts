import { DATA } from "@/data/resume";

export type Language = "en" | "es";
export type PortfolioData = typeof DATA.en;

export interface IPortfolioRepository {
  getData(lang: Language): PortfolioData;
  getSkills(lang: Language): string[];
  getProjects(lang: Language): PortfolioData["projects"];
  getWork(lang: Language): PortfolioData["work"];
  getEducation(lang: Language): PortfolioData["education"];
  getContact(lang: Language): PortfolioData["contact"];
  getNavbar(lang: Language): PortfolioData["navbar"];
}
