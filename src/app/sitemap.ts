import { type MetadataRoute } from 'next';
import { getPages as getDocsPages } from './docs/[[...path]]/robindoc';
import { getPages as getBlogPages } from './blog/[[...path]]/robindoc';
import { getPages as getContributionPages } from './contribution/[[...path]]/robindoc';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pagesLists = await Promise.all([getDocsPages(), getBlogPages(), getContributionPages()]);
  const pages = ['', pagesLists].flat(2);

  return pages.map(page => ({
    url: `https://nimpl.tech${page}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));
}