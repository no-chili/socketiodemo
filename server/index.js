const express = require("express");
const { createServer } = require("http");
const {Server} = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io =new Server(httpServer,{ cors:{origin:'*'}});

io.on("connection",async (socket) => {
  socket.join('room')
  socket.on('message',(value)=>{
    socket.to('room').emit('reply',value)
  })
});

httpServer.listen(5000);
