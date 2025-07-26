// 만약에 입력한 값이 3 이라면, '로또당첨' 아니라면 '꽝'
let userNumber = 7;

if (userNumber === 7) {
    // 참이면 실행할 구문
    console.log("로또 당첨");
} else {
    // 거짓이면 실행
    console.log("꽝");
}

// 만약에 number가 짝수라면, '짝수', 홀수라면 '홀수'를 출력하고 싶다.
// 조건식 number % 2 === 0
// 조건식이란, 질문이다.
let number = 5;

const isEven = number % 2 === 0;

if (isEven) {
    console.log("짝수");
} else {
    console.log("홀수");
}
