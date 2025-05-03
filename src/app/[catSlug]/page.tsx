import Categoeis from "@/components/categories/Categoeis";
import CatArticleList from "@/components/cateogory-article-list/CatArticleList";
import PopularArticles from "@/components/popular-articles/PopularArticles";
import { IconArrowLeft } from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: { page: string };
  params: {
    catSlug: string;
  };
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const search = await searchParams;
  const page = parseInt(search.page) || 1;
  const { catSlug } = await params;

  return (
    <>
      <section className=" border-t border-gray-300">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 ">
            <div className=" col-span-2 pb-10 border-r border-gray-300 pr-6 pt-5">
              <div className="flex gap-8 items-center justify-center mb-8 bg-gray-950 text-white font-medium text-center min-h-[100px] uppercase rounded-3xl text-5xl">
                {catSlug}
              </div>
              <div className="flex w-full gap-3 items-center">
                <h2 className="text-3xl font-medium">Articles</h2>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white"
                >
                  <IconArrowLeft stroke={2} /> Go Back
                </Link>
              </div>

              <hr className="border-gray-300 mb-6 mt-4" />
              <CatArticleList page={page} catSlug={catSlug} />
            </div>
            <div className="  pl-6 pt-5">
              <div className="flex gap-10 p-8 pr-10 bg-gray-100 rounded-2xl">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">
                    Get unlimited access to everything on Reader
                  </h4>
                  <p className="text-sm text-gray-900/60">
                    Plan Starting at less than $1/week
                  </p>
                  <Link
                    href=""
                    className="px-6 py-3 rounded-lg bg-gray-200 font-medium text-sm mt-5 inline-block hover:bg-gray-300 transition-colors duration-200"
                  >
                    Get Unlimited Access
                  </Link>
                </div>
                <Image src="/note-book.svg" width={70} height={70} alt="" />
              </div>

              <h2 className="mt-12 text-2xl font-medium mb-5">Category</h2>
              <Categoeis />
              <h2 className="mt-12 text-2xl font-medium mb-5">Most Popular</h2>
              <PopularArticles />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
