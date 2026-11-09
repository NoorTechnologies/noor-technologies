
const quickLinks = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Courses", "#courses"],
  ["Portfolio", "#portfolio"],
  ["Contact", "#contact"],
];

const services = [
  "Web Development",
  "Custom Software",
  "UI/UX Design",
  "IT Consulting",
  "Tech Training",
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white px-6 pt-14 pb-6 text-[#172033]">

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold tracking-wide">
            NOOR <span className="text-[#0F766E]">TECHNOLOGIES</span>
          </h2>

          <div className="mt-3 h-1 w-14 rounded-full bg-[#F97316]" />

          <p className="mt-5 max-w-xs text-xs leading-7 text-[#64748B]">
            Digital Solutions. Software. Technology Education.
            Building digital experiences and technology solutions
            for a better future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-bold">QUICK LINKS</h3>

          <div className="mt-5 flex flex-col gap-3">
            {quickLinks.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="w-fit text-xs text-[#64748B] transition-colors hover:text-[#0F766E]"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-sm font-bold">OUR SERVICES</h3>

          <div className="mt-5 flex flex-col gap-3">
            {services.map((service) => (
              <span key={service} className="text-xs text-[#64748B]">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-bold">GET IN TOUCH</h3>

          <div className="mt-5 flex flex-col gap-4 text-xs text-[#64748B]">
            <a href="tel:8349813831" className="hover:text-[#0F766E]">
              +91 8349813831
            </a>

            <a
              href="mailto:technoorpvt@gmail.com"
              className="break-all hover:text-[#0F766E]"
            >
              technoorpvt@gmail.com
            </a>

            <a
              href="https://www.noortechnologies.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F766E]"
            >
              www.noortechnologies.in
            </a>
          </div>

          <a
            href="https://www.noortechnologies.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-md bg-[#0F766E] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#115E59]"
          >
            Visit Website
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[#E2E8F0] pt-6 text-center sm:flex-row">
        <p className="text-[10px] text-[#64748B]">
          © 2026 NOOR TECHNOLOGIES. All Rights Reserved.
        </p>

        <a
          href="#home"
          className="text-xs font-bold text-[#0F766E] hover:text-[#F97316]"
        >
          BACK TO TOP ↑
        </a>
      </div>

    </footer>
  );
}
