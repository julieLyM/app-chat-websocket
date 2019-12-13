const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  console.log("youhou");
  socket.on("msg", data => {
    socket.broadcast.emit("message", "message recu");
    console.log(data);
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Listening on port ${port}`));
