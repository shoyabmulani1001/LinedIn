const express = require("express");
const router = express.Router();
const Authintication = require("../authintication/auth");
const ConversationController = require("../controller/conversation");

router.post(
  "/add-conversation",
  Authintication.auth,
  ConversationController.addConversation
);
router.get(
  "/get-conversation",
  Authintication.auth,
  ConversationController.getConversation
);

module.exports = router;
