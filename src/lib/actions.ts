"use server";

import { auth } from "@/auth";
import { db } from "./db";

export const getCategories = async () => {
  try {
    const categories = await db.category.findMany();

    return categories;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch categories");
  }
};

export const getArticlePerPage = async (page: number) => {
  const POST_PER_PAGE = 3;

  try {
    const [articles, count] = await db.$transaction([
      db.post.findMany({
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        include: {
          user: {
            select: {
              image: true,
              name: true,
            },
          },
        },
      }),
      db.post.count(),
    ]);

    return { articles, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch articles");
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const article = await db.post.findUnique({
      where: { slug },
      include: {
        user: {
          select: {
            image: true,
            name: true,
          },
        },
        comments: {
          include: {
            user: true,
          },
        },
      },
    });

    return article;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch article");
  }
};

import { revalidatePath } from "next/cache";

export async function createComment(prevState: unknown, formData: FormData) {
  const desc = formData.get("desc") as string;
  const postSlug = formData.get("postSlug") as string;
  const session = await auth();
  if (!session) {
    return { error: "You Must Login to Comment", success: false };
  }

  if (!desc || !postSlug) {
    return { error: "Comment or post ID missing." };
  }

  try {
    await db.comment.create({
      data: {
        desc,
        postSlug,
        userEmail: session.user.email as string,
      },
    });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Failed to post comment.", success: false };
  }
}
