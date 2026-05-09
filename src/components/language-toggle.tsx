"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="size-full p-2 rounded-sm overflow-hidden flex items-center justify-center font-bold text-xs hover:scale-110 transition-transform"
      aria-label="Toggle language"
    >
      {language === "id" ? "ID" : "EN"}
    </button>
  );
}
