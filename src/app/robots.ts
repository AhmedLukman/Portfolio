import { PORTFOLIO_SITE } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${PORTFOLIO_SITE}/sitemap.xml`,
  }
}