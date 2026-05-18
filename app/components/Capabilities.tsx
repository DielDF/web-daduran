import {content, type Language} from "@/app/lib/content";

export default function Capabilities({language} : {language: Language}){
    const t = content[language].capabilities;
    return (
        <section id="capabilities" className="relative px-6 py-28 overflow-hidden border-y border-zinc-800">
          <div className="absolute inset-0 bg-zinc-950/60" />
            <div className="relative max-w-6xl mx-auto ">
                <div className="mx-auto mb-4 h-px w-32 bg-amber-400/70" />
                <h2 className="text-3xl md:text-4xl font-semibold text-center">{t.title}</h2>
                <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">{t.description}</p>
                <div className="mt-20 grid gap-8 md:grid-cols-3">
                    <div className="group rounded-2xl border border-zinc-800 p-8 transition hover:border-amber-400 hover:bg-zinc-900/40">
                        <h3 className="text-xl font-medium">{t.firstitem}</h3>
                        <ul className="mt-6 space-y-3 text-zinc-400">
                            <li>{t.firstitema}</li>
                            <li>{t.firsitemb}</li>
                            <li>{t.firsitemc}</li>
                        </ul>
                    </div>
                    <div className="group rounded-2xl border border-zinc-800 p-8 transition hover:border-amber-400 hover:bg-zinc-900/40">
                        <h3 className="text-xl font-medium">{t.seconditem}</h3>
                        <ul className="mt-6 space-y-3 text-zinc-400">
                            <li>{t.seconditema}</li>
                            <li>{t.seconditemb}</li>
                            <li>{t.seconditemc}</li>
                        </ul>
                    </div>
                    <div className="group rounded-2xl border border-zinc-800 p-8 transition hover:border-amber-400 hover:bg-zinc-900/40">
                        <h3 className="text-xl font-medium">{t.thirditem}</h3>
                        <ul className="mt-6 space-y-3 text-zinc-400">
                            <li>{t.thirditema}</li>
                            <li>{t.thirditemb}</li>
                            <li>{t.thirditemc}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}