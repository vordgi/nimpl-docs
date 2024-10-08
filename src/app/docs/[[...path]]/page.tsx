import Link from "next/link";
import { KeylinkToNavigation } from "robindoc";

import { Page, Sidebar, getMeta, getPages } from "./robindoc";
import { Hint } from "../../../components/ui/hint";
import { PackageLinks } from "../../../components/ui/package-links";

const DocsPage = ({ params }: { params: { path?: string[] } }) => {
    const path = '/docs/' + (params.path?.join('/') || '');

    return (
        <>
            <Sidebar pathname={path} link={Link} />
            <Page
                pathname={path}
                link={Link}
                components={{
                    Hint,
                    PackageLinks,
                }}
                config={{
                    publicDirs: ['public']
                }}
            />
            <KeylinkToNavigation />
        </>
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