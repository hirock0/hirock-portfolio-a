
import { DBConnection } from "@/lib/db_connection/db_connection";
import { NextRequest, NextResponse } from "next/server";
import { uploadToCloudinary, uploadToCloudinaryMultipleImages } from "@/utils/cloudinary/cloudinary";
export async function POST(request: NextRequest) {
    try {
        // await connectToDatabase()
        const reqBody = await request.json()

        const {

            title,
            description,
            projectLiveLink,
            projectGithubLink,
            projectType,
            projectImage,
            projectImages,
            facebookLink,
            linkedinLink,
            fearure_1,
            fearure_2,
            fearure_3,
            react,
            javascript,
            mongodb,
            nextjs,
            nodejs,
            expressjs,
            rating,
            videoLink

        } = reqBody

        const languageused = [
            {
                language: react
            },
            {
                language: javascript
            },
            {
                language: mongodb
            },
            {
                language: nodejs
            },
            {
                language: nextjs
            },
            {
                language: expressjs
            },
        ]

        const uploadedImageUrls = await Promise.all(projectImages.map(async (img: any) => {
            const uploadImages = await uploadToCloudinaryMultipleImages(img)
            return {
                image: uploadImages?.secure_url,
                publicId: uploadImages?.public_id
            }
        })
        )
        const uploadProject = await uploadToCloudinary(projectImage)
        const client = await DBConnection()
        const uploadedProjects = await client.db("Project").collection("projects").insertOne(
            {
                title,
                description,
                projectLiveLink,
                projectGithubLink,
                facebookLink,
                linkedinLink,
                projectType,
                videoLink,
                projectImage: {
                    image: uploadProject?.secure_url,
                    publicId: uploadProject?.public_id
                },
                projectImages: uploadedImageUrls,
                features: [
                    {
                        feature: fearure_1
                    },
                    {
                        feature: fearure_2
                    },
                    {
                        feature: fearure_3
                    }
                ],
                languageused,
                rating: Number(rating),
                likes: [],
                comments: [],
                recentdate: new Date().toLocaleDateString(),
                timeStamp: Date.now(),

            }
        )
        if (uploadedProjects?.insertedId) {
            return NextResponse.json({
                message: "Upload successfuly",
                success: true,
            })
        } else {
            return NextResponse.json({
                message: "Upload not successfully",
                success: false,
            })
        }


    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false
        })

    }
}

