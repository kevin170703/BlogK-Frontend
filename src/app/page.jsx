"use client";

import style from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <div className={style.homeContainer}>
        <Helmet>
          <title>
            SEO WebLab - Eleva tu Visibilidad en google con Estrategias SEO y
            Desarrollo web
          </title>
          <meta
            name="description"
            content="¡Optimiza tu presencia en línea y destaca en los motores de búsqueda con nuestro blog dedicado al SEO y páginas web! Descubre los secretos detrás de un posicionamiento efectivo, estrategias probadas para mejorar tu ranking y técnicas para diseñar sitios web atractivos y funcionales. Conviértete en un experto en la optimización de tu sitio y atrae tráfico orgánico de calidad. ¡Impulsa tu negocio en línea con nuestros consejos y trucos imprescindibles sobre SEO y desarrollo web!"
          />
        </Helmet>
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
    </HelmetProvider>
  );
};

export default Home;
