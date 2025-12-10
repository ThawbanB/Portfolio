import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="skills">
      <Skills />
      </div>
      <div id="projects">
      <Projects />
      </div>
    </div>
  );
}
