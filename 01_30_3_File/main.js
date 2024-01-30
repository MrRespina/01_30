const fs = require('fs')

// 파일 쓰기
// writeFile : 파일이 존재하지 않으면, 파일 생성 후 내용 적어냄.
// 이어쓰기 기능(append) 가 존재하지 않는다.

let data = '파일 시스템 예제';

// console.log('파일 생성 >>>');
// fs.writeFile('text1.txt',data,'UTF-8',function(error){
//     // 에러 발생 시, 에러 호출
//     if(error){
//         throw error;
//     }
//     // 정상적으로 만들어졌으면, 메세지 출력
//     console.log('파일 생성됨!');
// });
// console.log('파일 생성중');

// 소스코드랑 결과 순서가 맞지 않음 ...
// 원래 배웠던 언어들은 생성 > 생성됨 > 생성중 순이어야 함.
// 허나 콘솔의 결과는 생성 > 생성중 > 생성됨이 되었음.
// 이 현상은 Node.js 개발자의 빅픽쳐
// 이렇게 소스코드의 작동 순서가 위에서 아래로 순차적으로 실행되지 않는 이 상황을 비동기(Async)라고 함.
// 순차적인 작동을 보증하지 않겠다라는 뜻.

// 개발자는 왜 이렇게 만들었나 ...?
//  생성할 파일의 크기가 10TB가 넘는 아주 큰 파일이라고 가정
//  컴퓨터가 아무리 빠르더라도 초 단위가 넘게 걸릴텐데 ...
//  그 말인 즉, 파일 생성이 완료되기 전까지는 다음 코드가 실행되지 않는다는 뜻.(순차적이기 때문에)
//  우리는 그걸 '렉' 이라고 부름.

// 이 비동기 방식은 이런 현상을 없애줌.
// 파일을 생성하면서, 동시에 다른 작업도 가능하게 만들어주는 것.

// 이 비동기의 장점은 간단한 작업을 하기 위해서
// 오래 걸리는 작업을 기다릴 필요가 없다.

// fs.unlink('text1.txt',function(error){

//     if(error){
//         throw error;
//     }
//     console.log('파일 삭제 성공');
// });

// 근데 난 렉이 걸려도 순서대로 진행되는게 좋다.
// fs.writeFileSync() <- 
// Sync() > '동기' 라는 의미 / 반대말이니 하는 행동도 반대이다.

// console.log('파일 생성');
// console.log('파일 생성 중');
// fs.writeFileSync('text1.txt',data);     // encoding의 기본 값이 UTF-8 이다.
// console.log('파일 생성 완료')

// 콜백 함수를 넘길 필요도 없고, 순차적으로 잘 작동함.

// Node.js의 최대 장점은 비동기로 작동한다는 점이다.
// 파일 사이즈가 작다,처리할 것이 적음 > 동기 / 사이즈가 크거나,처리할 것이 많음 > 비동기 방식 사용 추천.



// 파일 읽기
// fs.readFile('text1.txt','UTF-8',function(error,data){
//     console.log(data);
// });

// 파일 이어쓰기
fs.appendFile('text1.txt','\n데이터 추가하기!',function(error){
    if(error){
        throw error
    }
    console.log('이어쓰기 완료.')
});