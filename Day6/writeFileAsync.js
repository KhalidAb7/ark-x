const fs = require("fs");
const readFileAsync = require("./readFileAsync");

function writeFileAsync(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        reject(`Error writing to file: ${err.message}`);
      } else {
        resolve('File written successfully');
      }
    });
  });
}

// Example usage
const filePath = 'file1.txt'; // Replace with your file path
const contentToWrite = 'Hello, this is the content to write to the file.';
writeFileAsync(filePath, contentToWrite)
  .then((message) => {
    console.log(message);
    return readFileAsync(filePath);
  })
  .then((readContent) => {
    console.log('File written content:', readContent);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = writeFileAsync;
