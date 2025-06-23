import Head from "next/head";
import styles from "../../components/Blog4.module.css";

export default function Blog4() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 4 | React: Componentes y Estado</title>
        <meta name="description" content="Descubre cómo funcionan los componentes y el estado en React para crear aplicaciones interactivas." />
        <meta property="og:title" content="Blog 4 - React: Componentes y Estado" />
        <meta property="og:description" content="Aprende a construir interfaces dinámicas con React usando componentes y hooks de estado." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>React: Componentes y Estado</h1>
      <p className={styles.text}>React es una biblioteca de JavaScript para construir interfaces de usuario. Su sistema de componentes y manejo de estado permite crear aplicaciones web modernas y escalables.</p>
    </div>
  );
}
