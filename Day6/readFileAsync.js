const fs = require('fs');

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading file: ${err.message}`);
      } else {
        resolve(data);
      }
    });
  });
}

// Example usage
const filePath = 'file1.txt'; // Replace with your file path
readFileAsync(filePath)
  .then((content) => {
    console.log('File content:', content);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = readFileAsync;
