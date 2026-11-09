
export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="flex min-h-[85vh] flex-col items-center justify-center px-5 text-center"
    >
      <h1 id="hero-title" className="text-3xl font-bold md:text-6xl">
        NOOR TECHNOLOGIES
      </h1>

      <p className="mt-4 text-xs text-[#64748B] md:text-base">
        Digital Solutions. Software. Technology Education.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href="#services"
          className="rounded-md bg-[#0F766E] px-5 py-3 text-sm text-white"
        >
          Explore Services
        </a>

        <a
          href="#contact"
          className="rounded-md bg-[#F97316] px-5 py-3 text-sm text-white"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
