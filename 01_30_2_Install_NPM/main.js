// NPM은 Node Package Manager의 약자
// node.js로 생성한 패키지/프로젝트를 관리하는 도구

// 터미널에
// npm init -y
// : npm을 쓸 수 있는 초기 환경
// -y : 이걸 안 쓰면 초기 설정값들 일일히 입력해 설정한 후
//      yes 입력을 해야하는데
//      -y 옵션을 통해 입력없이 한번에 처리해줌.

// 그리고 패키지/프로젝트 정보를 가지고 있는 것이
//  npm init -y 명령어를 실행하면서 만들어진 package.json
//      (= Spring의 pom.xml)

// {
//     "name": "jbc_lib",   // 이 프로젝트의 이름
//     "version": "1.0.0",  // 이 프로젝트의 버전
//     "description": "",   // 이 프로젝트에 대한 설명
//     "main": "index.js",  // 실행 시 첫 진입점이 되는 모듈
//     "scripts": {         // 스크립트 명령어를 담고 있음
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [],      // 패키지를 문자열 배열로 설명해줌
//     "author": "",        // 작성자
//     "license": "ISC"     // 패키지에 대한 권한
//     "dependencies"       // 모듈 의존성
//   }
  
// 3rd party module 불러오기
// 터미널에 npm install cowsay
//      > package-lock.json 생기면서
//      package.json 둘 다 cowsay 에 대한 dependencies 가 생김
// package-lock.json : 나중에 이 프로젝트를 배포할 때,
//      이 프로젝트에 대한 필요한 모듈의 버전을 명시해 둔 곳
//      이걸 토대로 다른 컴퓨터에서 이 프로젝트를 실행할 때,
//      이 내용을 바탕으로 npm install 하면
//      관련된 모듈들이 한번에 설치가 될 것

const cowsay = require('cowsay');
console.log(cowsay.say({
    text:'I Love Sogogi',
}));

// 저장 후 터미널에서 node main.js 실행
