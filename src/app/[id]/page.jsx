"use client";
import style from "./page.module.css";

import Image from "next/image";
import NavBar from "../../components/NavBar/NavBar";
import dataArticles from "../../data/dataArticles.json";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ArticleDetails = ({ params }) => {
  const { id } = params;

  const dataArticle = dataArticles.find((article) => article.id == id);
  return (
    <HelmetProvider>
      <NavBar />
      <div key={id} className={style.contentAllArticle}>
        <div className={style.contentArticle}>
          <div className={style.titleAndImage}>
            <Image
              src={dataArticle?.image}
              alt={dataArticle?.title}
              width={"150"}
              height={"150"}
            />
            <h1 className={style.title}>{dataArticle?.title}</h1>
          </div>
          <Helmet>
            <title>{dataArticle?.title}</title>
            <meta
              name="description"
              content={dataArticle?.sections[0].content}
            />
          </Helmet>
          <div className={style.contentIndice}>
            <h2>Índice</h2>
            <ol className={style.indice}>
              {dataArticle?.indice.map((indiceText, index) => (
                <li key={index}>
                  <a href={`#${indiceText.replaceAll(" ", "-")}`}>
                    {indiceText}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          {dataArticle?.sections.map((sectionArticle, index) => (
            <div key={index}>
              <h2 id={`${sectionArticle.title.replaceAll(" ", "-")}`}>
                {sectionArticle.title}
              </h2>
              <p>{sectionArticle.content}</p>
            </div>
          ))}
          <div>
            <h2>Conclusion</h2>
            <p>{dataArticle?.conclusion}</p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ArticleDetails;
