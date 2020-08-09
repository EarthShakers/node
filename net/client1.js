const net = require("net");
const client = net.connect(80, () => {
  console.log("客户端已链接");
});
