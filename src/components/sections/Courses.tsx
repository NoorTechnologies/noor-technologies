
const courses = [
  "Web Development",
  "Programming",
  "Computer Fundamentals",
];

export default function Courses() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-title"
      className="bg-white px-5 py-12 text-center"
    >
      <h2 id="courses-title" className="text-2xl font-bold">
        COURSES & TRAINING
      </h2>

      <p className="mt-3 text-sm text-[#64748B]">
        Build your technical skills with practical learning and training.
      </p>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course}
            className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6"
          >
            <h3 className="text-lg font-bold">{course}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
