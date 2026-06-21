// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// function myHandler(Req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()} ${req.method} ${req.url}: New Req Received\n`;
//   const myUrl = url.parse(req.url, true);

//   fs.appendFile("./log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "GET") res.end("HomePage");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`Hi, ${username}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your result for " + search);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup form");
//         else if (req.method === "POST") {
//           // DB query
//           res.end("Seccess");
//         }
//       default:
//         res.end("404 not Found");
//     }
//   });
// }

// const myServer = http.createServer(myHandler);

// myServer.listen(8000, () => console.log("Server Started!"));

// express
const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
  return res.send("Hello From About Page");
});

app.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`));
