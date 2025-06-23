import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Proyecto SEO</title>
        <meta name="description" content="Explora artículos sobre desarrollo y optimización web." />
        <meta property="og:title" content="Blog - Mi Proyecto SEO" />
        <meta property="og:description" content="Publicaciones sobre Next.js, SEO y rendimiento web." />
        <meta property="og:type" content="article" />
      </Head>
      <h1>Página del Blog</h1>
    </>
  );
}
