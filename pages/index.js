import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Bienvenido al sitio optimizado con Next.js y SEO." />
        <meta property="og:title" content="Inicio - Mi Proyecto SEO" />
        <meta property="og:description" content="Aprende cómo implementar SEO en Next.js con meta tags dinámicos." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>
      <h1>Página de Inicio</h1>
    </>
  );
}
