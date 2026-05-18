import {content, type Language} from "@/app/lib/content";

export default function AboutPreview({language} : {language: Language}){
    const t = content[language].about;
    return (
        <section id="about" className="px-6 py-24 border-t border-zinc-900 bg-zinc-930">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.05),_transparent_60%)]" />
            <div className="max-w-3xl mx-auto text-left">
                <div className="mb-6 h-px w-12 bg-amber-400/70" />
                <h2 className="text-3xl md:text-4xl font-semibold">{t.title}</h2>
                <p className="mt-6 py-4 text-zinc-400 leading-relaxed border-l border-amber-700/40 pl-4">{t.description1}<br/><br/>
                    {t.description2}
                </p>
            </div>
        </section>
    )
}