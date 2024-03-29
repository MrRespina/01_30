// JS 파일 하나 = 하나의 모듈
// Node.js가 모듈을 로드할 때, 한 가지 해주는 작업이 있음.
// 'Module Wrapper Function' 이라는 작업인데,
//      모듈 내의 전체 코드를 감싸주는 작업

// (function (exports, require, module, __filename, __dirname){
//  모듈 코드
// });
// 의 형태

// 파라미터가 5개나 있는데, 모듈을 로드할 때 이런 함수로 모듈의 전체 코드를 감싸주게 됨.
// 예를 들어
// function add(a,b){
//      return a+b;
// }
// exports.add = add;
// 이런 코드를 ...

// (function (exports, require, module, __filename, __dirname){
//      function add(a,b){
//          return a+b;
//      }
//      exports.add = add;
// });
// 의 형태로 감싸주는 것

// 내부 속성들 확인하기
// console.dir은 특정 객체의 내부 속성을 출력해주는 함수
// console.log('exports---------------------------->');
// console.dir(exports);
// console.log('require---------------------------->');
// console.dir(require);
// console.log('module---------------------------->');
// console.dir(module);
// console.log('__filename---------------------------->');
// console.dir(__filename);
// console.log('__dirname---------------------------->');
// console.dir(__dirname);

// exports 객체에는 아무 프로퍼티(속성) 도 들어있지 않음.
// module 객체에는 다양한 프로퍼티가 존재
// module 객체 안을 잘 보면 exports라는 프로퍼티가 있고,
// 그 프로퍼티가 빈 객체를 하나 가지고 있는데,
// 이 두 객체는 '동일한' 객체
// 모듈 내부의 내용을 외부로 공개하기 위해 사용했던
// exports나 module.exports는 이 객체에 접근하기 위함.

// add 함수를 plus 라는 이름으로 공개
function add(a,b){
    return a+b;
}
exports.plos = add;

console.log('exports---------------------------->');
console.dir(exports);
console.log('require---------------------------->');
console.dir(require);
console.log('module---------------------------->');
console.dir(module);
console.log('__filename---------------------------->');
console.dir(__filename);
console.log('__dirname---------------------------->');
console.dir(__dirname);


// exports 객체에 plus라는 프로퍼티가 추가되었고,
//  그 값이 add 함수인것이 확인됨
// module 객체의 exports 프로퍼티가 가리키는 객체도
//  동일한 객체라고 했으니 당연히 똑같이 나옴
// 바로 이 객체가 다른 모듈에서 require함수로
//  이 모듈을 로드할 때 리턴되는 객체 !!
// 예를 들어서 main.js에서
//  const m = require('./4_math_tools.js'); 로 로드하면,
//  require 함수는 'exports 객체'
//      (= module 객체의 exports 프로퍼티가 가리키는 객체)
//  를 리턴하게 됨

// 그럼 그냥 exports = 객체로 객체 하나를 공개하면 되지 않나요 ?
// exports객체와 module객체의 exports 속성이 가리키는 객체는 
//      분명 동일한 객체가 맞음
// require 함수는 moudle 객체의 exports가 가리키는 객체를 리턴하기 때문에
// exports 객체를 아예 새로 설정해버리게 되면
//  더이상 원래의 객체에 접근할 수 없게 됨

// 결론
// exports 키워드로는 exports.속성= 값 형태로만
//  객체의 속성만 추가하는 방법으로 사용이 가능
// 대신 module.exports를 사용하면 
//  module.exports = 객체의 형식뿐만 아니라
//  module.exports.속성 = 값의 형태도 사용이 가능