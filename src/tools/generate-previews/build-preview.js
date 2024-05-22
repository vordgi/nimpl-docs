const { writeFile, mkdir } = require('fs/promises');
const { join } = require('path');
const { Resvg } = require('@resvg/resvg-js');
const { existsSync } = require('fs');
const template = require('./template');

async function buildPreview({ pkgName, title, fileName }) {
  const resultFolder = join(process.cwd(), 'public', 'preview');

  if (!existsSync(resultFolder)) mkdir(resultFolder)

  const injectedSvg = template.replace('{{title}}', title).replace('{{package}}', pkgName);
  const resvg = new Resvg(injectedSvg, {});
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  await writeFile(join(resultFolder, `${fileName}.png`), pngBuffer);
}

module.exports = buildPreview;