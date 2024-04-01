import Link from 'next/link';

type PackageLinksProps = {
    npmName: string;
    githubName: string;
}

const PackageLinks: React.FC<PackageLinksProps> = ({ npmName, githubName }) => (
    <div className="grid grid-flow-col gap-3 justify-start mt-6">
        <Link href={`https://www.npmjs.com/package/${npmName}`} className="block p-0.5 text-center rounded-md bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-80 text-lg font-medium leading-none" target="_blank" rel="noopener noreferrer">
            <span className="flex items-center w-full h-full bg-neutral-50 px-3.5 rounded">NPM</span>
        </Link>
        <Link href={`https://github.com/vordgi/${githubName}`} className="block px-4 py-2 text-center rounded-md border-2 border-neutral-900 hover:border-neutral-500 bg-neutral-50 text-lg font-medium leading-none" target="_blank" rel="noopener noreferrer">GitHub</Link>
    </div>
)

export default PackageLinks;
