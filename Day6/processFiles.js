const writeFileAsync = require("./writeFileAsync");
const readFileAsync = require("./readFileAsync");

// processFiles()
function processFiles(filePaths) {
  const processFile = async (filePath) => {
    try {
      const originalContent = await readFileAsync(filePath);
      const modifiedContent = originalContent.toUpperCase(); // Modify content as needed
      const newFilePath = `${filePath}_modified.txt`;
      await writeFileAsync(newFilePath, modifiedContent);
      console.log(`File processed and written to: ${newFilePath}`);
    } catch (error) {
      console.error(`Error processing file: ${error}`);
    }
  };

  // Process each file asynchronously
  const processFilePromises = filePaths.map(processFile);
  return Promise.all(processFilePromises);
}

// Example usage
const filePaths = ['file1.txt', 'file2.txt']; // Replace with your file paths
processFiles(filePaths)
  .then(() => {
    console.log('All files processed successfully.');
  })
  .catch((error) => {
    console.error(`Error processing files: ${error}`);
  });

module.exports = processFiles ;