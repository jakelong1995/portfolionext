import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Board from "@/components/board";
import Blog from "@/components/blog";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <Board />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
