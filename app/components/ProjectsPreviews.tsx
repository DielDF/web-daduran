"use client";

import { useState } from "react";

const projects = [
    {
        title: "daduran.dev",
        description: "Personal portfolio and technical demo built with Next.js and TailwindCSS, deployed on Vercel",
        tech: " Next.js / Node.js / TailwindCSS / Vercel ",
        image: "/images/website.png",
    },
    {
        title:"Airflow Dynamic Simulation",
        description: "Capstone project, used to simulate airflow in a CAD/CAM model. I focused on physics and software assimilation to client's own application.",
        tech : " Git / Java / C++ ",
        image: "/images/simulation4.png",
    },
    {
        title: "Megaman Zero Recreation",
        description: "Course-related project and personal passion project of mine, built with Unity and C##.",
        tech: " 3D Modelling / Unity / C# ",
        image: "/images/megaman.png",
    }
]
export default function ProjectsPreviews(){

    const [currProject, setActiveProject] = useState(projects[0]);
    const [isFading, setIsFading] = useState(false);

    function handleProjectHover(project: typeof projects[number]) {
        if (project.title == currProject.title) return;

        setIsFading(true);

        setTimeout(() => {
            setActiveProject(project);
            setIsFading(false);
        }, 180);
    }


    return (
        <section className="px-6 py-24 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="mx-auto mb-4 h-px w-32 bg-amber-400/70" />
                <h2 className="text-3xl md:text-4xl font-semibold text-center">Star Accomplishments</h2>
                <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">A handful of projects that reflect my work across several projects.</p>
                <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_0.8fr] items-start">
                    <div className="rounded-3xl border border-amber-400/20 bg-zinc-900/40 p-4 shadow-[0_0_40px_rgba(245,158,11,0.04)]">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-800">
                            <img src={currProject.image}
                            alt={`${currProject.title} image`}
                            className={`h-full w-full object-cover transition-opacity duration-300 ease-out ${isFading ? "opacity-0" : "opacity-100"}`}
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {projects.map((project) => (
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
                        ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}