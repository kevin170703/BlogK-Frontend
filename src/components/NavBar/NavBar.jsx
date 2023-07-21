import style from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar({ dataInput, home }) {
  return (
    <nav className={style.nav}>
      <a href="/" className={style.title}>
        SEOWebLab
      </a>
      <form
        style={{ display: home ? "flex" : "none" }}
        action=""
        className={style.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => dataInput(e.target.value)}
        />
      </form>
      <Link
        className={style.newBlog}
        href="/ganar-dinero-siendo-adolescente-por-internet"
      >
        Blog mas popular
      </Link>
    </nav>
  );
}
