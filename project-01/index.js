const express = require("express");
const { connectMongoDb } = require("./connection");

const { LogReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://localhost:27017/youtube-app-1")
  .then(() => console.log("Mongodb Connected!"))
  .catch((err) => console.log("Error", err));

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use(LogReqRes("log.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
