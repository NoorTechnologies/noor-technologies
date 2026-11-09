
const projects = [
  "Website Projects",
  "Software Solutions",
  "UI/UX Designs",
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="px-5 py-12 text-center"
    >
      <h2 id="portfolio-title" className="text-2xl font-bold">
        OUR PORTFOLIO
      </h2>

      <p className="mt-3 text-sm text-[#64748B]">
        Explore our work and digital projects.
      </p>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project}
            className="flex min-h-36 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white p-6"
          >
            <h3 className="text-lg font-bold">{project}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
