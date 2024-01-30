const express = require('express');
const path = require('path');

const app = express();  // 객체 생성
const port = 3000;      // 포트번호 미리 생성



// get 방식 요청
app.get('/',(req,res) =>{

    res.send('첫 요청 성공 !');

});

// url 추가하기
let url = '/hello/world'
app.get(url,(req,res) =>{

    res.send('Hello world');

});

app.listen(port,()=>{

    console.log(`Express 가 ${port}번 포트에서 동작 중 ...`);

});

// 내용 바꿀때마다 서버 껐다 켰다 해야함 ...
// nodemon 설치
// npm install -g nodemon
// -g : global (전역객체) / 한번 설치해놓으면 계속 쓸 수 있음.

// 라우터! (Router)
// 라우터는 클라이언트의 요청 경로(path)를 보고
// 이 요청을 처리할 수 있는 곳으로 기능을 전달해주는 역할을 함

// 라우팅이란, 네트워크 용어로 어떤 네트워크 안에서 통신되는 데이터를 보낼 경로를 선택하는 과정
// 간단히, 갈림길에서 어디로 가야할 지 선택하는 과정이다.

// 업그레이드!
// 단순한 문자열 대신에 HTML로 응답하고 싶다면..
// res.sendFile() 메소드를 사용하면 되는데, 이 때 파일의 경로를 path 모듈을 사용해서 지정해야 한다.

// index.html 만들기

// package.json 파일의 scrpit 부분에
// "start":"nodemon 01_30_4/app.js" 넣기(기존 내용 삭제) / 01_30_4는 경로를 직접 지정해줬음.

app.get('/success',(req,res)=>{

    //res.send('문자열 !');

    // __dirname : 현재 경로 위치
    // 에 있는 index.html 파일 열기.
    res.sendFile(path.join(__dirname,'index.html'));

});