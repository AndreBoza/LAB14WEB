import Head from "next/head";
import styles from "../../components/Blog7.module.css";

export default function Blog7() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog 7 | APIs REST: Comunicación entre Sistemas</title>
        <meta name="description" content="Descubre cómo funcionan las APIs REST y su importancia en el desarrollo web moderno." />
        <meta property="og:title" content="Blog 7 - APIs REST: Comunicación entre Sistemas" />
        <meta property="og:description" content="Aprende a diseñar y consumir APIs REST para conectar aplicaciones y servicios de manera eficiente." />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>APIs REST: Comunicación entre Sistemas</h1>
      <p className={styles.text}>Las APIs REST permiten la comunicación entre diferentes aplicaciones a través de HTTP, facilitando la integración y escalabilidad de sistemas.</p>
    </div>
  );
}
