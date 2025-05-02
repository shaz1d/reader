import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    const {searchParams} = new URL(req.url)
    const page = searchParams.get("page") || "1"

    const POST_PER_PAGE = 3;


    try {
        const posts = await db.post.findMany({
            take: POST_PER_PAGE,
            skip: POST_PER_PAGE * (parseInt(page) -1)
        });

        return NextResponse.json({
            success: true,
            posts
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error
        })
    }
}