import Hero from "@/containers/hero"
import Projects from "@/containers/projects";
import Contact from "@/containers/contact";
import About from "@/containers/about";
import Resume from "@/containers/resume";
import Skills from "@/containers/skills";

export default function Home() {
  return (
   <div className="mt-16 home-page">
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
   </div>
  );
}
