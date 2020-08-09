# net
net 是node.js网络模块的核心对象
net 用于创建基于流的 TCP 或 IPC 的服务器（net.createServer()）与客户端（net.createConnection()）
## net对象的属性和方法

  1. Server: [Function: Server], Server类，此类用于创建 TCP 或 IPC 服务器。

  2. Socket: [Function: Socket], 此类是 TCP 套接字或流式 IPC 端点的抽象，它也是一个EventEmitter。
      Stream: [Function: Socket] 和 Socket类相同

  3. connect: [Function: connect],
      createConnection: [Function: connect],
    net.connect()和net.createConnection()相同，用于创建客户端socket对象，返回值相当于new Socket()

  4.  createServer: [Function: createServer],

  5.  isIP: [Function: isIP],  
      测试输入是否是 IP 地址。无效的字符串则返回 0，IPv4 地址则返回 4，IPv6 的地址则返回 6。
       isIPv4: [Function: isIPv4], 
       测试是否IPV4地址 返回boolean
       isIPv6: [Function: isIPv6],
       测试是否IPV6地址 返回boolean


