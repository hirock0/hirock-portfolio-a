"use client"
import Link from "next/link"
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Menu_btn from "../ui/menu_btn/menu_btn";
import { useEffect, useState } from "react";
import { MenuLinks } from "./menuLinks";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Nav = () => {
    const pathname = usePathname()
    const [menuFlag, setMenuFlag] = useState(false)
    const links = MenuLinks()

    const menuHandler = () => {
        if (!menuFlag) {
            setMenuFlag(true)
        } else {
            setMenuFlag(false)
        }
    }

    useEffect(() => {
        const handler = () => {
            setMenuFlag(false)
        }
        window.addEventListener("click", handler)
        return () => {
            window.removeEventListener("click", handler)
        }
    }, [menuFlag])

    return (
        <nav className={``}>
            <div className=" responsive-box h-20 flex items-center">
                <div className=" flex items-center justify-between w-full h-full">
                    <div className="">
                        <div className=" w-12 h-12 rounded-full overflow-hidden shadow-md shadow-white">
                            <Image priority src={"https://res.cloudinary.com/dusp1j4e0/image/upload/v1738893869/My_Portfolio/logos/WEB_DEV_mxhb5s.gif"} alt="logo" width={500} height={500} />
                        </div>
                    </div>
                    {/* middle_start */}
                    <div onClick={(e) => e.stopPropagation()} className={` ${!menuFlag ? " max-md:translate-x-full" : " max-md:translate-x-0"} max-md:transition-all max-md:fixed max-md:z-30 max-md:right-0 max-md:top-20 max-md:bg-purple-800 max-md:shadow-lg max-md:rounded-b max-md:w-1/2 max-md:p-5`}>
                        <div className=" flex items-center gap-5 max-md:flex-col max-md:items-start">
                            {
                                links?.map((link, index) => (
                                    <Link href={link?.path} key={index}
                                        className={`${pathname === link?.path && " text-yellow-600"} hover:underline hover:underline-offset-8`}
                                    >{link?.title}</Link>
                                ))
                            }
                        </div>
                    </div>
                    {/* middle_end */}
                    <div className=" flex items-center gap-5">
                        <div className="relative group">

                            <button className="w-full">Resume</button>


                            <div className="hidden group-hover:block  fixed right-0 left-0 z-40 w-full p-2 bg-white rounded-md shadow-lg">
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
                        <div onClick={(e) => e.stopPropagation()} className=" md:hidden">
                            <Menu_btn menuHandler={menuHandler}>
                                {
                                    !menuFlag ? <IoMdMenu size={30} /> : <IoCloseSharp size={30} />
                                }
                            </Menu_btn>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
