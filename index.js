const app = require("./app");
const http = require("http").createServer(app);
const port = process.env.PORT || 4321;
const io = require("socket.io")(http);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("message", data => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

http.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = http;
