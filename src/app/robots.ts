import { MetadataRoute } from 'next';

export default function TxtRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${process.env.URL_PROD}/sitemap.xml`,
  };
}
