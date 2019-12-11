const mongoose = require("mongoose");
const shortid = require("shortid");
const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  roomId: {
    type: String,
    required: true,
    default: shortid.generate()
  },
  users: [UserSchema]
});

module.exports = RoomSchema;
