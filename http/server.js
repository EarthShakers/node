const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello client");
  res.end();
});

server.listen(8000);
