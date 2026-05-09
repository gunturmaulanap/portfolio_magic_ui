"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
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
    // Load saved language from localStorage first
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "id" || saved === "en")) {
      setLanguageState(saved);
    }
    // Then mark as mounted
    setMounted(true);
  }, []);

  // Defer localStorage write to prevent blocking UI
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Defer localStorage write using requestIdleCallback or setTimeout
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => localStorage.setItem("language", lang));
    } else {
      setTimeout(() => localStorage.setItem("language", lang), 0);
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
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
