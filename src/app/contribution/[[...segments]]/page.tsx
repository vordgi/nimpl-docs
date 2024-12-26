import { Page, getMetadata, getStaticParams } from "../robindoc";
import { Hint } from "../../../components/ui/hint";
import { PackageLinks } from "../../../components/ui/package-links";

const ContributionPage = ({ params }: { params: { segments?: string[] } }) => {
    const pathname = '/contribution/' + (params.segments?.join('/') || '');

    return (
        <Page
            pathname={pathname}
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

export const generateMetadata = async ({ params }: { params: { segments?: string[] } }) => {
    const pathname = '/contribution/' + (params.segments?.join('/') || '');
    const metadata = await getMetadata(pathname);
    return {
        ...metadata,
        alternates: {
            canonical: pathname,
        },
    };
};

export const generateStaticParams = async () => {
    const staticParams = await getStaticParams('/contribution');
    return staticParams;
}

export default ContributionPage;