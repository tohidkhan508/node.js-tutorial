const { Router } = require("express");
const { handleUserSignUp, handleUserSignIn } = require("../controllers/user");

const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", handleUserSignIn);

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});

router.post("/signup", handleUserSignUp);

module.exports = router;
