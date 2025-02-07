import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
export const SkillLists = () => {
    const skills = [
        {
            title: "React",
            icon: <FaReact color="cyan" />
        },
        {
            title: "NodeJs",
            icon: <FaNodeJs color="green" />
        },
        {
            title: "MongoDB",
            icon: <SiMongodb color="green" />
        },
        {
            title: "Express",
            icon: <SiExpress />
        },
        {
            title: "NextJs",
            icon: <RiNextjsFill />
        },
        {
            title: "JavaScript",
            icon: <IoLogoJavascript color="yellow" />

        },
        {
            title: "Html",
            icon: <FaHtml5 color="orange" />
        },
        {
            title: "CSS",
            icon: <IoLogoCss3 color="blue" />
        },
    ]
    return skills
}