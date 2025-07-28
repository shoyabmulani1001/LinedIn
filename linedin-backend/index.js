const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require("./connection");
require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

const UserRoutes = require("./routes/user");
const PostRoutes = require("./routes/post");
const notificationRoutes = require("./routes/notification");
const commentRoutes = require("./routes/comment");
const ConversationRoutes = require("./routes/conversation");
const MessageRoutes = require("./routes/message");

app.use("/api/auth", UserRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/notification", notificationRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/conversation", ConversationRoutes);
app.use("/api/message", MessageRoutes);

app.listen(PORT, () => {
  console.log("Backend server running on Port", PORT);
});
