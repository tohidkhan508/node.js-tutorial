const { Router } = require("express");
const { createCommentForBlog } = require("../controllers/comment");

const router = Router();

router.post("/comment/:blogId", createCommentForBlog);

module.exports = router;
