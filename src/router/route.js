const express = require("express");
const router = new express.Router();
const Post = require("../models/model");

router.get("/", (req, res) => {
  res.json("hello world");
});

router.post("/posts", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    console.log(req.body);
    const result = await newPost.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
