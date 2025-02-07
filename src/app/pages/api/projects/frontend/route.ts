import { NextResponse } from "next/server";
import { DBConnection } from "@/lib/db_connection/db_connection";
import { revalidatePath } from "next/cache";
export async function GET() {
    try {
        const client = await DBConnection()
        const frontendProjects = await client.db("Project").collection("projects").find({
            projectType: "frontend"
        }).sort({ rating: -1 }).toArray()
        revalidatePath("/")
        return NextResponse.json({
            message: "Frontend Project found.",
            success: true,
            frontendProjects
        })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false
        })

    }
}