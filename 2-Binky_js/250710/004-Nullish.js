// 널리시 연산자
// 왼쪽 피연산자 값이 null 또는 undefined 일 때만 오른쪽 피연산자의 값을 반환한다.
// => null / undefined 평가!
console.log(null ?? "hello");
console.log(undefined ?? "hello");

// 논리합(OR, ||): 둘 중 하나라도 참이면 참, 왼쪽 연산자가 참이면 더 이상 평가를 진행하지 않음.
console.log("" ?? "hello");
// console..log("" || "논리합(오른쪽")

// nullish -> 0, false, NaN, ""과 같은 falsy한 값도 유효한 값으로 간주!

// 사용자 입력값, API 응답값 등 기본값을 설정할 떄 유용
// => 예외처리
let userName = null ?? "알 수 없는 사용자";
console.log("사용자 :", userName);

// 주의사항!
// 논리합, nullish 같이 사용하기
// 이를 자바스크립트에서는 Error로 처리
// 논리 연산자와 혼합 사용을 허용하지 않습니다.

// 명시적으로 괄호를 요구 => 우선순위를 지정
const a = null;
const b = 5;
const c = 10;
// console.log(a ?? b || c)
console.log((a ?? b) || c); // b || c => 5 || 10
console.log(a ?? (b || c)); // null ?? 5 => 5

// 옵셔널 체이닝(?.)
const user = {
    name: "유진",
    address: {
        country: "대한민국",
        city: "Jeju",
    },
};

const user2 = {
    name: "진호",
};

let user3 = null;

console.log(user.address.country);
console.log(user2.address); // undefined
// console.log(user2.address.country); // undefined에서 country 속성을 찾고 있음

console.log(user2.address?.country);
console.log(user3?.name);

// 대괄호 표기법
// console.log(user2.address?.country)
console.log(user2["address"]?.city);

// nullish + 옵셔널 체이닝
console.log(user2["address"]?.country ?? "출신 도시를 알 수 없습니다.");
const country = user2?.address?.country ?? "주소 정보 없음";
const city = user?.address?.city ?? "주소 정보 없음";
console.log(country);
console.log(city);
