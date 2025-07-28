const CommentModel = require("../models/comment");
const PostModel = require("../models/post");
const NotificationModel = require("../models/notification");

exports.commentPost = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    const userId = req.user._id;

    //Check if post exists
    const postExist = await PostModel.findById(postId).populate("user");
    if (!postExist) {
      return res.status(400).json({ error: "No such post found" });
    }

    // Increment comment count
    postExist.comments = postExist.comments + 1;
    await postExist.save();

    // Create and save the new comment
    const newComment = new CommentModel({
      user: userId,
      post: postId,
      comment,
    });
    await newComment.save();

    // Populate comment with user details
    const populatedComment = await CommentModel.findById(
      newComment._id
    ).populate("user", "f_name headline profilePic");

    // Send notification to post owner (not self)
    if (!userId.equals(postExist.user._id)) {
      const content = `${req.user.f_name} commented on your post.`;
      const notification = new NotificationModel({
        sender: userId,
        reciever: postExist.user._id,
        content,
        type: "comment",
        postId: postId.toString(),
      });
      await notification.save();
    }

    return res.status(200).json({
      message: "Commented successfully",
      comment: populatedComment,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getCommentByPostId = async (req, res) => {
  try {
    const { postId } = req.body;
    const isPostExist = await PostModel.findById(postId);
    if (!isPostExist) {
      return res.status(400).json({ error: "No Such Post Found " });
    }
    const comments = await CommentModel.find({ post: postId })
      .sort({ createdAt: -1 })
      .populate("user", "f_name headline profilePic ");
    res.status(200).json({
      message: "Comment Fetched",
      comments: comments,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
