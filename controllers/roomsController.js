const RoomModel = require("../database/models/RoomModel");

const create = async (req, res) => {
  const { username } = req.body;
  // create room
  const room = await RoomModel.create({});
  // add user to room
  room.users.push({ username });
  await room.save();
  // redirect to room
  res.redirect(`/${room.roomId}`);
};

const show = async (req, res) => {
  const { id: roomId } = req.params;
  const room = await RoomModel.findOne({ roomId });
  console.log(room);
  res.render("rooms/show", { room });
};

module.exports = {
  create,
  show
};
