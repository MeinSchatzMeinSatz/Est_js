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
function addMaker() {}
