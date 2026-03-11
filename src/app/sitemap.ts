import { MetadataRoute } from 'next'

// Add this line to satisfy the "output: export" requirement
export const dynamic = "force-static";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://corefix.in',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://corefix.in/shop',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://corefix.in/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}