import styles from "./CardBlog.module.css";
import Image from "next/image";

const ArticleCard = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        alt="Article"
        width={"300"}
        height={"300"}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
