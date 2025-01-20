import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lechsystem.pl',
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://lechsystem.pl/o-nas',
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://lechsystem.pl/oferta',
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://lechsystem.pl/galeria',
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://lechsystem.pl/kontakt',
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}