import Head from "next/head";
import styles from "../../components/Blog2.module.css";

export default function Blog2() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 2 | Fundamentos de HTML5</title>
        <meta name="description" content="Conoce las etiquetas y estructuras básicas de HTML5 para crear páginas web modernas." />
        <meta property="og:title" content="Blog 2 - Fundamentos de HTML5" />
        <meta property="og:description" content="Aprende a estructurar tu contenido web con HTML5 y sus nuevas etiquetas semánticas." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>Fundamentos de HTML5</h1>
      <p className={styles.text}>HTML5 introdujo nuevas etiquetas semánticas y APIs que facilitan la creación de sitios web accesibles y modernos. Es la base de toda página web.</p>
    </div>
  );
}
