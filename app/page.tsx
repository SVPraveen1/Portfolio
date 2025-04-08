import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedProject from "@/components/featured-project";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import BlogSection from "@/components/blog-section";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Experience />
      <BlogSection />
      <Contact />
    </div>
  );
}
