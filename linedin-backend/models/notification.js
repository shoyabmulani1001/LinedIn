// const mongoose = require("mongoose");

// const NotificationSchema = new mongoose.Schema(
//   {
//     sender: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "user",
//       required: true,
//     },
//     reciever: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "user",
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//     type: {
//       type: String,
//       required: true,
//       enum: ["friendRequest", "comment"],
//     },
//     isRead: {
//       type: Boolean,
//       default: false,
//     },
//     postId: {
//       type: String,
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // ✅ Export with a clean name
// const NotificationModel = mongoose.model("Notification", NotificationSchema);
// module.exports = NotificationModel;

const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    type: { type: String, required: true }, // e.g., 'comment', 'like'
    postId: { type: String }, // optional
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
