import { Mail, Linkedin, Github } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "misha@example.com", href: "mailto:misha@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/misha", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "github.com/misha", href: "https://github.com" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-section-alt">
      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          I would love to connect — feel free to reach out
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <l.icon size={24} />
              </div>
              <div className="text-center">
                <p className="font-semibold text-card-foreground text-sm">{l.label}</p>
                <p className="text-xs text-muted-foreground">{l.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
