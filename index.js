// const fs = require('fs');


// const content = 'Hello, this is a sample text file.';


// const fileName = 'output.txt';

// fs.writeFile(fileName, content, (err) => {
//   if (err) {
//     console.error('Error writing to the file:', err);
//     return;
//   }

//   console.log('File created successfully:', fileName);
// });



// var fs = require('fs');

// // Use fs.readFile() method to read the file
// fs.readFile('Demo.txt', 'utf8', function (err, data) {
//     // Display the file content
//     console.log(data);
// });

// console.log('readFile called');


const fs = require('fs');

fs.writeFile('example.txt', 'Hello, Node.js!', 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});

