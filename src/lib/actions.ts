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

export const getArticleByCat = async (page: number, catSlug: string) => {
  const POST_PER_PAGE = 3;

  try {
    const [articles, count] = await db.$transaction([
      db.post.findMany({
        where: {
          catSlug,
        },
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

export const getPopularArticles = async (limit: number = 3) => {
  try {
    const articles = await db.post.findMany({
      orderBy: {
        views: "desc",
      },
      take: limit,
      include: {
        user: {
          select: {
            image: true,
            name: true,
          },
        },
      },
    });

    return articles;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch popular articles");
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const article = await db.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
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
