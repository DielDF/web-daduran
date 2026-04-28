import Hero from "@/app/components/Hero"
import Capabilities from "@/app/components/Capabilities"
import ProjectsPreview from "@/app/components/ProjectsPreviews"
import About from "@/app/components/About"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import FadeIn from "@/app/components/Fade"

export default function Home() {
  return (
    <main>
      <Hero />
      <FadeIn><Capabilities/></FadeIn>
      <FadeIn><ProjectsPreview/></FadeIn>
      <FadeIn><About/></FadeIn>
      <FadeIn><Contact/></FadeIn>
      <Footer/>
    </main>
  )
}