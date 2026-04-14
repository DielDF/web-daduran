export default function Capabilities(){
    return (
        <section className="relative px-6 py-28 overflow-hidden border-t border-zinc-900">
        
            <div className="relative max-w-6xl mx-auto ">
                <h2 className="text-3xl md:text-4xl font-semibold text-center">What I Build</h2>
                <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto"> Focused on building scalable, concise software across applications.</p>
                <div className="mt-20 grid gap-8 md:grid-cols-3">
                    <div className="group rounded-2xl border border-zinc-800 p-8 transition hover:border-amber-400 hover:bg-zinc-900/40">
                        <h3 className="text-xl font-medium">Websites</h3>
                        <ul className="mt-6 space-y-3 text-zinc-400">
                            <li>Frontend (Next.js, Tailwind CSS ) </li>
                            <li>Backend (Node.js, REST APIs)</li>
                            <li>Systems (Deployment, DNS / SSL, Configuration)</li>
                        </ul>
                    </div>
                    <div className="group rounded-2xl border border-zinc-800 p-8 transition hover:border-amber-400 hover:bg-zinc-900/40">
                        <h3 className="text-xl font-medium">Applications</h3>
                        <ul className="mt-6 space-y-3 text-zinc-400">
                            <li>Games (Unity, Python)</li>
                            <li>Algorithms & GUIs (Java, C++) </li>
                            <li>System Administration (Linux, Windows)</li>
                        </ul>
                    </div>
                    <div className="group rounded-2xl border border-zinc-800 p-8 transition hover:border-amber-400 hover:bg-zinc-900/40">
                        <h3 className="text-xl font-medium">Databases</h3>
                        <ul className="mt-6 space-y-3 text-zinc-400">
                            <li>Serverless (AWS, DigitalOcean)</li>
                            <li>SQl (mySQL, Oracle)</li>
                            <li>NoSQL (MongoDB, XML/JSON)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}