import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Banner from "@/components/banner";
import Blog from "@/components/blog";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Banner />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
