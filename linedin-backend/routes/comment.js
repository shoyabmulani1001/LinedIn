const express = require("express");
const router = express.Router();
const Authintication = require("../authintication/auth");
const CommentController = require("../controller/comment");

router.post("/", Authintication.auth, CommentController.commentPost);

router.get("/:postId", CommentController.getCommentByPostId);
module.exports = router;
