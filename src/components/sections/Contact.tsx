
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white px-5 py-12 text-center"
    >
      <h2 id="contact-title" className="text-2xl font-bold">
        CONTACT US
      </h2>

      <p className="mt-3 text-sm text-[#64748B]">
        Have a project or learning enquiry? Get in touch with us.
      </p>

      <address className="mx-auto mt-8 flex max-w-xl flex-col gap-3 not-italic">
        <a
          href="tel:+918349813831"
          className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4"
        >
          <h3 className="text-sm font-bold">PHONE</h3>
          <p className="mt-1 text-sm text-[#64748B]">
            +91 8349813831
          </p>
        </a>

        <a
          href="mailto:technoorpvt@gmail.com"
          className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4"
        >
          <h3 className="text-sm font-bold">EMAIL</h3>
          <p className="mt-1 text-sm text-[#64748B]">
            technoorpvt@gmail.com
          </p>
        </a>

        <a
          href="https://www.noortechnologies.in"
          className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4"
        >
          <h3 className="text-sm font-bold">WEBSITE</h3>
          <p className="mt-1 text-sm text-[#64748B]">
            www.noortechnologies.in
          </p>
        </a>
      </address>
    </section>
  );
}
