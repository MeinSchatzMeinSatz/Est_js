// 1. 함수 선언문 작성
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

// 2. 함수 표현식 작성
// 두 수를 곱하는 multiply 함수를 함수 표현식으로 작성하시오.
function multi(a, b) {
    return a * b;
}

console.log(multi(3, 4));

// 3. 화살표 함수 작성
// 두 수를 빼는 subtract 함수를 화살표 함수로 작성하시오

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(3, 1));

// 4. 기본값 매개변수
// 매개변수 b의 기본값이 10인 add 함수를 작성하시오.

function add2(a, b = 10) {
    return a + b;
}

console.log(add2(3));

// 5. return문 사용
// 문자열을 받아 "Hello, 이름!"을 반환하는 greet 함수를 작성하시오.

function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("Bingky"));

// 6. 함수 호출
// sum 함수를 정의하고, 3과 7을 인수로 전달하여 호출하는 코드를 작성하시오.

// const sum = function () {

// }

// 7. 익명 함수 사용
// setTimeout 을 사용해 1 초 후에 "Hello"를 출력하는 코드를 작성하시오.
setTimeout(() => {
    console.log("Hello");
}, 1000);

// 8. 콜백 함수 사용
// 함수 printTwice를 정의하고, 콜백 함수를 받아 2번 실행하는 코드를 작성하시오.
function printTwice(a, callback) {}

// 9. 함수에서 배열 반환
// 두 수를 받아 [a, b] 배열을 반환하는 makeArray 함수를 작성하시오.
const makeArray = (a, b) => {
    return [a, b];
};

console.log(makeArray(1, 3));

// 10. 함수에서 객체 반환
// 이름과 나이를 받아 객체{name, age}를 반환하는 makePerson 함수를 작성하시오.
function makePerson(name, age) {
    return { name: name, age: age };
}

console.log(makePerson("Ghost", 1000));
