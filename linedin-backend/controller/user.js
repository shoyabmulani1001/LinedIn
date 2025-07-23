const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/user");
const bcryptjs = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

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
    return res
      .status(500)
      .json({ error: "Server Error", message: err.message });
  } catch (err) {
    console.error(err);
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const userExist = await User.findOne({ email });
    // console.log(userExist);
    if (userExist && (await bcryptjs.compare(password, userExist.password))) {
      let token = jwt.sign({ userId: userExist._id });
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
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
