const net = require("net");
const server = net
  .createServer((socket) => {
    socket.write("hello client!!!!");
  })
  .on("error", (err) => {
    // 处理错误
    throw err;
  });

// 获取任意未使用的端口。

server.listen(
  {
    host: "localhost",
    port: 80,
    exclusive: true,
  },
  () => {
    console.log("打开服务器", server.address());
  }
);

server.close(() => {
  console.log("服务器已关闭");
});

server.on("close", () => {
  console.log("服务器关闭啦啦啦啦");
});

server.getConnections((err, count) => {
  console.log(err, count);
});
