import Head from "next/head";
import styles from "../components/Contacto.module.css";

export default function Contacto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacto | Mi Proyecto SEO</title>
        <meta name="description" content="Contáctanos para más información sobre desarrollo web, SEO y soluciones digitales personalizadas." />
        <meta property="og:title" content="Contacto - Mi Proyecto SEO" />
        <meta property="og:description" content="Formulario y datos para ponerte en contacto con expertos en desarrollo web y SEO." />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className={styles.title}>Contáctanos</h1>
      <p className={styles.text}>¿Tienes dudas o quieres impulsar tu proyecto web? Completa el formulario y te responderemos pronto.</p>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Nombre" required />
        <input className={styles.input} type="email" placeholder="Correo electrónico" required />
        <textarea className={styles.textarea} placeholder="Tu mensaje" rows={4} required />
        <button className={styles.button} type="submit">Enviar</button>
      </form>
    </div>
  );
}
