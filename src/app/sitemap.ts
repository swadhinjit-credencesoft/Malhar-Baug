import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/seo';

const routes = ['', '/rooms', '/amenities', '/dining', '/attractions', '/about', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
