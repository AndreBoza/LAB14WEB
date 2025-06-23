const BASE_URL = "https://lab-14-web.vercel.app";

// Simulando rutas desde una base de datos
const dynamicRoutes = [
  { path: "/", updated: "2024-06-01" },
  { path: "/blog", updated: "2024-06-10" },
  { path: "/contacto", updated: "2024-06-20" },
  // Puedes agregar más dinámicamente si tienes una API real
];

export default async function handler(req, res) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${dynamicRoutes
      .map(
        (route) => `
        <url>
          <loc>${BASE_URL}${route.path}</loc>
          <lastmod>${route.updated}</lastmod>
        </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
