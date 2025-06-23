import Head from "next/head";
import styles from "../../components/Blog10.module.css";

export default function Blog10() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 10 | DevOps y Automatización</title>
        <meta name="description" content="Descubre cómo DevOps y la automatización mejoran el ciclo de vida del software." />
        <meta property="og:title" content="Blog 10 - DevOps y Automatización" />
        <meta property="og:description" content="Aprende sobre integración continua, despliegue automatizado y mejores prácticas DevOps." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>DevOps y Automatización</h1>
      <p className={styles.text}>DevOps integra desarrollo y operaciones para acelerar la entrega de software. La automatización es clave para lograr procesos eficientes y confiables.</p>
    </div>
  );
}
