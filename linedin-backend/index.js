const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require("./connection");
require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

const UserRoutes = require("./routes/user");
app.use("/api/auth", UserRoutes);

app.listen(PORT, () => {
  console.log("Backend server running on Port", PORT);
});
