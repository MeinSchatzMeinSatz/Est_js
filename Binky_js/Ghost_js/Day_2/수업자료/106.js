// Math 객체

const num = 1234.567;
const num2 = 123.456;

console.log(Math.abs(-5));
console.log(Math.ceil(num));
console.log(Math.ceil(num2));
console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.round(num2));
console.log(Math.trunc(num));

console.log(Math.floor(-2.5));
console.log(Math.trunc(-2.5));

console.log(Math.max(10, 2, 5, 4));
console.log(Math.min(10, 2, 5, 4));

console.log(Math.pow(2, 10)); // 2**3

//ceil() 올림
//floor() 내림
//round() 반올림
//trunc() 소수점이하 버림
// max()
// min()
// pow()

//랜덤수
console.clear();

// 0~1 미만의 숫자의 난수를 출력하는 메서드 : Math.random
// 1~10까지
//
let randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

// 1~3까지 난수구하기
console.log(Math.ceil(Math.random() * 3));

// 0~2까지 난수구하기
console.log(Math.floor(Math.random() * 3));

// rsp 의 변수에, '가위', '바위', '보'를 배열데이터로 넣기
let rsp = ["가위", "바위", "보"];

// 배열의 마지막 수를 구하는 메서드
console.log(rsp[rsp.length - 1]);
console.log(rsp.at(-1));

console.log(parseInt(num)); // 정수만 추출
console.log(parseFloat(num)); // 실수까지 허용

console.log(Number("33.45"));
console.log(parseInt("33.45"));
console.log(parseFloat("33.45"));
