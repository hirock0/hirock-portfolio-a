import Banner from "@/components/home/banner/banner"
import Nav from "@/components/nav/nav"

const Home = () => {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <div className="">
        <Banner />
      </div>
    </main>
  )
}

export default Home
