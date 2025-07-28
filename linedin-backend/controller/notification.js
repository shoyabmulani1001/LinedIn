const NotificationModel = require("../models/notification");

// Get all notifications for the logged-in user
exports.getNotification = async (req, res) => {
  try {
    let ownId = req.user._id;
    let notifications = await NotificationModel.find({ reciever: ownId })
      .sort({ createdAt: -1 })
      .populate("sender reciever");

    return res.status(200).json({
      message: "Notification Fetched Successfully",
      notifications: notifications,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

// Update notification as read
exports.updateRead = async (req, res) => {
  try {
    const { notificationId } = req.body;

    const notification = await NotificationModel.findByIdAndUpdate(
      notificationId,
      { isRead: true }
    );

    if (!notification) {
      return res.status(404).json({ error: "Notification Not Found" });
    }

    return res.status(200).json({
      message: "Notification marked as read",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

// Get count of unread notifications
exports.activeNotify = async (req, res) => {
  try {
    let ownId = req.user._id;

    let notifications = await NotificationModel.find({
      reciever: ownId,
      isRead: false,
    });

    return res.status(200).json({
      message: "Unread notification count fetched successfully",
      count: notifications.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
