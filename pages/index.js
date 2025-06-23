import Head from "next/head";
import styles from "../components/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | SEO y Desarrollo Web en Next.js</title>
        <meta name="description" content="Bienvenido a Mi Proyecto SEO: aprende, implementa y domina el SEO y el desarrollo web moderno con Next.js." />
        <meta property="og:title" content="Inicio - SEO y Desarrollo Web en Next.js" />
        <meta property="og:description" content="Recursos, guías y servicios para optimizar tu sitio web y mejorar tu posicionamiento en Google." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>
      <h1 className={styles.title}>Bienvenido a Mi Proyecto SEO</h1>
      <p className={styles.text}>
        Aprende a potenciar tu presencia online con las mejores prácticas de SEO y desarrollo web usando Next.js.
      </p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureTitle}>SEO Moderno</div>
          <div className={styles.featureText}>Optimización avanzada para motores de búsqueda y mejores posiciones en Google.</div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureTitle}>Desarrollo con Next.js</div>
          <div className={styles.featureText}>Aprovecha el SSR, rutas dinámicas y rendimiento superior para tu web.</div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureTitle}>Recursos y Blog</div>
          <div className={styles.featureText}>Artículos, guías y tips para mantenerte actualizado en el mundo web.</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: 24 }}>
        <Link href="/blog" className={styles.cta}>
          Ir al Blog
        </Link>
        <Link href="/contacto" className={styles.cta}>
          Ir a Contacto
        </Link>
      </div>
      
    </div>
  );
}
