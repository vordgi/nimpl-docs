import { Page, getMeta, getPages } from "../robindoc";
import { Hint } from "../../../components/ui/hint";
import { PackageLinks } from "../../../components/ui/package-links";

const BlogPage = ({ params }: { params: { path?: string[] } }) => {
    const path = '/blog/' + (params.path?.join('/') || '');

    return (
        <Page
            pathname={path}
            components={{
                Hint,
                PackageLinks,
            }}
            config={{
                publicDirs: ['public']
            }}
            prev={undefined}
            next={undefined}
        />
    );
}

export const generateMetadata = async ({params}: {params: {path?: string[]}}) => {
    const pathname = '/blog/' + (params.path?.join('/') || '');
    const meta = await getMeta(pathname);
    return meta;
};

export const generateStaticParams = async () => {
    const pages = await getPages('/blog');
    return pages.map(page => ({ path: page.split('/').slice(2) }));
}

export default BlogPage;
