export default function ProjectsPreviews(){
    return (
        <section className="px-6 py-24 bg-zinc-900/40">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold">Star Accomplishments</h2>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-800 p-6 hover:border-amber-400 transition">
                        <h3 className="text-xl font-medium">daduran.dev</h3>
                        <p className="mt-3 text-zinc-400">
                            Personal portfolio and technical demo built with React, Node.js, and deployed on Vercel.
                        </p>
                        <span className="mt-4 text-sm text-zinc-500">Next.js / Node.js / TailwindCSS</span>
                    </div>
                </div>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-800 p-6 hover:border-amber-400 transition">
                        <h3 className="text-xl font-medium">Airflow Dynamic Simulation</h3>
                        <p className="mt-3 text-zinc-400">
                            Capstone project which is used by my team's sponsor to simulate airflow in a CAD/CAM model. I focused on physics and software assimilation to client's own application.
                        </p>
                        <span className="mt-4 text-sm text-zinc-500">Git / Java / C++</span>
                    </div>
                </div>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-800 p-6 hover:border-amber-400 transition">
                        <h3 className="text-xl font-medium">Megaman Zero Recreation</h3>
                        <p className="mt-3 text-zinc-400">
                            Course-related project and personal passion project of mine, built with Unity and C##.
                        </p>
                        <span className="mt-4 text-sm text-zinc-500">Animations / Unity / C#</span>
                    </div>
                </div>
            </div>
        </section>
    )
}