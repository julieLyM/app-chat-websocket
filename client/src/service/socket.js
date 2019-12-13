import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://localhost:3001");

export const printMsg = () => {
  socket.on("message", msgTest => console.log(msgTest));
};

export const emitMsg = msg => {
  socket.emit("msg", { test: "yoooo" });
};
