const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  createdAt: Date,
  category: String,
  author: String,
  content: String,
  slug: String,
});

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;
