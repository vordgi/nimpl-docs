const { glob } = require('glob');
const { join, parse } = require('path');
const { readFile } = require('fs/promises');
const buildPreview = require('./build-preview');

const rootDir = join(process.cwd(), 'src/pages');

const generatePreviews = async () => {
    console.log('Previews generation...');
    const files = await glob(['./**/*.mdx', './*.mdx'], {
        cwd: rootDir,
        ignore: 'blog/**',
        posix: true,
    });

    for await (const file of files) {
        const { dir, name } = parse(file);
        const pkgName = dir.split('/')?.[0] || name;

        const docRaw = await readFile(join(rootDir, file), 'utf-8');
        const title = docRaw.match(/^title: ['"]?(.+) \| .+['"]?$/m)?.[1];
        const previewName = docRaw.match(/^previewName: ['"]?(.+)['"]?$/m)?.[1];

        if (pkgName && title && previewName) {
            await buildPreview({ pkgName, title, fileName: previewName });
        }
    }
    console.log('Previews generation completed');
}

generatePreviews();
