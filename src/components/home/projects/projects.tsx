import PaginatedItems from "@/components/ui/pagination/pagination"
const Projects = async () => {
    const reqFullStackProkects = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/pages/api/projects/fullStack`, { method: "GET" })
    const respponse = await reqFullStackProkects.json()
    const fullStackProjects = await respponse?.fullStackProjects
    const reqFrontendProkects = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/pages/api/projects/frontend`, { method: "GET" })
    const respponse2 = await reqFrontendProkects.json()
    const frontendProjects = await respponse2?.frontendProjects
    return (
        <div id="project" className=" py-10">
            <div className=" responsive-box">
                <h1 className=" text-center title-text-lg">Projects</h1>
                <div className="">
                    <h1 className=" title-text-sm">FullStack</h1>

                    <div className=" py-5">
                        <div className=" ">
                            <PaginatedItems itemsPerPage={3} items={fullStackProjects} />
                        </div>
                    </div>
                </div>
                <div className=" mt-10">
                    <h1 className=" title-text-sm">Frontend</h1>

                    <div className=" py-5">
                        <div className=" ">
                            <PaginatedItems itemsPerPage={3} items={frontendProjects} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
