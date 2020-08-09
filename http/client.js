const http = require("http");

const options = {
  // hostname: "localhost",
  port: 8000,
  path: "/test",
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf8");
  res.on("data", (chunk) => {
    console.log(`响应主体: ${chunk}`);
  });
  res.on("end", () => {
    console.log("响应中已无数据");
  });
});

req.on("error", (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});

// 将数据写入请求主体。
req.write("hello world");
req.end();
