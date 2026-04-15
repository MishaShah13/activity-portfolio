import { Rocket, Target, Zap } from "lucide-react";

const goals = [
  { icon: Rocket, title: "Skill Development", desc: "Sharpening my programming and software design skills through hands-on projects." },
  { icon: Target, title: "Real-World Projects", desc: "Moving from academic exercises to solving genuine problems with technology." },
  { icon: Zap, title: "New Technologies", desc: "Exploring modern frameworks, cloud platforms, and development tools." },
];

export default function GoalsSection() {
  return (
    <section className="bg-background">
      <div className="section-container">
        <h2 className="section-title text-center">Learning & Goals</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Where I am headed next
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {goals.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <g.icon size={24} />
              </div>
              <h3 className="font-semibold text-card-foreground mb-1">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
