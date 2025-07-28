const PostModel = require("../models/post");

exports.addPost = async (req, res) => {
  try {
    const userId = req.user._id;

    const { desc, imageLink } = req.body;

    const addPost = new PostModel({ user: userId, desc, imageLink });

    await addPost.save();

    return res.status(200).json({
      message: "Post Successfully",
      post: addPost,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.likeDislikePost = async (req, res) => {
  try {
    const selfId = req.user._id;
    const { postId } = req.body;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(400).json({ error: "No Such Post Found" });
    }

    const index = post.likes.findIndex((id) => id.equals(selfId));

    if (index !== -1) {
      // User already liked the post → remove like
      post.likes.splice(index, 1);
    } else {
      // User hasn't liked the post yet → add like
      post.likes.push(selfId);
    }

    await post.save();

    res.status(200).json({
      message: index !== -1 ? "Post Unliked" : "Post Liked",
      likes: post.likes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    let posts = await PostModel.find()
      .sort({ createdAt: -1 })
      .populate("user", "-password");
    res.status(200).json({
      message: "Fetched Data",
      posts: posts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getPostByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await PostModel.findById(postId).populate("user", "-password");
    if (!post) {
      return res.status(400).json({ error: "No Such Post Found " });
    }
    return res.status(200).json({
      message: "Fetched Data",
      post: post,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getTopPostForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await PostModel.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate("user", "-password")
      .limit(5);
    return res.status(200).json({
      message: "Fetched Data",
      posts: posts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getAllPostForUser = async (req, res) => {
  try {
    const userId = req.user._id; // user ID from authenticated token
    const posts = await PostModel.find({ user: userId }).populate(
      "user",
      "username"
    );

    res.status(200).json({ posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
