export default function Footer(){
    return (
        <footer className="relative overflow-hidden border-t border-zinc-900 px-6 py-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(245,158,11,0.08),_transparent_60%)]"/>
            <div className="relative max-w-5xl mx-auto text-center">
                <p className="text-zinc-400">Built with React, Next.js, and a focus on clarity and structure.</p>
                <p className="mt-6 text-sm text-zinc-500">© {new Date().getFullYear()} Diego Duran. All rights reserved.</p>
            </div>
        </footer>
    )
}