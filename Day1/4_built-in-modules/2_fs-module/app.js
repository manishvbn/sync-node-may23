const fs = require('fs');

// Async - Non Blocking
// fs.readFile('./file1.txt', 'utf8', (err, data) => {
//     if (err)
//         console.error(err);
//     else
//         console.log(data);
// });

// Sync - Blocking Code
// try {
//     var data = fs.readFileSync('./file1.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

// var message = "Hello from Node Application";
// fs.writeFile('./file2.txt', message, "utf-8", (err) => {
//     if (err)
//         console.error(err);
//     else
//         console.log("File Write Completed...");
// })

// var message = "Hello from Node Application\n";
// fs.appendFile('./file3.txt', message, "utf-8", (err) => {
//     if (err)
//         console.error(err);
//     else
//         console.log("File Append Completed...");
// })

// const file = fs.openSync('file1.txt', 'r');
// const buffer = Buffer.alloc(10);

// const bytesRead = fs.readSync(file, buffer, 0, buffer.length, null);
// fs.closeSync(file);

// console.log(buffer.slice(0, bytesRead));

// console.log(bytesRead);