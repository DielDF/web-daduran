"use client";

import {useState} from "react";
import type {Language as LanguageType} from "@/app/lib/content";

import Hero from "@/app/components/Hero"
import Capabilities from "@/app/components/Capabilities"
import ProjectsPreview from "@/app/components/ProjectsPreviews"
import About from "@/app/components/About"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import FadeIn from "@/app/components/Fade"
import LanguageToggle from "@/app/components/Language"

export default function Home() {
  const [language, setLanguage] = useState<LanguageType>("EN");
  return (
    <>
    <LanguageToggle language={language} setLanguage={setLanguage}/>

    <main>
      <Hero language={language}/>
      <FadeIn><Capabilities language={language}/></FadeIn>
      <FadeIn><ProjectsPreview language={language}/></FadeIn>
      <FadeIn><About language={language}/></FadeIn>
      <FadeIn><Contact language={language}/></FadeIn>
      <Footer language={language}/>
    </main>
    </>
  )
}