"use client";

import { createContext, use, useState, useEffect, useMemo, useCallback } from "react";
import { translations, Language } from "@/data/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.id;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id"); // Default to Indonesian
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      // Load saved language from localStorage with error handling
      const saved = localStorage.getItem("language") as Language;
      if (saved && (saved === "id" || saved === "en")) {
        setLanguageState(saved);
      }
    } catch (error) {
      // Handle localStorage errors (private browsing, quota exceeded, etc.)
      console.warn("Failed to read language from localStorage:", error);
      // Keep default language if localStorage fails
    }
  }, []);

  // Synchronous localStorage write for instant response
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);

    // Safe localStorage write with error handling (synchronous for instant response)
    try {
      localStorage.setItem("language", lang);
    } catch (error) {
      console.warn("Failed to save language to localStorage:", error);
    }
  }, []);

  // Memoize translations to prevent unnecessary re-renders
  const t = useMemo(() => translations[language], [language]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = use(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
