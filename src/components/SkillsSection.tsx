const skills = [
  "Programming Fundamentals (PF)",
  "Object-Oriented Programming (OOP)",
  "Data Structures & Algorithms (DSA)",
  "Software Engineering (SE)",
  "Software Construction & Development (SCD)",
  "Web Engineering",
  "Operating Systems (OS)",
  "Computer Networks (CN)",
  "Information Security (IS)",
  "Introduction to ICT",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-section-alt">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Subjects</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Core computer science subjects I have studied
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-skill-badge text-skill-badge-foreground px-5 py-2.5 text-sm font-medium border border-border hover:shadow-md transition-shadow cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
