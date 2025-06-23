import Head from "next/head";
import styles from "../components/Blog.module.css";

export default function Blog() {
  // Simulación de artículos
  const posts = [
    {
      title: "Cómo mejorar el SEO en Next.js",
      text: "Descubre técnicas modernas para optimizar tu sitio Next.js y escalar posiciones en Google.",
    },
    {
      title: "Ventajas del SSR para el posicionamiento web",
      text: "El renderizado del lado del servidor (SSR) puede mejorar la indexación y velocidad de tu web.",
    },
    {
      title: "Tendencias en desarrollo web 2025",
      text: "Explora las tecnologías y prácticas que dominarán el desarrollo web este año.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog de SEO y Desarrollo Web | Mi Proyecto SEO</title>
        <meta name="description" content="Artículos y recursos sobre SEO, Next.js y desarrollo web moderno para mejorar tu posicionamiento en Google." />
        <meta property="og:title" content="Blog de SEO y Desarrollo Web - Mi Proyecto SEO" />
        <meta property="og:description" content="Publicaciones sobre optimización, tendencias y mejores prácticas en desarrollo web y SEO." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.text}>Lee nuestros últimos artículos sobre SEO, Next.js y desarrollo web.</p>
      {posts.map((post, idx) => (
        <div className={styles.article} key={idx}>
          <div className={styles.articleTitle}>{post.title}</div>
          <div className={styles.articleText}>{post.text}</div>
        </div>
      ))}
    </div>
  );
}
