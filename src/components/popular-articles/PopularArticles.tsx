import { getPopularArticles } from "@/lib/actions";
import React from "react";
import SideArticle from "../side-article/SideArticle";

const PopularArticles = async () => {
  const popularArticles = await getPopularArticles(3);

  return (
    <div className="flex flex-col gap-8">
      {popularArticles.map((article) => (
        <SideArticle key={article.id} data={article} />
      ))}
    </div>
  );
};

export default PopularArticles;
