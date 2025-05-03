import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const article = await db.post.update({
      where: { slug },
      data: {
        views: { increment: 1 },
      },
    });

    return NextResponse.json({
      success: true,
      article,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
}
