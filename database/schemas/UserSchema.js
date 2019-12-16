const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = UserSchema;
