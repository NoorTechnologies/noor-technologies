
"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#031B2B] px-5 py-24 sm:px-8 md:px-14 lg:px-20"
    >
      {/* Underwater video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/underwater.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#031B2B]/90 via-[#031B2B]/55 to-[#031B2B]/15" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#031B2B]/75 via-transparent to-[#031B2B]/20" />

      {/* Text stays above the fish */}
      <div className="relative z-20 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#F97316]" />
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#BCEBFA] sm:text-xs md:text-sm">
              DIGITAL SOLUTIONS & TECHNOLOGY
            </p>
          </div>

          <h1 className="font-bold leading-[1.05] tracking-tight text-white">
            <span className="block text-[clamp(3rem,9vw,7rem)]">
              NOOR
            </span>
            <span className="mt-1 block text-[clamp(2.5rem,7.5vw,6rem)] text-[#F97316]">
              TECHNOLOGIES
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/90 sm:text-base md:text-lg">
            Digital Solutions. Software. Technology Education.
          </p>

          <p className="mt-2 max-w-md text-xs leading-6 text-white/70 sm:text-sm">
            Building ideas into powerful digital experiences.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0F766E] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0D9488]"
            >
              Explore Services <span className="ml-3">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-[#F97316] hover:bg-[#F97316]"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 hidden items-center gap-3 text-[10px] tracking-[0.25em] text-white/60 sm:flex">
            <span className="h-8 w-px bg-[#F97316]" />
            SCROLL TO EXPLORE
          </div>
        </div>
      </div>
    </section>
  );
}
