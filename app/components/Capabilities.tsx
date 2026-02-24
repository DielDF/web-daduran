export default function Capabilities(){
    return (
        <section className="px-6 py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold">What I Build</h2>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-800 p-6">
                        <h3 className="text-xl font-medium">Websites</h3>
                        <ul className="mt-4 space-y-2 text-zinc-400">
                            <li>Frontend (Next.js, Tailwind CSS ) </li>
                            <li>Backend (Node.js, REST APIs)</li>
                            <li>Systems (Deployment, DNS / SSL, Configuration)</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-zinc-800 p-6">
                        <h3 className="text-xl font-medium">Applications</h3>
                        <ul className="mt-4 space-y-2 text-zinc-400">
                            <li>Games (Unity, Python)</li>
                            <li>Algorithms & GUIs (Java, C++) </li>
                            <li>System Administration (Linux, Windows)</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-zinc-800 p-6">
                        <h3 className="text-xl font-medium">Databases</h3>
                        <ul className="mt-4 space-y-2 text-zinc-400">
                            <li>Serverless (AWS, DigitalOcean)</li>
                            <li>SQl(mySQL, Oracle)</li>
                            <li>NoSQL (MongoDB, XML/JSON)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}