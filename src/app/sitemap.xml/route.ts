/* eslint-disable import/prefer-default-export */
// workaround for generating the sitemap.xml with output: export
// source:  https://github.com/vercel/next.js/issues/59136#issuecomment-1938195038

import insights from '@/data/insights';
import insightCategories from '@/data/insights/categories';
import { Route } from '@/utils/routes';
import { MetadataRoute } from 'next';

function getSiteMap() {
  const siteMap: MetadataRoute.Sitemap = [];

  // load from routes
  Object.values(Route).forEach((route) => {
    siteMap.push({
      url: `${process.env.URL_PROD}${route}`,
      // lastModified: ?,
      // changeFrequency: ?,
      // priority: ?,
    });
  });

  // load from insights
  insights.forEach((insight) => {
    siteMap.push({
      url: `${process.env.URL_PROD}${Route.INSIGHTS}/${insight.slug}`,
      lastModified: insight.lastModifiedDate,
      changeFrequency: insight.changeFrequency,
      priority: insight.priority,
    });
  });

  // load from insights/categories
  Object.values(insightCategories).forEach((cat) => {
    siteMap.push({
      url: `${process.env.URL_PROD}${Route.INSIGHTS_CATEGORIES}/${cat.slug}`,
      // lastModified: ?,
      // changeFrequency: ?,
      // priority: ?,
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${siteMap
    .map(
      (item) => `
            <url>
              <loc>${item.url}</loc>
              <lastmod>${item.lastModified ?? ''}</lastmod>
              <changefreq>${item.changeFrequency ?? ''}</changefreq>
              <priority>${item.priority ?? ''}</priority>
            </url>
          `,
    )
    .join('')}
    </urlset>
  `;
}

export async function GET() {
  return new Response(getSiteMap(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
