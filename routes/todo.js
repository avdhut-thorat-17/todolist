const router = require("express").Router();
const Todo = require("../models/Todo");

// Route to add a new todo
router.post("/add/todo", async (req, res) => {
    const { todo } = req.body;
    // Create a new todo instance
    const newTodo = new Todo({ todo });
    // Save the todo to the database
    newTodo.save().then(() => {
        console.log("Successfully added to MongoDB");
        res.redirect("/");
    }).catch((err) => {
        console.error("Error adding todo to MongoDB:", err);
        res.status(500).json({ success: false, message: "Failed to add todo to MongoDB" });
    });
    
    // console.error("Error adding todo to MongoDB:", err);

    // Handle the error and send a response to the client
    // res.status(500).json({ success: false, message: "Failed to add todo to MongoDB" });
  }
)

router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id }).then(() => {
        console.log("Deleted Todo Successfully");
        res.redirect("/");
    }).catch((err) => {
        console.error("Error deleting todo from MongoDB:", err);
        res.status(500).json({ success: false, message: "Failed to delete todo from MongoDB" });
    });
});

module.exports = router;
