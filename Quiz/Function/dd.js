// 1. 함수에서 typeof 사용
// 매개변수의 타입을 반환하는 getType 함수를 작성하시오
function getType(x) {
    return typeof x;
}
console.log(getType("123"));

// 2. 함수에서 isNaN 사용
// 값이 NaN이면 true를 반환하는 IsValueNaN 함수를 작성하시오.
function isValueNaN(x) {
    return isNaN(x);
}

console.log(isValueNaN(1));
console.log(isValueNaN("Hello"));

// 3. 함수에서 arguments 객체 사용
// 모든 인수의 곱을 반환하는 multiplyAll 함수를 작성하시오.

// 4. 함수에서 재귀 사용
// n!(팩토리얼)을 반환하는 factorial 함수를 작성하시오.
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

// 5. 함수에서 중첩 함수 사용
// 함수 안에 함수가 있는 outer 함수를 작성하고, inner 함수에서 "Hello"를 출력하게 하시오.
function outer() {
    function inner() {
        return "Hello";
    }
    return inner();
}

console.log(outer());

// 6. 함수에서 클로저 사용
// addMaker 함수를 작성하여 add5 = addMaker(5); add5(3) 실행 시 8이 나오게 하시오.
function addMaker(x) {
    return function add(y) {
        return x + y;
    };
}
const add5 = addMaker(5);
console.log(add5(3));

// 7. 함수에서 즉시 실행 함수 사용
// 즉시 실행 함수로 "Hello"를 출력하는 코드를 작성하시오.
(function () {
    console.log("Hello");
})();

// 8. 함수에서 this 사용
// 객체 obj에 getName 메서드를 추가하여 this.name을 반환하게 하시오.
const obj = {
    name: "Ghost",
    age: 1000,
    getName: function () {
        console.log(`Hello ${this.name}`);
    },
};

obj.getName();

// 9. 함수에서 new 연산자 사용
// 생성자 함수 Person을 만들어 name을 프로퍼티로 저장하게 하시오.
function Person(name) {
    this.name = name;
}
const p = new Person("jane");
console.log(p.name);

// 10. 함수에서 call/apply 사용
// 함수 showName을 obj의 this로 실행하여 "Tom"을 출력하세 하시오.
