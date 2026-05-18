"use client";

import type { Language } from "../lib/content";

export default function LanguageToggle({
    language, setLanguage,
}: {
    language: Language;
    setLanguage: (language: Language) => void;
}){
    const languages: Language[] = ["EN", "ES"];

    return (
        <div className="fixed bottom-6 left-6 z-50 flex gap-3 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 backdrop-blur">
            {languages.map((lang) => (
                <button 
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-base font-medium transition ${
                    language === lang ?
                    "text-amber-400"
                    : "text-zinc-300 hover:text-white"
                }`}>
                    {lang}
                </button>
        ))}
    </div>
    );
}