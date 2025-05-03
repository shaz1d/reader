import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedSection = async () => {
  const featuredPost = await db.post.findFirst({
    where: {
      isFeatured: true,
    },
  });
  if (!featuredPost) {
    return;
  }
  return (
    <section className="py-5">
      <div className="container mx-auto">
        {/* Featured  */}
        <Link
          href={`/article/${featuredPost.slug}`}
          className="relative w-full min-h-[80vh]  rounded-2xl overflow-hidden p-10 text-white flex flex-col justify-end"
        >
          <Image
            src={featuredPost.img ? featuredPost.img : ""}
            className="-z-20"
            quality={100}
            objectFit="cover"
            objectPosition="bottom"
            fill
            alt=""
          />
          <div className="absolute inset-0 bg-black/50 -z-10"></div>
          <div className="max-w-5xl">
            <p className="text-base md:text-md font-medium">Featured</p>
            <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl mb-6 mt-2">
              {featuredPost.title}
            </h1>
            <div
              className="text-sm md:text-base"
              dangerouslySetInnerHTML={{
                __html:
                  featuredPost.desc.split(" ").slice(0, 40).join(" ") + "...",
              }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedSection;
