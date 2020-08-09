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



## net.Socket类
`net.Socket` 可以由用户创建并且直接地与服务器进行交互，socket对象可以由net.connect()方法返回，在`serever`的`connectiion`事件中会自动传入`socket`参数
  ```
  1.  const client = net.connect()
  2. net.createServer((client)=>{
    console.log(client)
  })
  ```
### 事件
1. `close`事件

    一旦 socket 完全关闭就发出该事件。参数 had_error 是 boolean 类型，表明 socket 被关闭是否取决于传输错误。
2. `connect`事件

    当一个 socket 连接成功建立的时候触发该事件。 查看 net.createConnection()。

3. `data`事件

    当接收到数据的时触发该事件。data 参数是一个 Buffer 或 String。数据编码由 socket.setEncoding() 设置。

4.  `drain` 事件

    当写入缓冲区变为空时触发。可以用来做上传节流。也可以查看：socket.write() 的返回值。

5. `error`事件

    当错误发生时触发。'close' 事件也会紧接着该事件被触发。
    
6. `lookup`事件

    在找到主机之后创建连接之前触发。不可用于 Unix socket。

7. `ready`事件

   套接字准备好使用时触发。'connect' 后立即触发。

8. `timeout`事件

    当 socket 超时的时候触发。该事件只是用来通知 socket 已经闲置。用户必须手动关闭。

### 方法
1. `socket.connect()`

    在给定的套接字上启动一个连接。

2. `socket.destory()`

    销毁流并关闭连接

3. `socket.end()`

    半关闭 socket。 例如发送一个 FIN 包。 服务端仍可以发送数据,如果指定了 data，则相当于调用 socket.write(data, encoding) 之后再调用 socket.end()。

4. `socket.pause()`

    暂停读写数据。也就是说，'data' 事件将不会再被触发。可以用于上传节流。

5. `socket.resume()`

    在调用 socket.pause() 之后恢复读取数据。

6. `socket.setTimeout()`

    当 socket 在 timeout 毫秒不活动之后将其设置为超时状态。默认 net.Socket 没有超时。

7. `socket.write()`

    在 socket 上发送数据。第二个参数指定了字符串的编码，默认是 UTF8 编码。

8. `socket.address()`

    操作系统返回绑定的地址，协议族名和服务器端口。返回的对象有 3 个属性，比如{ port: 12346, family: 'IPv4', address: '127.0.0.1' }。

9. `socket.setKeepAlive(enable:boolean,initialDelay:number)`

    启用/禁用长连接功能，initialDelay（毫秒）用来设置接收到最后一个数据包和发送第一个长连接探针之间的延迟

