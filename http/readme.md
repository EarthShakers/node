# http
>为了支持所有可能的 HTTP 应用程序，Node.js 的 HTTP API 都是非常底层的。 它仅进行流处理和消息解析。 它将消息解析为消息头和消息主体，但不会解析具体的消息头或消息主体。
## http对象
```
const http = require("http");
console.log(http);

{
  _connectionListener: [Function: connectionListener],
  METHODS: [
    'ACL',         'BIND',       'CHECKOUT',
    'CONNECT',     'COPY',       'DELETE',
    'GET',         'HEAD',       'LINK',
    'LOCK',        'M-SEARCH',   'MERGE',
    'MKACTIVITY',  'MKCALENDAR', 'MKCOL',
    'MOVE',        'NOTIFY',     'OPTIONS',
    'PATCH',       'POST',       'PROPFIND',
    'PROPPATCH',   'PURGE',      'PUT',
    'REBIND',      'REPORT',     'SEARCH',
    'SOURCE',      'SUBSCRIBE',  'TRACE',
    'UNBIND',      'UNLINK',     'UNLOCK',
    'UNSUBSCRIBE'
  ],
  STATUS_CODES: {
    '100': 'Continue',
    '101': 'Switching Protocols',
    '102': 'Processing',
    '103': 'Early Hints',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '207': 'Multi-Status',
    '208': 'Already Reported',
    '226': 'IM Used',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '307': 'Temporary Redirect',
    '308': 'Permanent Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Payload Too Large',
    '414': 'URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': "I'm a Teapot",
    '421': 'Misdirected Request',
    '422': 'Unprocessable Entity',
    '423': 'Locked',
    '424': 'Failed Dependency',
    '425': 'Unordered Collection',
    '426': 'Upgrade Required',
    '428': 'Precondition Required',
    '429': 'Too Many Requests',
    '431': 'Request Header Fields Too Large',
    '451': 'Unavailable For Legal Reasons',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage',
    '508': 'Loop Detected',
    '509': 'Bandwidth Limit Exceeded',
    '510': 'Not Extended',
    '511': 'Network Authentication Required'
  },
  Agent: [Function: Agent] { defaultMaxSockets: Infinity },
  ClientRequest: [Function: ClientRequest],
  IncomingMessage: [Function: IncomingMessage],
  OutgoingMessage: [Function: OutgoingMessage],
  Server: [Function: Server],
  ServerResponse: [Function: ServerResponse],
  createServer: [Function: createServer],
  get: [Function: get],
  request: [Function: request],
  maxHeaderSize: [Getter],
  globalAgent: [Getter/Setter]
}
```
## http.createServer()
该函数接受一个可选的`requestListener`回调函数，返回值是`http.Server`类的实例，http服务器内部会创建`http.ServerResponse`和`http.IncomingMessage`类的实例对象，分别传入`response`和`request`事件
```
const http = require('http')
const server = http.createServer((req:IncomingMessage,res:ServerResponse):Server=>{
    res.write('hello\n');
    res.end();
})
```
## http.request()

