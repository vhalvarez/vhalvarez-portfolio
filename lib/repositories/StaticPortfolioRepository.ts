import { DATA } from "@/data/resume";
import { IPortfolioRepository, Language, PortfolioData } from "./interfaces";

export class StaticPortfolioRepository implements IPortfolioRepository {
  getData(lang: Language): PortfolioData {
    return DATA[lang] as PortfolioData;
  }

  getSkills(lang: Language) {
    return DATA[lang].skills as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  getProjects(lang: Language) {
    return DATA[lang].projects as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  getWork(lang: Language) {
    return DATA[lang].work as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  getEducation(lang: Language) {
    return DATA[lang].education as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  getContact(lang: Language) {
    return DATA[lang].contact as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  getNavbar(lang: Language) {
    return DATA[lang].navbar as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}
