const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRoute = require("./routes/user");

const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://localhost:27017/youtube-app-1")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB Error", err));

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", userRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
