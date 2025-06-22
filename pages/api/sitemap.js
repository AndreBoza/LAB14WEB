const BASE_URL = "https://lab-14-web.vercel.app";

export default async function handler(req, res) {
  const urls = ["/", "/blog", "/contacto"]; // Agrega aquí más rutas si tienes

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
