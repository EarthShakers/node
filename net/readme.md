# net
net 是node.js网络模块的核心对象
net 用于创建基于流的 TCP 或 IPC 的服务器（net.createServer()）与客户端（net.createConnection()）
## net对象的属性和方法

  1. `Server`: [Function: Server], Server类，此类用于创建 TCP 或 IPC 服务器。

  2. `Socket`: [Function: Socket], 此类是 TCP 套接字或流式 IPC 端点的抽象，它也是一个EventEmitter。
      Stream: [Function: Socket] 和 Socket类相同

  3. `connect`: [Function: connect],
      createConnection: [Function: connect],
    net.connect()和net.createConnection()相同，用于创建客户端socket对象，返回值相当于new net.Socket()

  4.  `createServer`: [Function: createServer],
    net.createServer()创建一个新的 TCP 或 IPC 服务器。返回值相当于new net.Socket()

  5.  `isIP`: [Function: isIP],  
      测试输入是否是 IP 地址。无效的字符串则返回 0，IPv4 地址则返回 4，IPv6 的地址则返回 6。

       `isIPv4`: [Function: isIPv4], 

       测试是否IPV4地址 返回boolean

       `isIPv6`: [Function: isIPv6],
       测试是否IPV6地址 返回boolean
## net.Server类
### 事件
1. `close`事件 

    当 server 关闭的时候触发。 如果有连接存在，直到所有的连接结束才会触发这个事件。

2. `connection`事件 

    当一个新的连接建立的时候触发。 socket 是一个 net.Socket 实例。
        ```
        server.on('connection',(socket)=>{
          ......
        })
        ```

3. `error` 事件 

    当错误出现的时候触发

4. `listening` 事件 

    当调用 server.listen() 绑定服务器之后触发。

### 方法
1. `server.address()`

    返回服务器地址，{ port: 12346, family: 'IPv4', address: '127.0.0.1' }。
2. `server.getConnections(callback)`

    异步获取服务器的当前并发连接数。当 socket 被传递给子进程时工作。回调函数的两个参数是 err 和 count。
3. `server.listen()`
      ```
      server.listen(
        {
          host: "localhost",
          port: 80,
          exclusive: true,
        },
        () => {
          console.log("打开服务器", server.address());
        }
      )
      ```
### 属性
1. `server.listening`
    
    返回Server是否正在监听连接

2. `server.maxConnections`

    设置该属性使得当 server 连接数过多时拒绝连接。一旦将一个 socket 发送给 child_process.fork() 生成的子进程，就不推荐使用该选项。




