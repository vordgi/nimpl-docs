import { Page, getMetadata, getStaticParams } from "../robindoc";
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

export const generateMetadata = async ({ params }: { params: { segments?: string[] } }) => {
    const pathname = '/blog/' + (params.segments?.join('/') || '');
    const metadata = await getMetadata(pathname);
    return {
        ...metadata,
        alternates: {
            canonical: pathname,
        },
    };
};

export const generateStaticParams = async () => {
    const staticParams = await getStaticParams('/blog');
    return staticParams;
}

export default BlogPage;
