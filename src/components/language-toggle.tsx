"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { useRef, useState } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);
  const isUpdatingRef = useRef(false);

  const toggleLanguage = () => {
    if (isAnimating || isUpdatingRef.current) return;

    isUpdatingRef.current = true;
    setIsAnimating(true);

    // Get current language value to avoid stale closure
    const currentLanguage = language;
    setLanguage(currentLanguage === "id" ? "en" : "id");

    // Re-enable very quickly
    setTimeout(() => {
      setIsAnimating(false);
      isUpdatingRef.current = false;
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleLanguage();
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      onKeyDown={handleKeyDown}
      className={`size-full p-2 rounded-sm overflow-hidden flex items-center justify-center font-bold text-xs transition-all duration-150 focus:outline-none ${
        isAnimating ? "scale-95" : "hover:scale-110"
      }`}
      aria-label={`Switch language from ${language === "id" ? "Indonesian" : "English"} to ${language === "id" ? "English" : "Indonesian"}`}
      aria-pressed={false}
      role="switch"
      type="button"
    >
      {language === "id" ? "ID" : "EN"}
    </button>
  );
}
