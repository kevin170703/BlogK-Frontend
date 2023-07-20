"use client";

import style from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

import NavBar from "../components/NavBar/NavBar";
import CardBlog from "../components/CardBlog/CardBlog";
import dataArticlesJson from "../data/dataArticles";

const Home = () => {
  const [search, setSearch] = useState("");

  function resiveSearchData(data) {
    setSearch(data);
  }

  const dataArticles = dataArticlesJson.filter((article) =>
    article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className={style.homeContainer}>
      <NavBar dataInput={resiveSearchData} home={true} />
      <div className={style.recentArticles}>
        <div className={style.contentCardsBlogs}>
          {dataArticles.map((blog) => (
            <Link
              href={`/${blog.id}`}
              key={blog.id}
              className={style.linkArticle}
            >
              <CardBlog
                key={blog.id}
                id={blog.id}
                title={blog.title}
                image={blog.image}
                description={blog.sections[0].content}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
