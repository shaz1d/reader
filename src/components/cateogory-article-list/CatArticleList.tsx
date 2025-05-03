import React from "react";
import Article from "../article/Article";
import { getArticleByCat } from "@/lib/actions";
import Pagination from "../pagination/Pagination";

type Props = {
  page: number;
  catSlug: string;
};

const CatArticleList = async ({ page, catSlug }: Props) => {
  const { articles, count } = await getArticleByCat(page, catSlug);

  const POST_PER_PAGE = 3;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className="flex flex-col">
      {articles.map((article) => (
        <Article key={article.id} data={article} />
      ))}

      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CatArticleList;
