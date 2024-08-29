const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/miniproject")
  .then(() => {
    console.log("Database Connteced");
  })
  .catch((error) => {
    console.log("error: ", error);
  });

let userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  age: Number,
  password: String,
  posts:[
    {
      type: mongoose.Schema.Types.ObjectId ,
      ref : "post"
    }
  ]
});

module.exports = mongoose.model("user", userSchema);