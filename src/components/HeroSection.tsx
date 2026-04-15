import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to pt-16">
      <div className="section-container text-center max-w-3xl">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 fade-in-up">
          Software Engineering Student
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight fade-in-up fade-in-up-delay-1">
          Syeda Misha Shah
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
          I am a Software Engineering student with a strong foundation in core
          computer science subjects. I am passionate about learning,
          problem-solving, and building efficient systems.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center fade-in-up fade-in-up-delay-3">
          <Button size="lg" asChild>
            <a href="#projects">
              <ArrowDown size={16} />
              View My Work
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Mail size={16} />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
