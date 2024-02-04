// index.js
const writeFileAsync = require("./writeFileAsync");
const processFiles = require("./processFiles");
const readFileAsync = require("./readFileAsync");


async function main() {
  const filePaths = ['file1.txt', 'file2.txt' ];

  try {
    await processFiles(filePaths);
    console.log('All files processed successfully.');
  } catch (error) {
    console.error(`Error processing files: ${error}`);
  }
}

main();
