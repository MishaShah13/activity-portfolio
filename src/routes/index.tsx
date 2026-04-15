import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import GoalsSection from "@/components/GoalsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syeda Misha Shah — Software Engineering Student" },
      { name: "description", content: "Portfolio of Syeda Misha Shah, a passionate Software Engineering student building strong foundations in software development and problem solving." },
      { property: "og:title", content: "Syeda Misha Shah — Software Engineering Student" },
      { property: "og:description", content: "Portfolio of Syeda Misha Shah, a passionate Software Engineering student." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <GoalsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
