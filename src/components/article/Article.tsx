import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ArticleProps = {
  data: {
    user: {
      image: string | null;
      name: string | null;
    };
  } & Post;
};
const Article = ({ data }: ArticleProps) => {
  return (
    <div className="py-7 border-b border-gray-300 last:border-0">
      <div className="flex gap-3 mb-4">
        <Image
          className="rounded-full h-10 w-10 "
          src={data.user.image ? data.user.image : "/avatar.jpg"}
          quality={100}
          height={40}
          width={40}
          alt="author"
          objectFit="cover"
        />
        <div>
          <p>
            <span className="font-medium">{data.user.name}</span>{" "}
            <span className="mx-2">•</span>{" "}
            <span className="text-gray-950/60 text-sm">
              {data.createdAt.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>
          <p className="text-sm text-gray-950/60">{data.userEmail}</p>
        </div>
      </div>
      <div className="flex gap-16 items-start">
        <div className="flex flex-col gap-2">
          <Link href={`/article/${data.slug}`}>
            <h3 className="text-2xl font-semibold capitalize">{data.title}</h3>
          </Link>

          <p className="text-sm text-gray-600">
            {data.desc
              .replace(/<[^>]*>/g, "")
              .split(" ")
              .slice(0, 40)
              .join(" ") + "..."}
          </p>

          <div className="flex gap-2 mt-2">
            <Link
              href="/"
              className="bg-gray-100 rounded-full text-xs px-5 py-2 uppercase"
            >
              {data.catSlug}
            </Link>
          </div>
        </div>
        <Image
          src={data.img ? data.img : ""}
          className="rounded-2xl "
          width={250}
          height={100}
          alt=""
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Article;
