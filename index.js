// 사용자로부터 입력받은 휴대폰 전화번호
const tel = "010-1234-5678";

// 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
const regExp = /^\d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel));

//메서드 종류
const target = "Is this all there is?";
const regExp2 = /is/;
const regExp3 = /is/g;
// exec
// 패턴 : is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
console.log(regExp2.exec(target));

// test
console.log(regExp2.test(target));

// match
console.log(target.match(regExp2));
console.log(target.match(regExp3));

// 플래그
console.log("----flag----");
console.log(target.match(/is/));
console.log(target.match(/is/i));
console.log(target.match(/is/g));
console.log(target.match(/is/m));

// 패턴
