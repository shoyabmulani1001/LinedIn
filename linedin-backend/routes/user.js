const express = require("express");
const router = express.Router();
const UserController = require("../controller/user");
const Authintication = require("../authintication/auth");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/google", UserController.loginThroughGmail);

router.put("/update", Authintication.auth, UserController.updateUser);
router.get("/user/:id", UserController.getProfileById);
router.post("/logout", Authintication.auth, UserController.logout);

router.get("/self", Authintication.auth, (req, res) => {
  //   console.log(req.user);
  return res.status(200).json({
    user: req.user,
  });
});

router.get("/findUser", Authintication.auth, UserController.findUser);
router.post(
  "/sendfriendReq",
  Authintication.auth,
  UserController.sendFriendRequest
);
router.post(
  "/acceptfriendRequest",
  Authintication.auth,
  UserController.acceptFriendRequest
);

router.get("/friendList", Authintication.auth, UserController.getFriendList);
router.get(
  "/pendingriendsList",
  Authintication.auth,
  UserController.getPendingFriendList
);

router.delete(
  "/removeFromFriendList/:friendId",
  Authintication.auth,
  UserController.removeFromFriend
);
module.exports = router;
