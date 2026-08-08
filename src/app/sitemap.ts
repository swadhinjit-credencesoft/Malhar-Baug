import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/seo';

type RouteConfig = {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images: string[];
};

const routes: RouteConfig[] = [
  {
    path: '',
    changeFrequency: 'weekly',
    priority: 1,
    images: ['/ExteriorPhotos/heroimg1.jpeg', '/ExteriorPhotos/entry.jpeg'],
  },
  {
    path: '/rooms',
    changeFrequency: 'monthly',
    priority: 0.9,
    images: ['/ExteriorPhotos/ext2.jpeg', '/ExteriorPhotos/ext1.jpeg'],
  },
  {
    path: '/amenities',
    changeFrequency: 'monthly',
    priority: 0.8,
    images: ['/ExteriorPhotos/playing.jpeg', '/ExteriorPhotos/parkingarea.jpeg'],
  },
  {
    path: '/dining',
    changeFrequency: 'monthly',
    priority: 0.8,
    images: ['/dining.jpeg', '/din1.jpeg'],
  },
  {
    path: '/attractions',
    changeFrequency: 'monthly',
    priority: 0.7,
    images: ['/ExteriorPhotos/temple.jpeg'],
  },
  {
    path: '/about',
    changeFrequency: 'yearly',
    priority: 0.6,
    images: ['/aboutimg.jpeg'],
  },
  {
    path: '/contact',
    changeFrequency: 'yearly',
    priority: 0.6,
    images: ['/ExteriorPhotos/mainentry.jpeg'],
  },
];

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images.map((src) => `${siteConfig.url}${src}`),
  }));
}
