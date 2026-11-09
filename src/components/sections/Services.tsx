
const services = [
  ["Web Development", "Modern and responsive websites for businesses."],
  ["Custom Software", "Software and web applications built for your needs."],
  ["UI/UX Design", "Clean and user-friendly digital experiences."],
  ["IT Consulting", "Technology guidance and IT support for businesses."],
  ["Tech Training", "Practical technology coaching and education."],
  ["Website Maintenance", "Website updates and technical support."],
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="px-5 py-12 text-center"
    >
      <h2 id="services-title" className="text-2xl font-bold">
        OUR SERVICES
      </h2>

      <p className="mt-3 text-sm text-[#64748B]">
        Technology solutions to help businesses grow digitally.
      </p>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, description]) => (
          <article
            key={title}
            className="rounded-lg border border-[#E2E8F0] bg-white p-6"
          >
            <h3 className="text-lg font-bold">{title}</h3>

            <p className="mt-2 text-sm text-[#64748B]">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
