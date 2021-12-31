const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blogs")
  .then(() => console.log("connected to the server"))
  .catch((err) => console.log(err));
