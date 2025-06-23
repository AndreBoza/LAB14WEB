import Head from "next/head";
import styles from "../../components/Blog1.module.css";

export default function Blog1() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 1 | Introducción a JavaScript</title>
        <meta name="description" content="Descubre los fundamentos de JavaScript, el lenguaje más popular para desarrollo web." />
        <meta property="og:title" content="Blog 1 - Introducción a JavaScript" />
        <meta property="og:description" content="Aprende qué es JavaScript, para qué sirve y cómo empezar a programar con él." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>Introducción a JavaScript</h1>
      <p className={styles.text}>JavaScript es el lenguaje de programación más utilizado en la web. Permite crear sitios interactivos y dinámicos. Es esencial para cualquier desarrollador frontend.</p>
    </div>
  );
}
