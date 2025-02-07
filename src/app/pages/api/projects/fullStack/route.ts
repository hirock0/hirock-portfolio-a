import { NextResponse } from "next/server";
import { DBConnection } from "@/lib/db_connection/db_connection";
import { revalidatePath } from "next/cache";
export async function GET() {
    try {
        const client = await DBConnection()
        const fullStackProjects = await client.db("Project").collection("projects").find({
            projectType: "fullstack"
        }).sort({ rating: -1 }).toArray()
        revalidatePath("/")
        return NextResponse.json({
            message: "Full Stack Project found.",
            success: true,
            fullStackProjects
        })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false
        })

    }
}