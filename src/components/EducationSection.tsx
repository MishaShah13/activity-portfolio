import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="bg-section-alt">
      <div className="section-container">
        <h2 className="section-title text-center">Education</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          My academic journey
        </p>

        <div className="max-w-lg mx-auto rounded-2xl border border-border bg-card p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <GraduationCap size={28} />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground">
            Bachelor of Software Engineering
          </h3>
          <p className="mt-1 text-sm text-primary font-medium">In Progress</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Studying core computer science and software engineering subjects with
            a focus on building a strong theoretical and practical foundation.
          </p>
        </div>
      </div>
    </section>
  );
}
