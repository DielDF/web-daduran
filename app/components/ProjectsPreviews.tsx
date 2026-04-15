export default function ProjectsPreviews(){
    return (
        <section className="px-6 py-24 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="mx-auto mb-4 h-px w-32 bg-amber-400/70" />
                <h2 className="text-3xl md:text-4xl font-semibold text-center">Star Accomplishments</h2>
                <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">Handful of projects that reflect my work as a whole.</p>
                <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_0.8fr] items-start">
                    <div className="rounded-3xl border border-amber-400/20 bg-zinc-900/40 p-4 shadow-[0_0_0_0_1px_rgba(245,158,11,0.04)]">
                        <div className="aspect-[4/3] w-full rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
                            Project Preview's Display EDIT LATER
                        </div>
                    </div>
                    <div className="space-y-4">
                        <article className="rounded-2xl border border-zinc-800 p-6 transition hover:border-amber-400 hover:bg-zinc-900/40">
                            <h3 className="text-xl font-medium">daduran.dev</h3>
                            <p className="mt-3 text-zinc-400">
                                Personal portfolio and technical demo built with Next.js and TailwindCSS, deployed on Vercel.
                            </p>
                            <p className="mt-4 text-sm text-amber-400/80"> Next.js / Node.js / TailwindCSS / Vercel </p>
                        </article>
                        <article className="rounded-2xl border border-zinc-800 p-6 transition hover:border-amber-400 hover:bg-zinc-900/40">
                            <h3 className="text-xl font-medium">Airflow Dynamic Simulation</h3>
                            <p className="mt-3 text-zinc-400">
                                Capstone project, used to simulate airflow in a CAD/CAM model. I focused on physics and software assimilation to client's own application.
                            </p>
                            <p className="mt-4 text-sm text-amber-400/80"> Git / Java / C++ </p>
                        </article>
                        <article className="rounded-2xl border border-zinc-800 p-6 transition hover:border-amber-400 hover:bg-zinc-900/40">
                            <h3 className="text-xl font-medium">Megaman Zero Recreation</h3>
                            <p className="mt-3 text-zinc-400">
                                Course-related project and personal passion project of mine, built with Unity and C##.
                            </p>
                            <p className="mt-4 text-sm text-amber-400/80"> 3D Modelling / Unity / C# </p>
                        </article>
                        </div>
                    </div>
                </div>
        </section>
    )
}