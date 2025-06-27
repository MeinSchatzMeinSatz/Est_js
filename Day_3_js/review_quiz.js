//review 1
//num -> -13이 숫자가 10 이상인지 판별하기

const num1 = -13;
let result = Math.abs(num1) >= 10 ? "10이상이다." : "10미만이다.";
console.log(result);

//review 2
//숫자를 반올림해서 짝수/홀수 구분하여 찍기

const num2 = 4.6;
result = Math.round(num2) % 2 === 0 ? "even" : "odd";
console.log(result);

//review 3
//난수를 발생(1~100사이의 수)시켜서 50이상인지, 미만인지 구분항려 찍기.

const randomNumber = Math.ceil(Math.random() * 100);
result = randomNumber < 50 ? "50 미만 입니다." : "50 이상입니다.";
console.log(randomNumber);
console.log(result);

//review 4
//숫자를 3제곱한 수를 구하시오.

const num3 = 2;
result = num3 ** 3;
console.log(result);
result = Math.pow(num3, 3);
console.log(result);

// 숫자데이터로 바꾸기
const str = "5.45";
result = parseInt(str);
console.log(result);
result = Number(str);
console.log(result);
result = parseFloat(str);
console.log(result);
// 숫자인 값을 검사
console.log(parseInt("50px"));
// 더 엄격히 검사
console.log(Number("50px"));

console.log(isNaN("hello"));
console.log(isNaN(333));
console.log(isNaN(str));

// review 5)
// 숫자가 3개, 가장 큰 값과 가장 작은 값을 구하시오.

const a = 3,
    b = 10,
    c = 5;
console.log(`가장 큰 수는 ${Math.max(a, b, c)}`);
console.log(`가장 작은 수는 ${Math.min(a, b, c)}`);

// review 6
const arr = ["rock", "sissor", "paper"];
console.log(arr.length);
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));

// review 7
// sum이라는 함수를 만드시오( 숫자 2 개를 받아서 더한 값을 출력하는 기계)
// Syntax
// function 함수이름 (파라미터, 파라미터 ...) { 실행문 }
// 이를 함수 선언식이라고 한다.

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 3));
