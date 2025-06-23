import Head from "next/head";
import styles from "../../components/Blog8.module.css";

export default function Blog8() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 8 | Bases de Datos: SQL vs NoSQL</title>
        <meta name="description" content="Compara las bases de datos SQL y NoSQL y aprende cuándo usar cada una." />
        <meta property="og:title" content="Blog 8 - Bases de Datos: SQL vs NoSQL" />
        <meta property="og:description" content="Descubre las diferencias clave entre bases de datos relacionales y no relacionales para tus proyectos." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>Bases de Datos: SQL vs NoSQL</h1>
      <p className={styles.text}>Las bases de datos SQL son ideales para datos estructurados y relaciones complejas, mientras que NoSQL ofrece flexibilidad y escalabilidad para grandes volúmenes de datos no estructurados.</p>
    </div>
  );
}
