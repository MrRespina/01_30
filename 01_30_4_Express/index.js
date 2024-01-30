// http 모듈은 Node.js 에 내장되어있는 웹 관련 모듈임.
// Spring때와 마찬가지로, 사용자는 요청하고 서버는 응답하는 구조

const http = require('http');

http.createServer((request,response) =>{

    response.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
    response.write('Hello, Server?');
    response.end();

}).listen(3000);

// 터미널에서 node index.js 로 실행