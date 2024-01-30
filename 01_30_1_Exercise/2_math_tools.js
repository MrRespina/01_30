// 모듈(Module) 이란 ?
// 하나의 프로그램을 이루는 하나하나의 조각
// 일반적으로 JS 파일 하나를 말함
//      (라이브러리의 느낌)

// 모듈은 두 가지로 나눠짐.
// 1. 내가 직접 만든 모듈 > 말 그대로 내가 만든 모듈
// 2. 이미 만들어져 있는 모듈 > 은 또 다시 두 가지의 종류로 나뉨
//  1) 외장 모듈
//  개발자들이 만들어놓은 모듈
//  이 외장모듈을 사용하기 위해서는 NPM이라는 것을 사용
//  (Node Package Manager)
//  Java - Maven / Python - pip 처럼...
//  자바스크립트의 개발자들이 유용한 패키지들을 만들어 두었고,
//  그 코드들이 공개되어있는 곳이 NPM임.
//  제 3자가 만든 모듈이라고 해서 서드파티 모듈이라고도 함.

//  2) 내장 모듈
//  Node를 설치하고 나면 기본적으로 제공되는 모듈
//  따로 NPM을 사용하지 않음, 코어 모듈이라고도 함.

// 함수 하나 생성

// function add(a,b){

//     return a + b;

// }

// 다른 공간에서 사용하기 위해서는 이 모듈을 가져와야함

// add 함수를 모듈 외부로 공개하기
// export : 내보내다

// exports.add = add;
// 앞의 add : 모듈 외부로 공개할 이름
// 뒤의 add : 모듈 내부에서의 이름
//      > 모듈 외부에도 add는 이름으로 공개한다는 뜻이 됨.

exports.PI = 3.141592;
exports.add = function add(a,b){return a+b};
exports.sub = function sub(a,b){return a-b};
exports.mul = function mul(a,b){return a*b};
exports.div = function div(a,b){return a/b};

// 객체로 표현하기
let calculator = {

    PI:3.141592,
    add:(a,b) => a+b,
    sub:(a,b) => a-b,
    mul:(a,b) => a*b,
    div:(a,b) => a/b,

}

module.exports = calculator;