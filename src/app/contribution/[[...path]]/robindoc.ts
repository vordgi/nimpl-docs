import { initializeRobindoc } from "robindoc";

export const { Page, Sidebar, getPages, getMeta, getPageContent, getPageData } = initializeRobindoc({
    configuration: {
        sourceRoot: './docs/contribution.mdx',
        basePath: '/contribution',
        gitToken: process.env.GIT_TOKEN,
        fetcher: (url, init) => fetch(url, {...init, cache: 'force-cache', next: { tags: ['contribution'] }}),
    },
    items: [
        {
            title: 'Introduction',
            href: '/',
        },
    ],
});
