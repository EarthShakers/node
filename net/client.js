const net = require("net");
const client = net.createConnection({ port: 80 }, () => {
  // 'connect' 监听器
  console.log("已连接到服务器");
});

// client.on("lookup", (err, address, family, host) => {
//   console.log(err, address, family, host); //null 127.0.0.1 4 localhost
// });

client.on("data", (data) => {
  console.log(data.toString());
  const {
    bufferSize,
    remoteAddress,
    remoteFamily,
    remotePort,
    localAddress,
    localPort,
    bytesRead,
    bytesWritten,
  } = client;
  console.log(
    bufferSize,
    remoteAddress,
    remoteFamily,
    remotePort,
    localAddress,
    localPort,
    bytesRead,
    bytesWritten
  );
  client.destroy();
});

client.on("timeout", () => {
  console.log("socket 闲置超时");
  client.end();
});
client.on("end", () => {
  console.log("已从服务器断开");
});

// client.on("ready", () => {
//   console.log(client.localAddress, ">>>>>>>>>>>>");
//   console.log(client.remoteAddress, "<<<<<<<<<<<");
// });

// client.setKeepAlive(true, 3000); //长连接
