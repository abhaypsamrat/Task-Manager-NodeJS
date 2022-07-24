const Mongoose = require("mongoose");

const TaskSchema = new Mongoose.Schema({
  name: {
    type: String,
    require: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 charactres"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Mongoose.model("Task", TaskSchema);
