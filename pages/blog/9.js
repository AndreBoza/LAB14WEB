import Head from "next/head";
import styles from "../../components/Blog9.module.css";

export default function Blog9() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 9 | Seguridad en Aplicaciones Web</title>
        <meta name="description" content="Aprende las mejores prácticas para proteger tus aplicaciones web de amenazas comunes." />
        <meta property="og:title" content="Blog 9 - Seguridad en Aplicaciones Web" />
        <meta property="og:description" content="Descubre cómo prevenir ataques como XSS, CSRF y proteger los datos de tus usuarios." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>Seguridad en Aplicaciones Web</h1>
      <p className={styles.text}>La seguridad es fundamental en el desarrollo web. Implementa buenas prácticas para proteger tus aplicaciones y la información de tus usuarios.</p>
    </div>
  );
}
