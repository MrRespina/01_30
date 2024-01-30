// 만들어둔 모듈을 가져와서 사용하는 것을 로드(Load) 라고 함.
// require('./2_math_tools.js');

// require는 모듈을 로드해주는 함수
// 그 파라미터로 2_math_tools.js 모듈의 상대 경로를 적음.
// 그리고 이 require함수는 모듈을 로드해서 객체 하나를 리턴하는 성질이 있음.
// 경로에서 js 확장자는 생략 가능.


// let m = require('./2_math_tools.js');
// console.log(m.add(1,2));

// 실행시 에러 > 
// 2_math_tools의 add() 함수를 외부로 공개해주지 않았기 때문.

// 공개한 것들 모두 불러오기
// let 대신에 const(상수화)를 시켜서
// 나중에 이 변수를 다른 의도로 재사용하는 것을 방지.

const m = require('./2_math_tools');

console.log(m.PI);
console.log(m.add(2,4));
console.log(m.sub(4,2));
console.log(m.div(6,2));
console.log(m.mul(3,4));

// exports 했던 것을 하나의 객체로 만들고 그것을 공개하는 방법
const calculator = require('./2_math_tools');
console.log('----------------------');
console.log(calculator.PI);
console.log(calculator.mul(3,4));