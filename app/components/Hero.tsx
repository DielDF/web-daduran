export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.09),_transparent_60%)]"/>
        <div className="relative text-center max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Diego Duran
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-zinc-400">
            Software Developer
          </p>
          <p className="mt-8 text-lg text-zinc-300 leading-relaxed">
            I solve complex problems with efficient, modern solutions.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-xl bg-amber-400 px-8 py-3 font-medium text-black hover:bg-amber-300 transition">
              View Projects
            </button>
            <button className="rounded-xl border border-zinc-700 px-8 py-3 hover:bg-zinc-900 transition">
              Contact
            </button>
          </div>
        </div>
    </section>
  )
}
