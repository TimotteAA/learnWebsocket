const ws = require("ws");

// 访问地址：ws://localhost:8000
const server = new ws.Server({ port: 8000 });

server.on("open", () => {});

server.on("close", () => {});

server.on("error", () => {});

// 第一个参数是客户端的ws
server.on("connection", (ws) => {
  console.log("连接到了websocket");

  //   转发ws的事件
  ws.on("message", (message) => {
    console.log(message.toString());

    server.clients.forEach((client) => {
      client.send(message);
    });
  });
});
