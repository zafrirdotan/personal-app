import Hero from "@/components/hero";
import FeaturedProject from "@/components/featured-project";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProject />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
