import { BookOpen, Code, Globe } from "lucide-react";

const highlights = [
  { icon: Code, title: "Software Development", desc: "Building applications with clean, maintainable code." },
  { icon: Globe, title: "Networking & Systems", desc: "Understanding how systems communicate and operate." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Always exploring new technologies and best practices." },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          A passionate beginner with strong academic foundations
        </p>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-muted-foreground leading-relaxed">
            I am a Software Engineering student who has studied multiple core
            computer science subjects including programming, data structures,
            networking, and information security. While I am at the beginning of
            my professional journey, I bring a deep curiosity for software
            development, system design, and real-world problem solving. I am
            continuously learning, practising, and improving my skills to become
            a well-rounded engineer.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <h.icon size={24} />
              </div>
              <h3 className="font-semibold text-card-foreground mb-1">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
