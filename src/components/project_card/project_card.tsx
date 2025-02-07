import Image from "next/image"
import Link from "next/link"
import { IoIosGitNetwork } from "react-icons/io";
import { IoLink } from "react-icons/io5";
const Project_card = ({ item }: { item: any }) => {
    return (
        <div className=" w-full">
            <div className=" w-full shadow-lg flex lg:items-center max-lg:flex-col">
                <div className=" cursor-pointer group w-1/2 max-lg:w-full p-5 flex items-center justify-center">
                    <Image className=" group-hover:hidden" src={item?.projectImage?.image} alt={item?.title} width={500} height={500} />
                    <video src={item?.videoLink}
                        controls={false}
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        className=" hidden group-hover:block"
                    />

                </div>
                <div className="w-1/2 max-lg:w-full p-5">
                    <div className="">
                        <h1 className=" text-xl font-semibold">{item?.title}</h1>
                        <p className=" mt-2 ">
                            {
                                item?.description
                            }
                        </p>
                        <ul className=" list-decimal list-inside mt-3">
                            {
                                item?.features.map((feature: any, index: any) => (
                                    <li key={index}>
                                        {
                                            feature?.feature
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                        <div className=" grid grid-cols-4 max-md:grid-cols-2 mt-5 gap-2">
                            {
                                item?.languageused?.filter((elm: any) => elm?.language !== "none")?.map((language: any, idx: any) => (
                                    <div key={idx} className=" bg-accent  text-white text-center px-5 py-2 rounded-md tooltip tooltip-top" data-tip={`${language?.language} are used`} >
                                        {
                                            language?.language
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className=" flex items-center mt-2 gap-2 select-none text-white">
                            <Link href={item?.projectLiveLink} className=" bg-accent hover:bg-cyan-400 px-5 shadow-md py-2 rounded-md flex items-center gap-2" target="_blank">
                                <IoLink size={20} />
                                <span>Live</span>
                            </Link>
                            <Link href={item?.projectGithubLink} className=" bg-accent hover:bg-cyan-400 shadow-md px-5 py-2 rounded-md flex items-center gap-2" target="_blank">
                                <IoIosGitNetwork size={20} />
                                <span>Git</span>

                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project_card
