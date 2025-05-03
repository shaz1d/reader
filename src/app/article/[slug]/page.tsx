import Comment from "@/components/comment/comment";
import CommentForm from "@/components/comment/comment-form";
import { getArticleBySlug } from "@/lib/actions";
import Image from "next/image";
import React from "react";
type SignleArtcileProps = {
  params: {
    slug: string;
  };
};
const SingleArticle = async ({ params }: SignleArtcileProps) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>No Post Found</div>;
  }
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center">
            <p className="text-gray-950 text-sm text-center py-1 px-4 bg-gray-200 rounded-full inline-block mx-auto mb-2">
              {article.createdAt.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <h1 className="text-6xl font-semibold text-center max-w-6xl mx-auto capitalize">
              {article.title}
            </h1>

            <div className="flex gap-3 mt-4 justify-center">
              <Image
                className="rounded-full h-10 w-10 "
                src={article.user.image ? article.user.image : "/avatar.jpg"}
                quality={100}
                height={40}
                width={40}
                objectFit="cover"
                alt="author"
              />
              <div>
                <p>
                  <span className="font-medium">{article.user.name}</span>{" "}
                </p>
                <p className="text-sm text-gray-950/60">{article.userEmail}</p>
              </div>
            </div>
          </div>
          <Image
            src={article.img ? article.img : "/designer-work-office.jpg"}
            className="h-[70vh] object-bottom mt-10 rounded-3xl"
            height={500}
            width={1900}
            alt=""
            objectFit="cover"
          />
        </div>
        <div className="mx-auto max-w-7xl mt-8">
          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: article.desc }}
          />

          <hr className="border-gray-300 my-10" />

          <CommentForm slug={slug} />

          <h2 className="text-2xl font-semibold mt-8">
            Comments{" "}
            <span className="px-4 ml-1 py-1 bg-gray-200 text-sm font-medium rounded-full">
              {article.comments.length}
            </span>
          </h2>
          <div className="flex flex-col gap-3 mt-5">
            {article.comments.length === 0
              ? ""
              : article.comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleArticle;
