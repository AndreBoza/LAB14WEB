import Head from "next/head";
import styles from "../../components/Blog6.module.css";

export default function Blog6() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 6 | Git y Control de Versiones</title>
        <meta name="description" content="Conoce cómo Git ayuda a gestionar el código fuente y colaborar en proyectos de software." />
        <meta property="og:title" content="Blog 6 - Git y Control de Versiones" />
        <meta property="og:description" content="Aprende los conceptos básicos de Git, ramas, commits y trabajo colaborativo en proyectos de programación." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>Git y Control de Versiones</h1>
      <p className={styles.text}>Git es la herramienta estándar para el control de versiones. Permite llevar un historial de cambios y facilita el trabajo en equipo en proyectos de software.</p>
    </div>
  );
}
