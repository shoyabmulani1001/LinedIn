const express = require("express");
const router = express.Router();
const Authintication = require("../authintication/auth");
const MessageController = require("../controller/message");

router.post("/", Authintication.auth, MessageController.sendMessage);
router.get("/:convId", Authintication.auth, MessageController.getMessage);
module.exports = router;
