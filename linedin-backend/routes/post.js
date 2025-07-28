const express = require("express");
const router = express.Router();
const Authintication = require("../authintication/auth");
const PostController = require("../controller/post");

router.post("/", Authintication.auth, PostController.addPost);
router.post(
  "/likeDislike",
  Authintication.auth,
  PostController.likeDislikePost
);
router.get("/getAllPost", Authintication.auth, PostController.getAllPost);
router.get("/getPostById/:postId", PostController.getPostByPostId);
router.get("/getTop5Post/:userId", PostController.getTopPostForUser);
router.get(
  "/getAllPostForUser",
  Authintication.auth,
  PostController.getAllPostForUser
);

module.exports = router;
