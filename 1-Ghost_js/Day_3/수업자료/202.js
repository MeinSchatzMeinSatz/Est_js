const str = "I like an apple pie";

// 1. apple이 들어있는지 판별
console.log(str.includes("apple"));

// 2. charAt 4 번째 인덱스에 있는 값 추출하기 charAt(4)
console.log(str.charAt(3));

// 3. 첫번쨰 나오는 p의 인덱스값 추출하기
console.log(str.charAt(0));
console.log(str.indexOf("p"));

// 4. 마지막에 나오는 p의 인덱스값 추출하기
console.log(str.charAt(str.length - 1));
console.log(str.lastIndexOf("p"));

// 5. 공백을 기준으로 문자열을 나눠서 배열로 변경하기
console.log(str.split(" "));

// 6. slice를 이용해서, apple만 추출하기
console.log(str.slice(10, 15));

// 7. 문자열을 모두 대문자로 바꾸기
console.log(str.toUpperCase());

// 8. 문자열을 모두 소문자로 바꾸기
console.log(str.toLowerCase());

const str2 = "  Hello World  ";
// 9. 앞뒤의 공백을 모두 제거하기
console.log(str2.trim());

// 10. World를 찾아서 "Ghost"로 바꾸기
console.log(str2.replace("World", "Ghost"));

// 11. split을 이용해서 'Hello'만 추출하고, 3번 반복해서 출력하기 "HelloHelloHello"
console.log(str2.split(" ")[2].repeat(3));

// 12. 모든 'o' 알파벳을 찾아서 "-"로 변경하기
console.log(str2.replaceAll("o", "e"));

const num1 = "7";
// 13. 007로 표기하기(3자리로)
console.log(num1.padStart(3, "0"));

const a = "hello";
const b = "world";
// 14. 두 문자열을 붙여서 변수 c에 저장후 출력하기
const c = a + b; // a.concat(b)
console.log(c);
