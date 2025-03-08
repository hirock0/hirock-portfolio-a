export const dynamic = "force-dynamic";
import About from "@/components/home/about/about"
import Banner from "@/components/home/banner/banner"
import Projects from "@/components/home/projects/projects"
import Skills from "@/components/home/skills/skills"
const Home = () => {
  return (
    <main className="relative w-full overflow-hidden text-white">
      {/* Video Background */}
      <video
        src="https://cdn.pixabay.com/video/2023/10/13/184816-874271901_large.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <section>
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
      </div>
    </main>

  )
}

export default Home
