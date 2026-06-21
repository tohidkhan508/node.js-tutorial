const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// Sync...
// fs.writeFileSync("./text.txt", "Hello World");

// Async...
// fs.writeFile("./text.txt", "Hello World Async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (res, err) => {
//   if (res) {
//     console.log(res);
//   } else {
//     console.log(err);
//   }
// });

// fs.appendFileSync("./text.txt", `${Date.now()} Her There\n`);

// fs.cpSync("./text.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./text.txt").isFile());

// fs.mkdirSync("docs/a/b", {recursive: true} )

// console.log("1")
// // Blocking Req...
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// console.log("2")

console.log("1");
// Non Blocking Req...
fs.readFile("./contacts.txt", "utf-8", (err, res) => {
  console.log(res);
});
console.log("2");
console.log("3");
console.log("4");
