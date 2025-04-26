import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import ProjectsCarousel from "@/components/projects-carousel"
import Education from "@/components/education"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"
import Projects from "@/components/projects"
import LeetCodeStats from "@/components/leetcode"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCodeStats/>
      <Education />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
