import fse from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rootPath = path.resolve(__dirname, '..');
const packagePath = process.cwd();
const distPath = path.join(packagePath, 'dist');
const toBeIncludedFiles = ['README.md', 'LICENSE'];
/**
 * a function that check existence dir+file path
 * @param {string} file
 * @param {string} [dir=packagePath] 
 *
 */
async function checkExistence(file, dir = packagePath) {
  const filePath = path.resolve(dir, file);
  return fse
    .access(filePath)
    .then(() => true)
    .catch((err) => false);
}
/**
 * a function that include dir+file path to build dir
 * @param {string} file
 * @param {string} [baseSourcePath=packagePath] 
 *
 */
async function includeFileInBuild(file, baseSourcePath = packagePath) {
  const sourcePath = path.resolve(baseSourcePath, file);
  const targetPath = path.resolve(distPath, path.basename(file));
  await fse.copyFile(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(packagePath, 'package.json'), 'utf8');
  const json = JSON.parse(packageData);
  const newPackageData = {
    ...json,
    main: './index.common.js',
    module: './index.module.js',
    types: './index.d.ts',
  };
  const targetPath = path.resolve(distPath, 'package.json');

  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${targetPath}`);
}

async function run() {
  try {
    await createPackageFile();
    await Promise.all(
      toBeIncludedFiles.map((file) =>
        checkExistence(file, packagePath).then((exists) => includeFileInBuild(file, !exists ? rootPath : undefined)),
      ),
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

run();
