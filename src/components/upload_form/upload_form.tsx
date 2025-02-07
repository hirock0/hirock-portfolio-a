
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaGithub, FaLink, FaImage, FaClipboardList, FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import { usePublicAxios } from "@/utils/axios_instance/axios_instance";
import swal from "sweetalert";
type ProjectFormValues = {
    title: string;
    description: string;
    projectLiveLink: string;
    projectGithubLink: string;
    projectType: string;
    projectImage: string | any;
    projectImages: string[] | any;
    facebookLink: string;
    linkedinLink: string;
    fearure_1: string;
    fearure_2: string;
    fearure_3: string;
    react: string;
    javascript: string;
    mongodb: string;
    nextjs: string;
    nodejs: string;
    expressjs: string;
    rating: number,
    videoLink: string

};

export default function UploadForm() {
    const axios = usePublicAxios()
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [multipleImagesPreview, setMultipleImagesPreview] = useState<string[]>([]);
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ProjectFormValues>();

    // Handle single image file input change and set preview
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle multiple image file input change and set previews
    const handleMultipleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const previews: string[] = [];
            Array.from(files).forEach((file: any) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    previews.push(reader.result as string);
                    if (previews.length === files.length) {
                        setMultipleImagesPreview(previews);

                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const onSubmit = async (data: ProjectFormValues) => {
        setLoading(true)
        try {
            if (data.rating > 10) {
                swal({
                    title: "Rating range should out of 10",
                    icon: "warning"
                })
                setLoading(false)
            } else {


                data.projectImage = imagePreview,
                    data.projectImages = multipleImagesPreview

                const response = await axios.post("/pages/api/projects/upload", data)
                if (response?.data?.success) {
                    swal({
                        title: response?.data?.message,
                        text: "You have upload a project",
                        icon: "success"
                    })
                    reset()
                    setImagePreview(""),
                        setMultipleImagesPreview([])
                    setLoading(false)
                } else {
                    swal({
                        title: response?.data?.message,
                        text: "You have not upload a project",
                        icon: "warning"
                    })
                    setLoading(true)
                }
            }
        } catch (error) {
            setLoading(true)
            throw new Error(String(error))

        }

    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
        >
            {/* Title */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaClipboardList className="text-blue-600" /> Title
                </label>
                <input
                    type="text"
                    {...register("title", { required: "Title is required" })}
                    className="w-full p-2 border rounded"
                />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>

            {/* Description */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaFileAlt className="text-green-600" /> Description
                </label>
                <textarea
                    {...register("description", { required: "Description is required" })}
                    className="w-full p-2 border rounded"
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>

            {/* Project Live Link */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaLink className="text-purple-600" /> Project Live Link
                </label>
                <input
                    type="url"
                    {...register("projectLiveLink", { required: "Live link is required" })}
                    className="w-full p-2 border rounded"
                />
                {errors.projectLiveLink && <p className="text-red-500">{errors.projectLiveLink.message}</p>}
            </div>
            {/* --------------------------------- */}
            {/* video */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaClipboardList className="text-blue-600" />Project video link
                </label>
                <input
                    type="url"
                    {...register("videoLink", { required: "video link is required" })}
                    className="w-full p-2 border rounded"
                />
                {errors.videoLink && <p className="text-red-500">{errors.videoLink.message}</p>}
            </div>


            {/* Project GitHub Link */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaGithub className="text-gray-700" /> Project GitHub Link
                </label>
                <input
                    type="url"
                    placeholder="Github repo link"
                    {...register("projectGithubLink", { required: "GitHub link is required" })}
                    className="w-full p-2 border rounded"
                />
                {errors.projectGithubLink && <p className="text-red-500">{errors.projectGithubLink.message}</p>}
            </div>
            {/* ----------------------- */}


            {/* Facebook GitHub Link */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaGithub className="text-gray-700" /> Facebook Link
                </label>
                <input
                    type="url"
                    value={"https://www.facebook.com/profile.php?id=100028605347325"}
                    readOnly
                    {...register("facebookLink", { required: "GitHub link is required" })}
                    className="w-full p-2 border rounded"
                />
                {errors.facebookLink && <p className="text-red-500">{errors.facebookLink.message}</p>}
            </div>
            {/*linkedin GitHub Link */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaGithub className="text-gray-700" /> Linkedin Link
                </label>
                <input
                    type="url"
                    value={"https://www.linkedin.com/in/hirock-dutta-196a7a267/"}
                    readOnly
                    {...register("linkedinLink", { required: "GitHub link is required" })}
                    className="w-full p-2 border rounded"
                />
                {errors.linkedinLink && <p className="text-red-500">{errors.linkedinLink.message}</p>}
            </div>

            {/* Project Type */}
            <div>
                <label className="block font-semibold">Project Type</label>
                <select
                    {...register("projectType", { required: "Project type is required" })}
                    className="w-full p-2 border rounded"
                >
                    <option value="frontend">Frontend</option>
                    <option value="fullstack">Full Stack</option>
                </select>
                {errors.projectType && <p className="text-red-500">{String(errors.projectType.message)}</p>}
            </div>
            {/* ------------------------------------------------- */}

            {/* Features */}
            <div className=" border p-2">
                <label className="block font-semibold">Features:</label>

                <div className="">
                    <h1>Feature-1</h1>
                    <input
                        type="text"


                        {...register("fearure_1", { required: "GitHub link is required" })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.fearure_1 && <p className="text-red-500">{String(errors.fearure_1.message)}</p>}
                </div>
                <div className="">
                    <h1>Feature-2</h1>
                    <input
                        type="text"


                        {...register("fearure_2", { required: "GitHub link is required" })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.fearure_2 && <p className="text-red-500">{String(errors.fearure_2.message)}</p>}
                </div>
                <div className="">
                    <h1>Feature-3</h1>
                    <input
                        type="text"


                        {...register("fearure_3", { required: "GitHub link is required" })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.fearure_3 && <p className="text-red-500">{String(errors.fearure_3.message)}</p>}
                </div>
            </div>

            {/* ------------------------------------------- */}
            <div className="">
                <h1 className=" font-bold">langusges uses</h1>
                <div className=" grid grid-cols-2 gap-5 text-center">
                    <div className=" border">
                        <h1>React</h1>
                        <select {...register("react", { required: "Project type is required" })}>
                            <option value="none">select language</option>
                            <option value="react">React</option>
                        </select>

                        {errors.react && <p className="text-red-500">{String(errors.react.message)}</p>}
                    </div>
                    <div className=" border">
                        <h1>NextJs</h1>
                        <select {...register("nextjs", { required: "Project type is required" })} >
                            <option value="none">select language</option>
                            <option value="nextjs">NextJs</option>
                        </select>
                        {errors.nextjs && <p className="text-red-500">{String(errors.nextjs.message)}</p>}
                    </div>
                    <div className=" border">
                        <h1>MongoDB</h1>
                        <select  {...register("mongodb", { required: "Project type is required" })}>
                            <option value="none">select language</option>
                            <option value="mongodb">MongoDB</option>

                        </select>
                        {errors.mongodb && <p className="text-red-500">{String(errors.mongodb.message)}</p>}
                    </div>
                    <div className=" border">
                        <h1>NodeJs</h1>
                        <select  {...register("nodejs", { required: "Project type is required" })}>
                            <option value="none">select language</option>
                            <option value="nodejs">NodeJs</option>
                        </select>
                        {errors.nodejs && <p className="text-red-500">{String(errors.nodejs.message)}</p>}
                    </div>
                    <div className=" border">
                        <h1>JavaScript</h1>
                        <select  {...register("javascript", { required: "Project type is required" })}>
                            <option value="none">select language</option>
                            <option value="javascript">JavaScript</option>
                        </select>
                        {errors.javascript && <p className="text-red-500">{String(errors.javascript.message)}</p>}
                    </div>
                    <div className=" border">
                        <h1>ExpressJs</h1>
                        <select {...register("expressjs", { required: "Project type is required" })}>
                            <option value="none">select language</option>
                            <option value="expressjs">ExpressJs</option>
                        </select>

                        {errors.expressjs && <p className="text-red-500">{String(errors.expressjs.message)}</p>}
                    </div>

                </div>

            </div>



            {/* ------------------------------ */}
            {/* Project Image (File Input) */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaImage className="text-red-600" /> Project Image
                </label>
                <input

                    type="file"
                    accept="image/*"

                    {...register("projectImage", { required: "Project image is required" })}
                    onChange={handleImageChange}
                    className="w-full p-2 border rounded"

                />
                {errors.projectImage && <p className="text-red-500">{String(errors.projectImage.message)}</p>}

                {/* Image Preview */}
                {imagePreview && (
                    <div className="mt-4">
                        <Image src={imagePreview} alt="Preview" width={500} height={500} className="w-32 h-32 object-cover rounded-md" />
                    </div>
                )}
            </div>

            {/* Project Images (Multiple File Input) */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaImage className="text-yellow-600" /> Project Images
                </label>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    {...register("projectImages", { required: "Project images are required" })}
                    onChange={handleMultipleImagesChange}
                    className="w-full p-2 border rounded"

                />
                {errors.projectImages && <p className="text-red-500">{String(errors.projectImages.message)}</p>}

                {/* Multiple Images Preview */}
                {multipleImagesPreview.length > 0 && (
                    <div className=" overflow-x-scroll">
                        <div className="mt-4 flex gap-4">
                            {multipleImagesPreview.map((preview, index) => (
                                <Image
                                    key={index}
                                    src={preview}
                                    alt={`Preview ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-32 h-32 object-cover rounded-md"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* rating */}
            {/*linkedin GitHub Link */}
            <div>
                <label className="block font-semibold flex items-center gap-2">
                    <FaGithub className="text-gray-700" /> Rating(out of 10)
                </label>
                <input
                    type="number"
                    placeholder="Rating out of 10"
                    {...register("rating", { required: "GitHub link is required" })}
                    className="w-full p-2 border rounded"
                />
                {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
            >
                {
                    !loading ? "Submit" : <div className=" loading loading-spinner loading-md"></div>
                }

            </button>
        </form>
    );
}
