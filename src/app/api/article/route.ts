import { auth } from "@/auth";
import { db } from "@/lib/db";
import { generateSlug } from "@/lib/utils";
import axios from "axios";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";

  const POST_PER_PAGE = 3;

  try {
    const posts = await db.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (parseInt(page) - 1),
    });

    return NextResponse.json({
      success: true,
      posts,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const imageFile = formData.get("image") as File;

  const session = await auth();
  if (!session?.user) {
    return NextResponse.json(
      { error: "You must login to post" },
      { status: 402 }
    );
  }

  if (!title || !content || !imageFile || !category) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Upload image to Cloudinary
  const cloudinaryData = new FormData();
  cloudinaryData.append("file", imageFile);
  cloudinaryData.append("upload_preset", "bkc9npd3");

  try {
    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dp7fuazbs/image/upload",
      cloudinaryData
    );

    const imageUrl = uploadRes.data.secure_url;

    let cat = await db.category.findUnique({
      where: { slug: generateSlug(category) },
    });

    if (!cat) {
      cat = await db.category.create({
        data: {
          title: category,
          slug: generateSlug(category),
        },
      });
    }

    await db.post.create({
      data: {
        title,
        desc: content,
        slug: generateSlug(title),
        userEmail: session.user.email as string,
        catSlug: cat.slug,
        img: imageUrl,
      },
    });

    return NextResponse.json({ message: "Post created" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }
}
