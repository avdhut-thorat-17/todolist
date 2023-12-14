const Todo = require("../models/Todo");

const router = require("express").Router();

// routes will be from here
// routes/todo.js

router.get("/", async (req, res) => {
    const allTodo = await Todo.find();
    const data = {
      todo: allTodo,
      cards: [
        {
          img: "/images/9da6rnlxgxq8fv8degu4.webp",
          link: "https://leetcode.com/",
          title: "Leetcode",
        },
        {
          img: "/images/github.jpg",
          link: "https://github.com/",
          title: "GitHub",
        },
        {
          img: "/images/download.png",
          link: "https://linkedin.com/",
          title: "LinkedIn",
        },
      ],
    };
    res.render("index",{data,todo : allTodo});
  });
  

module.exports = router;
