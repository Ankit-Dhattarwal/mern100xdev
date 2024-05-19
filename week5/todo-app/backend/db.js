const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ankitdhattarwal:fIgh5a3P7wq1zY8P@mern-100x.5va3ghu.mongodb.net/todomongo?retryWrites=true&w=majority&appName=mern-100x"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
