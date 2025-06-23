import Head from "next/head";
import styles from "../../components/Blog3.module.css";

export default function Blog3() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 3 | CSS: Diseño y Estilos Web</title>
        <meta name="description" content="Aprende a dar estilo a tus páginas web con CSS y crea interfaces atractivas." />
        <meta property="og:title" content="Blog 3 - CSS: Diseño y Estilos Web" />
        <meta property="og:description" content="Descubre cómo usar CSS para personalizar el aspecto de tu sitio y mejorar la experiencia de usuario." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>CSS: Diseño y Estilos Web</h1>
      <p className={styles.text}>CSS permite separar el contenido de la presentación, facilitando la creación de sitios web visualmente atractivos y responsivos.</p>
    </div>
  );
}
