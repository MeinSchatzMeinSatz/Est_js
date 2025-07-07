// 문자관련 메서드

const str = "Hello World Hello World";
console.log(str.length);

console.log(str.indexOf("l")); // 앞에서부터 서치
console.log(str.lastIndexOf("l")); // 뒤에서부터 서치

console.log(str.indexOf("Hello", 4)); // 시작점을 지정 가능

console.log(str.includes("o"));
console.log(str.includes("a"));

console.log(str.slice(1, 4));
console.log(str.slice(4));
console.log(str.slice(-5));

// substring은 음수 지정이 안됨.
const email = "ghost@gmail.com";
const username = email.slice(0, 5);
console.log(username);

// email에서 @ 문자열의 위치찾기
console.log(email.indexOf("@"));

// 대소문자 출력
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const str2 = "A.B.C";
const newStr = str2.split(".");

console.log(newStr);

// 이메일 도메인만 추출하기
const domain = email.split("@");
console.log(domain[1]);

// 각 URL의 접근페이지명을 출력하시오.

const url1 = "http://www.ghost.com/about";
const url2 = "http://www.ghost.com/contactUs";

let pageName = url1.split("/");
console.log(pageName.at(-1));
pageName = url2.split("/");
console.log(pageName.at[-1]);

console.clear();
//trim
const str3 = "    Hello     World     ";
console.log(str3.trimStart(), "-"); // 앞쪽 공백 모두 제거
console.log(str3.trimEnd(), "-"); // 뒤쪽 공백 모두 제거
console.log(str3.trim(), "-"); // 양쪽 공백 모두 제거

//repeat
const star = "*";
console.log(star.repeat(5));

//replace(), replaceAll()

console.log(str.replace("World", "Weniv"));
console.log(str.replaceAll("World", "Weniv"));
// -> 원본은 바뀌지 않음

//padStart, padEnd

const number = "7"; //007로 출력하고 싶어
const number2 = "25";
console.log(number.padStart(3, "0")); // 3자리로 나타낼건데, 앞이 비었다면 '0'으로 채워줘
console.log(number2.padStart(3, "0")); // 3자리로 나타낼건데, 앞이 비었다면 '0'으로 채워줘

console.log(number.padEnd(3, "0"));

// 1000원 단위로 금액을 입력받았을떄
const coin = "3200"; // 3200000 삼백이십만원
const cost = "1000";
console.log(coin.padEnd(7, "0"));

// 실제로 계산
// coin 입력, 경비(cost)를 뺀 나머지금액만 지원 받을 수 있을때, 최종 지원금액은 얼마인가요?
console.log(Number(coin) * 1000 - Number(cost) * 1000);
const supportCash = (Number(coin) - Number(cost)) * 1000;
console.log(`${supportCash}원을 지원받을 수 있습니다.`);
