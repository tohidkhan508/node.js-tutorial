const { Router } = require("express");
const upload = require("../middlewares/multer");
const { createBlog, blogFindById } = require("../controllers/blog");
const { createCommentForBlog } = require("../controllers/comment");

const router = Router();

router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.get("/:id", blogFindById)
router.post("/comment/:blogId", createCommentForBlog);


router.post("/", upload.single("coverImage"), createBlog);

module.exports = router;
