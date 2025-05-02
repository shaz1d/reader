import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const categories = await db.category.findMany();

        return NextResponse.json({
            success: true,
            categories
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error
        })
    }
}