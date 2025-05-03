import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type SideArticleProps = {
  data: {
    user: {
      image: string | null;
      name: string | null;
    };
  } & Post;
};

const SideArticle = ({ data }: SideArticleProps) => {
  return (
    <div className="flex gap-5">
      <Image
        src={data.img as string}
        className="rounded-xl object-cover"
        height={20}
        width={170}
        objectFit="cover"
        alt=""
      />
      <div>
        <Link href={`/article/${data.slug}`}>
          <h3 className="text-md font-semibold capitalize mb-2">
            {data.title}
          </h3>
        </Link>
        <div
          className="text-xs text-gray-600"
          dangerouslySetInnerHTML={{
            __html: data.desc.split(" ").slice(0, 20).join(" ") + "...",
          }}
        />
        <div className="flex gap-2 items-center mt-3">
          <Image
            className="rounded-full h-6 w-6"
            src={data.user.image ? data.user.image : "/author.jpg"}
            quality={100}
            height={24}
            width={24}
            objectFit="cover"
            alt="author"
          />

          <p>
            <span className="font-medium text-xs">{data.user.name}</span>{" "}
            <span className="mx-1">•</span>{" "}
            <span className="text-gray-950/60 text-xs">
              {data.createdAt.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="mx-1">•</span>{" "}
            <span className="text-gray-950/60 text-xs">{data.views} Views</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideArticle;
