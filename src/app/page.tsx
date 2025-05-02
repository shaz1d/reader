import Categoeis from "@/components/categories/Categoeis";
import ArticleList from "@/components/post-list/ArticleList";
import FeaturedSection from "@/components/sections/FeaturedSection";
import SideArticle from "@/components/side-article/SideArticle";

import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: { page: string };
};

export default async function Home({ searchParams }: Props) {
  const search = await searchParams;
  const page = parseInt(search.page) || 1;

  return (
    <>
      <FeaturedSection />
      <section className=" border-t border-gray-300">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 ">
            <div className=" col-span-2 pb-10 border-r border-gray-300 pr-6 pt-5">
              <div className="flex gap-8 items-center mb-16">
                <p>Categories:</p> <Categoeis />
              </div>
              <h2 className="text-3xl font-medium">Articles</h2>
              <hr className="border-gray-300 mb-6 mt-4" />
              <ArticleList page={page} />
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
              <div className="flex gap-2 text-sm flex-wrap">
                <Link href="/" className="bg-gray-100 rounded-full px-6 py-3">
                  Design
                </Link>
                <Link href="/" className="bg-gray-100 rounded-full px-6 py-3">
                  Development
                </Link>
                <Link href="/" className="bg-gray-100 rounded-full px-6 py-3">
                  UX
                </Link>
                <Link href="/" className="bg-gray-100 rounded-full px-6 py-3">
                  Marketing
                </Link>
              </div>
              <h2 className="mt-12 text-2xl font-medium mb-5">
                Editor&apos;s Pick
              </h2>
              <div className="flex flex-col gap-8">
                <SideArticle />
                <SideArticle />
                <SideArticle />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
