const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);

// Synchronous call Blocking Requests...
// fs.writeFileSync("./test.txt", "Hello World");

// Asynchronous call Non Blocking requests...
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(res);
//     }
// });

// fs.appendFileSync("./test.txt", `${new Date()} Hey There\n`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt"));
// fs.mkdirSync("./my-docs/a/b", {recursive: true});

// console.log("1");
// Blocking requests
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// console.log("2");

// console.log("1");
// Non Blocking requests
// fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//     console.log(res);
// });
// console.log("2");

// Default Thread Pool size = 4
// Max? - 8 core cpu - 8