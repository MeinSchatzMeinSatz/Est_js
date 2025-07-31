// 1. 소수점 이하 반올림(Math.round)
const num = 3.7;

console.log(Math.round(num));

// 2. 소수점 이하 내림(Math.floor)

console.log(Math.floor(num));

// 3. 소수점 이상 올림(Math.ceil)
const num2 = 3.141592;

// 4. 소수점 자리수 제한(toFixed)
console.log(num2.toFixed(2));

// 5. 문자열을 정수로 변환(parseInt)
const str = "42px";

console.log(parseInt(str));

// 6. 문자열을 실수로 변환(parseFloat)
const str2 = "3.14m";

console.log(parseFloat(str2));

// 7. 최대값 / 최소값 구하기(Math.max / Math.min)
console.log(Math.max(1, 7, 3));
console.log(Math.min(1, 7, 3));

// 8. 난수(0이상 1 미만) 생성(Math.random)
console.log(Math.random());

// 9. 절대값 구하기(Math.abs)
const num3 = -10;

console.log(Math.abs(num3));

// 10. 거듭제곱 구하기(Math.pow)
console.log(Math.pow(2, 3));

// 11. 제곱근 구하기(Math.sqrt)
console.log(Math.sqrt(16));

// 12. 숫자인지 확인(isNaN, Number.isNaN)
const str3 = "abc";

console.log(isNaN(str3));
console.log(Number.isNaN(str3));
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));

// 13. 유한수 / 정수 판별(isFinite, Number.isInteger)
// 10, 3,14
// 유한수인지 판별(isFinite)
console.log(isFinite(10));
console.log(isFinite(3.14));

// 정수인지 판별(Number.isInteger)
console.log(Number.isInteger(10));
console.log(Number.isInteger(3.14));

// 숫자를 문자열로 변환(toString) => num4.toString()
const num4 = 255;
console.log(num4.toString());

// 부호 판별(Math.sign)
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(7));
