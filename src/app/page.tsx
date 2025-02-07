export const dynamic = "force-dynamic";
import About from "@/components/home/about/about"
import Banner from "@/components/home/banner/banner"
import Projects from "@/components/home/projects/projects"
import Skills from "@/components/home/skills/skills"
const Home = () => {
  return (
    <main>
      <section className="">
        <Banner />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
    </main>
  )
}

export default Home
