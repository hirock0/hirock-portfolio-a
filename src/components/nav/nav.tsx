"use client"
import Link from "next/link"
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Menu_btn from "../ui/menu_btn/menu_btn";
import { useEffect, useState } from "react";
import { MenuLinks } from "./menuLinks";
const Nav = () => {
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
                    <div className="">logo</div>
                    {/* middle_start */}
                    <div onClick={(e) => e.stopPropagation()} className={` ${!menuFlag ? " max-md:translate-x-full" : " max-md:translate-x-0"} max-md:transition-all max-md:fixed max-md:right-0 max-md:top-20 max-md:bg-green-200 max-md:w-1/2 max-md:p-5`}>
                        <div className=" flex items-center gap-5 max-md:flex-col max-md:items-start">
                            {
                                links?.map((link, index) => (
                                    <Link href={link?.path} key={index}>{link?.title}</Link>
                                ))
                            }
                        </div>
                    </div>
                    {/* middle_end */}
                    <div className=" flex items-center gap-5">
                        <button className=" ">
                            Resume
                        </button>
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
