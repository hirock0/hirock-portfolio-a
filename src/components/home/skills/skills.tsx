
import Marquee from "react-fast-marquee"
import { SkillLists } from "./skill_list"
const Skills = () => {
    const skillLists = SkillLists()
    return (
        <div id="skills" data-aos="fade-up" className=" pt-10">
            <h1 className=" text-center title-text-lg">Skills</h1>
            <div className=" overflow-hidden ">
                <Marquee >
                    <div className=" flex gap-5 py-10">
                        {
                            skillLists.map((skill, index) => (
                                <div key={index} className={`${index == 0 && "ml-5"} w-60 h-60 bg-gradient-to-tl text-white rounded-md from-zinc-400 to-teal-600 p-5 flex justify-center items-center shadow-md hover:scale-110 shadow-slate-600`}>
                                    <div className="">
                                        <div className=" text-7xl flex justify-center">
                                            {
                                                skill?.icon
                                            }
                                        </div>
                                        <h1 className=" text-center text-xl">
                                            {skill?.title}
                                        </h1>
                                    </div>

                                </div>

                            ))
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default Skills
