import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStacks from "@/components/techstack";
import Banner from "@/components/banner";
import Blog from "@/components/blog";
import Services from "@/components/services";
import Customer from "@/components/customer";
import Testimonial from "@/components/testimonial";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <TechStacks />
      <Testimonial />
      <Customer />
      <Contact />
      <Banner />
      <Blog />
      <Footer />
    </main>
  );
}
