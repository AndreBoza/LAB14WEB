import Head from "next/head";
import styles from "../../components/Blog5.module.css";

export default function Blog5() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 5 | Node.js: Backend con JavaScript</title>
        <meta name="description" content="Aprende cómo Node.js permite crear servidores y APIs usando JavaScript en el backend." />
        <meta property="og:title" content="Blog 5 - Node.js: Backend con JavaScript" />
        <meta property="og:description" content="Descubre las ventajas de usar Node.js para el desarrollo del lado del servidor y la creación de APIs REST." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>Node.js: Backend con JavaScript</h1>
      <p className={styles.text}>Node.js permite ejecutar JavaScript fuera del navegador, facilitando la creación de servidores, APIs y aplicaciones en tiempo real.</p>
    </div>
  );
}
