const express = require("express");
require("./db/mongoConnection");
const cors = require("cors");
const Post = require("./models/model");
const router = require("./router/route");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router);

// app.get("/", (req, res) => {
//   res.json("hello world");
// });

// app.post("/posts", async (req, res) => {
//   try {
//     const newPost = new Post(req.body);
//     console.log(req.body);
//     const result = await newPost.save();
//     res.json(result);
//   } catch (error) {
//     res.json(error);
//   }
// });

app.listen(port, () => {
  console.log(`listening to port at ${port}`);
});
