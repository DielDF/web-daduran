import Hero from "./Hero"
import Capabilities from "./Capabilities"
import ProjectsPreviews from "./ProjectsPreviews"
import AboutPreview from "./About"
import ContactCTA from "./Contact"

export default function Home(){
    return (
        <main>
            <Hero/>
            <Capabilities/>
            <ProjectsPreviews/>
            <AboutPreview/>
            <ContactCTA/>
            <div>
                
            </div>
        </main>
    )
}