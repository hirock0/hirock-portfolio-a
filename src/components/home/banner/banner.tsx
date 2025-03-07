"use client"
import Nav from "@/components/nav/nav"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link"
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
    const [scroll, setScroll] = useState<boolean>(false)

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener("scroll", scrollHandler)
        return () => { window.removeEventListener("scroll", scrollHandler) }
    }, [scroll])

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });

        return () => {
            AOS.refreshHard();
        };
    }, [])

    return (
        <div className=" md:h-[600px] text-white "
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url(https://i.ibb.co.com/Gf5CRL2k/mountains-7292778-960-720-1.jpg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className=" h-full responsive-box">
                <div className={`${scroll && "fixed top-0 right-0 left-0 backdrop:filter backdrop-blur-sm z-50 bg-zinc-800/80"} `}>
                    <Nav />
                </div>
                {/* banner */}
                <div className=" flex md:h-5/6 max-md:flex-col-reverse">
                    <div className="w-1/2 max-lg:w-4/6 max-md:w-full max-md:pb-10  flex items-center justify-center">

                        <div className=" w-full">
                            <div className=" space-y-4 text-3xl max-lg:text-2xl max-md:text-2xl max-sm:text-xl">
                                <h1>Hi, I'm</h1>
                                <h1 className=" text-4xl max-md:text-3xl max-sm:text-2xl font-semibold">Hirock Dutta</h1>
                                <div className=" ">

                                    <Typewriter
                                        words={['a mern stack web developer.', 'a full stack web developer']}
                                        loop={true}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    />
                                </div>
                                <h1>I make beautiful webdites</h1>
                            </div>
                            <div className=" mt-5 w-fit">
                                <div className=" flex gap-5 items-center">
                                    <Link href={"https://www.linkedin.com/in/hirock-dutta-196a7a267/"} target="_blank">
                                        <button className=""><FaLinkedinIn size={34} /></button>
                                    </Link>
                                    <Link href={"https://www.facebook.com/profile.php?id=100028605347325"} target="_blank">
                                        <button className=" "><FaFacebookF size={30} /></button>
                                    </Link>
                                    <Link href={"https://github.com/hirock0"} target="_blank">
                                        <button className="  "><FaGithub size={34} /></button>
                                    </Link>
                                </div>
                                <div className=" mt-5 relative group">

                                    <button className="w-full">Resume</button>


                                    <div className="hidden group-hover:block  absolute w-full p-2 bg-white rounded-md shadow-lg">
                                        <div className=" w-full h-32 flex items-center justify-center">
                                            <div className=" flex items-center gap-2 ">
                                                <Link
                                                    href="/resume/hirock_resume.pdf"
                                                    download
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <button>Download</button>
                                                </Link>
                                                <Link
                                                    href={"https://drive.google.com/file/d/1kgSuX-vgX1qalF-vY-VV6p2rkggLZjM1/view"}
                                                    target="_blank"
                                                >

                                                    <button>Preview</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* ------- */}
                    <div className="w-1/2 max-lg:w-2/6 max-md:w-full flex items-center justify-center">
                        <div data-aos="fade" className=" rounded-full overflow-hidden w-72 h-72 max-lg:w-52 max-lg:h-52 border shadow-lg shadow-white hover:scale-110">
                            <Image src={"https://i.ibb.co.com/D0L2K2m/HIROCKR-copy.png"} alt="me" width={500} height={500} />
                        </div>
                    </div>
                </div>
                {/* banner */}
            </div>
        </div>
    )
}

export default Banner
