const mongoose = require("mongoose");

//For MongoDB Compass
// linedInClone

mongoose
  .connect("mongodb://localhost:27017/linedInClone")
  .then((res) => {
    console.log("Database Sucessfully Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//For MongoDB Atlas
// shoyabmulani207;
// msqvVzKkZysJOnwd;

// mongodb+srv://shoyabmulani207:msqvVzKkZysJOnwd@cluster0.euyiwu4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongoose
//   .connect(
//     "mongodb+srv://shoyabmulani207:msqvVzKkZysJOnwd@cluster0.euyiwu4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then((res) => {
//     console.log("Database Sucessfully Connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
