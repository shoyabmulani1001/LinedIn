const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/user");
const bcryptjs = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const NotificationModel = require("../models/notification");

const cookieOptions = {
  httpOnly: true,
  secure: false, //See to true in production
  sameSite: "Lax", //Set none in Production
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.loginThroughGmail = async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { sub, email, name, picture } = payload;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      //Register New User
      userExist = await User.create({
        googleId: sub,
        email,
        f_name: name,
        profile_pic: picture,
      });
    }

    let jwttoken = jwt.sign(
      { userId: userExist._id },
      process.env.JWT_PRIVATE_KEY
    );
    res.cookie("token", jwttoken, cookieOptions);

    return res.status(200).json({ user: userExist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    // console.log(req.body);
    let { email, password, f_name } = req.body;
    let isUserExist = await User.findOne({ email });
    if (isUserExist) {
      res.status(400).json({
        error:
          "Already have an account with this email . Please try with other email",
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword, f_name });
    await newUser.save();

    return res.status(201).json({
      message: "User registered sucessfully",
      sucess: "yes",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const userExist = await User.findOne({ email });
    // console.log(userExist);
    if (userExist && (await bcryptjs.compare(password, userExist.password))) {
      let token = jwt.sign(
        { userId: userExist._id },
        process.env.JWT_PRIVATE_KEY
      );
      res.cookie("token", token, cookieOptions);
      return res.json({
        message: "Logged in sucessfully",
        sucess: "true",
        userExist,
      });
    } else {
      res.status(400).json({
        error: "Invalid Credentials. ",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body;
    //Check User Exist
    const isExist = await User.findById(req.user._id);
    if (!isExist) {
      return res.status(400).json({ error: "User Dosent Exist" });
    }

    //Update User and return updated Document
    const updateData = await User.findByIdAndUpdate(isExist._id, user);

    const userData = await User.findById(req.user._id);
    res.status(200).json({
      message: "User updated Sucessfully",
      user: userData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await User.findById(id);
    if (!isExist) {
      return res.status(400).json({ error: "No Such User Exist" });
    }
    return res.status(200).json({
      message: "User Fetched Sucessfully",
      user: isExist,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.logout = async (req, res) => {
  res
    .clearCookie("token", cookieOptions)
    .json({ message: "LOgged Out Sucessfully " });
};

exports.findUser = async (req, res) => {
  try {
    let { query } = req.query;
    console.log(query);
    const users = await User.find({
      $and: [
        { _id: { $ne: req.user._id } },
        {
          $or: [
            { name: { $regex: new RegExp(`^${query}`, "i") } },
            { email: { $regex: new RegExp(`^${query}`, "i") } },
          ],
        },
      ],
    });

    return res.status(201).json({
      message: "fetched Data",
      users: users,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.sendFriendRequest = async (req, res) => {
  try {
    const sender = req.user._id;
    const { reciever } = req.body;

    const userExist = await User.findById(reciever);

    if (!userExist) {
      return res.status(400).json({
        error: "No Such User Exist.",
      });
    }

    const index = req.user.friends.findIndex((id) => id.equals(reciever));

    if (index !== -1) {
      return res.status(400).json({
        error: "Already Friend",
      });
    }

    const lastIndex = userExist.pending_friends.findIndex((id) =>
      id.equals(req.user._id)
    );

    if (lastIndex !== -1) {
      return res.status(400).json({
        error: "Already Send Request",
      });
    }

    userExist.pending_friends.push(sender);
    let content = `${req.user.f_name} Has send you friend request `;
    const notification = new NotificationModel({
      sender,
      reciever,
      content,
      type: "friendRequest",
    });
    await notification.save();
    await userExist.save();

    res.status(200).json({
      message: "Friend request Sent",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.acceptFriendRequest = async (req, res) => {
  try {
    let { friendId } = req.body;
    let selfId = req.user._id;

    const friendData = await User.findById(friendId);
    if (!friendData) {
      return res.status(400).json({
        error: "No Such User Exist",
      });
    }

    const index = req.user.pending_friends.findIndex((id) =>
      id.equals(friendId)
    );

    if (index !== -1) {
      req.user.pending_friends.splice(index, 1);
    } else {
      return res.status(400).json({
        error: "No any request from such User",
      });
    }

    req.user.friends.push(friendId);
    friendData.friends.push(req.user._id);

    let content = `${req.user.f_name} Has Accept Your friend Request`;
    const notification = new NotificationModel({
      sender: req.user._id,
      reciever: friendId,
      content,
      type: "friendRequest",
    });
    await notification.save();
    await friendData.save();
    await req.user.save();

    return res.status(200).json({
      message: "You Both Are Connected Now",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getFriendList = async (req, res) => {
  try {
    let friendsList = await req.user.populate("friends");
    return res.status(200).json({
      friends: friendsList.friends,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getPendingFriendList = async (req, res) => {
  try {
    let pendingFriendsList = await req.user.populate("pending_friends");
    return res.status(200).json({
      pending_friends: pendingFriendsList.pending_friends,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.removeFromFriend = async (req, res) => {
  try {
    let selfId = req.user._id;
    let { friendId } = req.params;

    const friendData = await User.findById(friendId);
    if (!friendData) {
      return res.status(400).json({
        error: "No Such User Exist",
      });
    }

    const index = req.user.friends.findIndex((id) => id.equals(friendId));
    const friendIndex = friendData.friends.findIndex((id) => id.equals(selfId));

    if (index !== 1) {
      req.user.friends.splice(index, 1);
    } else {
      return res.status(400).json({
        error: "No Any request From User",
      });
    }

    if (friendData !== -1) {
      friendData.friends.splice(friendData, 1);
    } else {
      return res.status(400).json({
        error: "No Any request From User",
      });
    }

    await req.user.save();
    await friendData.save();

    return res.status(200).json({
      message: "You Both Are Disconneted now",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
