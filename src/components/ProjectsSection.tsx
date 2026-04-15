import { Folder } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    tag: "OOP",
    desc: "A console-based application to manage student records using object-oriented principles such as inheritance, encapsulation, and polymorphism.",
  },
  {
    title: "Task Manager",
    tag: "DSA",
    desc: "A task scheduling tool implementing priority queues and linked lists to efficiently organize and manage daily tasks.",
  },
  {
    title: "Basic Networking Simulation",
    tag: "Computer Networks",
    desc: "A simulation of fundamental networking concepts including IP addressing, subnetting, and basic routing protocols.",
  },
  {
    title: "Simple Web Form Project",
    tag: "Web Engineering",
    desc: "A responsive web form with client-side validation built with HTML, CSS, and JavaScript, demonstrating core front-end skills.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Academic projects showcasing what I have learnt
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Folder size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{p.title}</h3>
                  <span className="text-xs font-medium text-primary">{p.tag}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
