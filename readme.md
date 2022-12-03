### server
```
本案例使用express框架
const express = require("express");
const { createServer } = require("http");
const {Server} = require("socket.io");
const app = express();
const httpServer = createServer(app);

初始化
const io =new Server(httpServer,{ cors:{origin:'*'}});

监听新的连接
有进连接就加入到房间中，房间名字可以随意起
socket.join(房间名)

这是默认的收发消息事件
on('message') 对应 客户端的send()

给房间的其他连接发送消息
socket.to(房间名).emit()

触发服务端的自定义reply事件
emit('reply')

监听服务端reply事件
on('reply')
```
### client
```
连接
socket = io("ws://localhost:5000")

发消息
socket.send()

收消息
socket.on('message')

触发自定义事件
socket.emit(事件名)

监听自定义事件
socket.on(事件名)

断开连接
socket.close()

```

### 其他
//给本次链接自己发送消息
socket.emit()
//给某个房间内所有人发消息（包括自己）
io.in(room).emit()
//除本连接自己之外，给某个房间内所有人发消息（不包括自己）
socket.to(room).emit()
//除本连接外，给所有人发消息（不包括自己的整个个站点其他人）
socket.broadcast.emit()
