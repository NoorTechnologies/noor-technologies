
export default function About() {
  return (
    <section
      id="about"
      className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-[#032C3C] py-24 sm:min-h-[80vh] sm:py-28 lg:min-h-[85vh]"
    >
      {/* Full-size underwater photograph */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/underwater-about.jpg')",
        }}
      />

      {/* Underwater color and depth */}
      <div className="absolute inset-0 -z-10 bg-[#002C40]/35" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001B2B]/80 via-[#002B40]/40 to-[#001B2B]/20" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#001B2B]/50 via-transparent to-[#001B2B]/80" />

      {/* Soft sunlight effect */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[100px]" />

      {/* Top curved water edge */}
      <div className="absolute inset-x-0 top-0 z-0">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-12 w-full sm:h-16 md:h-20"
        >
          <path
            d="M0 0 H1440 V20 C1190 65 1030 5 800 30 C550 58 330 12 0 42 Z"
            fill="#032C3C"
            fillOpacity="0.9"
          />

          <path
            d="M0 42 C330 12 550 58 800 30 C1030 5 1190 65 1440 20"
            fill="none"
            stroke="#62DCE0"
            strokeOpacity="0.55"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 md:px-16">
        <div className="max-w-3xl rounded-3xl border border-[#0F766E]/50 bg-[#172033]/85 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10 md:p-14">

          {/* Small heading */}
          <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-[#0F766E] sm:text-sm">
            DISCOVER NOOR TECHNOLOGIES
          </p>

          {/* Main heading */}
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            ABOUT <span className="text-[#0F766E]">US</span>
          </h2>

          {/* Orange accent */}
          <div className="mt-6 h-1 w-20 rounded-full bg-[#F97316]" />

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/90 sm:text-lg sm:leading-9">
            NOOR TECHNOLOGIES is a technology-focused company
            delivering innovative digital solutions, software
            development, and technology education.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            We focus on turning ideas into meaningful digital
            experiences through technology, creativity, and
            continuous learning.
          </p>

          {/* CTA button */}
          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#F97316]"
          >
            Explore What We Do <span>→</span>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#001B2B]/70 to-transparent" />
    </section>
  );
}
