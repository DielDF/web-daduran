"use client";

import { useState , useEffect} from "react";
import { content, type Language } from "../lib/content";

export default function ProjectsPreviews({language, } : {language: Language}){
    const t = content[language].projects;

    type Project = {
        title :string;
        description: string;
        tech : string;
        image: string;
        link: string;
    };

    const [projects, setProjects] = useState<Project[]>([]);
    const [currProject, setActiveProject] = useState<Project | null>(null);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
    async function fetchProjects() {
        const res = await fetch(`/api/projects?lang=${language}`);
        const data : Project[] = await res.json();

        setProjects(data);
        setActiveProject(data[0]);
        }
        fetchProjects();
    }, [language])

    function handleProjectHover(project: Project) {
        if(!currProject) return;

        if (project.title == currProject.title) return;

        setIsFading(true);

        setTimeout(() => {
            setActiveProject(project);
            setIsFading(false);
        }, 180);
    }

    if(!currProject) {
        return (
            <section id="projects" className="px-6 py-24 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto text-center text-zinc-500">
                    Loading Projects...
                </div>
            </section>
        )
    };

    return (
        
        <section id="projects" className="px-6 py-24 border-t border-zinc-900">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.05),_transparent_60%)]" />
            <div className="max-w-6xl mx-auto">
                
                <div className="mx-auto mb-4 h-px w-32 bg-amber-400/70" />
                <h2 className="text-3xl md:text-4xl font-semibold text-center">{t.title}</h2>
                <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">{t.description}</p>
                <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_0.8fr] items-start">
                    <div className="rounded-3xl border border-amber-400/20 bg-zinc-900/40 p-4 shadow-[0_0_40px_rgba(245,158,11,0.04)]">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-800">
                            <img src={currProject.image}
                            alt={`${currProject.title} image`}
                            className={`h-full w-full object-cover transition-opacity duration-300 ease-out ${isFading ? "opacity-0" : "opacity-100"}`}
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {projects.map((project) => (
                            <a key={project.link} 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block">
                                <article key={project.title}
                                onMouseEnter={() => handleProjectHover(project)}
                                className={`rounded-2xl border p-6 transition ${
                                    currProject.title === project.title 
                                    ? "border-amber-400/70 bg-zinc-900/50"
                                    : "border-zinc-800 hover:border-amber-400 hover:bg-zinc-900/40"
                                }`}
                                >
                                    <h3 className="text-xl font-medium">{project.title}</h3>
                                    <p className="mt-3 text-zinc-400">
                                    {project.description}
                                </p>
                                <p className="mt-4 text-sm text-amber-400/80">{project.tech}</p>
                                </article>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}