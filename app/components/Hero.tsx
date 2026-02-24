export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Diego Duran
      </h1>
      <p className="mt-4 text-lg text-zinc-400">
        Software Developer
      </p>
      <p className="mt-6 max-w-xl text-zinc-300">
        I solve complex problems with efficient, modern solutions.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="rounded-xl bg-amber-400 px-6 py-3 font-medium text-black hover:bg-amber-300 transition">
          View Projects
        </button>
        <button className="rounded-xl border border-zinc-700 px-6 py-3 hover:bg-zinc-900 transition">
          Contact
        </button>
      </div>
    </section>
  )
}
