import { Page, getMeta, getPages } from "../robindoc";
import { Hint } from "../../../components/ui/hint";
import { PackageLinks } from "../../../components/ui/package-links";

const DocsPage = ({ params }: { params: { path?: string[] } }) => {
    const path = '/docs/' + (params.path?.join('/') || '');

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
        />
    );
}

export const generateMetadata = async ({params}: {params: {path?: string[]}}) => {
    const pathname = '/docs/' + (params.path?.join('/') || '');
    const meta = await getMeta(pathname);
    return meta;
};

export const generateStaticParams = async () => {
    const pages = await getPages('/docs');
    return pages.map(page => ({ path: page.split('/').slice(2) }));
}

export default DocsPage;