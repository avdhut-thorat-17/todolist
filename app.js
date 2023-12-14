// ---------------Require the modules----------------------
// create a server
const express = require("express");
// for connecting to db require mongoose package
const mongoose = require("mongoose");
// ----------------------------------------------

// app initialization with express module
const app = express();

// connection to mongodb                mongoose.connect method is necessary to establish a connection to the MongoDB database specified in the connection URI.
mongoose.connect("mongodb://localhost/todo_express", {
  useNewUrlParser: true, //to avoid deprecation warnings from the MongoDB driver related to how it parses connection strings
  useUnifiedTopology: true, //  related to the new Server Discovery and Monitoring engine in the MongoDB driver.
});

// middlewares  -  middleware is a piece of software that acts as bridge or connector between different components. middleware functions play a crucial role in handling and processing HTTP requests and responses.
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public")); // the static files like images, css and js can be parse to user so they are statically parse

app.set("view engine", "ejs"); // view engine is used to configure application settings.
// This line informs Express that you will be using EJS as the templating engine for rendering views.
//When rendering views, you can then simply provide the name of the view file 
//(without the file extension), and Express will automatically look for a file with that 
//name and the specified view engine extension (in this case, '.ejs').


// app.get("/",(req,res)=>{
//     res.send("Hello");
// })
// since we r using routes to setup routes so no need to specify just use it by requiring
app.use(require("./routes/index"));   // This will go to specified directory and will perform their actions

app.use(require("./routes/todo"))

// server configuration..
app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
