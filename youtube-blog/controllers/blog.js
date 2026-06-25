const Blog = require("../models/blog");
const Comment = require("../models/comment");

async function getBlogs(req, res) {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
}

async function createBlog(req, res) {
  const { title, body } = req.body;
  const blog = await Blog.create({
    body,
    title,
    createdBy: req.user._id,
    coverImageURL: `/uploads/${req.file.filename}`,
  });
  console.log("Blog", blog);
  return res.redirect(`/blog/${blog._id}`);
}

async function blogFindById(req, res) {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    "createdBy",
  );
  return res.render("blog", {
    req: req.user,
    blog,
    comments
  });
}

module.exports = {
  getBlogs,
  createBlog,
  blogFindById,
};
