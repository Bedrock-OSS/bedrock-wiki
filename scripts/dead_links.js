const fs = require('fs');
const glob = require('glob');
const path = require('path');

function checkForBadLinks(docPath, links, imageLinks, data) {
  let reg = /\[(.+?)\]\((\/.*?)\)/g;
  let matches;
  while ((matches = reg.exec(data)) !== null) {
    const match = matches[2];
    if (!links.includes(match)) {
      console.log(`Dead link: ${match} found in ${docPath}`);
    }
  }

  // Check image links
  reg = /!\[\]\((\/.*?)\)/g;
  while ((matches = reg.exec(data)) !== null) {
    const match = matches[1];
    if (!imageLinks.includes(match)) {
      console.log(`Dead image link: ${match} found in ${docPath}`);
    }
  }
}

function crawlDocs() {
  const filePaths = [];
  const links = [];
  const imageLinks = [];

  const baseDirectory = path.join(__dirname, '..', 'docs');
  for (const docPath of glob.sync(`${baseDirectory}/**/*.md`, { nodir: true })) {
    links.push(path.posix.join('/', path.relative(baseDirectory, docPath)).replace('.md', ''));
    filePaths.push(docPath);
  }

  const publicDirectory = path.join(baseDirectory, 'public');
  for (const docPath of glob.sync(`${publicDirectory}/**/*`, { nodir: true })) {
    imageLinks.push(path.posix.join('/', path.relative(publicDirectory, docPath)));
  }

  return { filePaths, links, imageLinks };
}

function main() {
  const { filePaths, links, imageLinks } = crawlDocs();

  for (const docPath of filePaths) {
    const data = fs.readFileSync(docPath, { encoding: 'utf-8' });
    checkForBadLinks(path.relative(process.cwd(), docPath), links, imageLinks, data);
  }
}

main();
