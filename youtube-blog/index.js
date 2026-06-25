require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const commentRoute = require("./routes/comment");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");
const { getBlogs } = require("./controllers/blog");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDb Error", err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", getBlogs);

app.use("/user", userRoute);
app.use("/blog", blogRoute, commentRoute);
app.use("/blog", commentRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
