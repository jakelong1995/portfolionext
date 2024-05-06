import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projectss";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <Skills />
      {/* <Experience /> */}
    </main>
  );
}
