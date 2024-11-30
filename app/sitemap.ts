import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://giftednatusfoundation.org/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://giftednatusfoundation.org/aboutus',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://giftednatusfoundation.org/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: 'https://giftednatusfoundation.org/getInvolved',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      
    {
        url: 'https://www.giftednatusfoundation.org/programs-and-initiatives',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
  ]
}