// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// exports.auth = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({ error: "no tokens,autharization denied " });
//     }
//     const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
//     req.user = await User.findById(decode.userId).select("-password");
//     next();
//   } catch (err) {
//     // console.error(err);
//     res.status(500).json({ error: "Server error", message: err.message });
//   }
// };

const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.auth = async (req, res, next) => {
  try {
    // Check for token in headers OR cookies
    const headerToken = req.header("Authorization")?.split(" ")[1];
    const cookieToken = req.cookies?.token;
    const token = headerToken || cookieToken;

    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }

    const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = await User.findById(decode.userId).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token", message: err.message });
  }
};
