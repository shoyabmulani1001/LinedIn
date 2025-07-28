// routes/notification.js
const express = require("express");
const router = express.Router();
const Authintication = require("../authintication/auth");
const NotificationController = require("../controller/notification");

// All routes use functions from NotificationController
router.get("/", Authintication.auth, NotificationController.getNotification);
router.put("/isRead", Authintication.auth, NotificationController.updateRead);
router.get(
  "/activeNotification",
  Authintication.auth,
  NotificationController.activeNotify
);

module.exports = router;
