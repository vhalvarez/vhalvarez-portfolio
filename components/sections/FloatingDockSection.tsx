"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { PortfolioData } from "@/lib/repositories/interfaces";


export function FloatingDockSection() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const { navbar, contact } = usePortfolioData();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto w-full max-w-full flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock
          items={[
            ...navbar.map((item: PortfolioData["navbar"][number]) => ({
              title: item.label,
              icon: <item.icon className="size-full text-neutral-500 dark:text-neutral-300" />,
              href: item.href
            })),
            { separator: true },
            ...Object.entries(contact.social)
              .filter(([, social]: [string, any]) => social.navbar) // eslint-disable-line @typescript-eslint/no-explicit-any
              .map(([name, social]: [string, any]) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
                title: name,
                icon: <social.icon className="size-full text-neutral-500 dark:text-neutral-300" />,
                href: social.url
              })),
            { separator: true },
            {
              title: lang === "en" ? t("language.spanish") : t("language.english"),
              icon: (
                <Image
                  src={lang === "en" ? "https://flagcdn.com/w40/es.png" : "https://flagcdn.com/w40/gb.png"}
                  className="size-full object-cover rounded-full"
                  alt={lang === "en" ? "ES Flag" : "UK Flag"}
                  width={40}
                  height={40}
                  unoptimized
                />
              ),
              href: "#",
              onClick: (e) => {
                e.preventDefault();
                setLang(lang === "en" ? "es" : "en");
              },
            },
            {
              title: resolvedTheme === "dark" ? t("theme.light") : t("theme.dark"),
              icon: (mounted && resolvedTheme === "dark")
                ? <Sun className="size-full text-neutral-500 dark:text-neutral-300" />
                : <Moon className="size-full text-neutral-500 dark:text-neutral-300" />,
              href: "#",
              onClick: (e) => {
                e.preventDefault();
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
              },
            }
          ]}
        />
      </div>
    </div>
  );
}
