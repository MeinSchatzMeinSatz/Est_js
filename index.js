// 1. 함수에서 typeof 사용
// 매개변수의 타입을 반환하는 getType 함수를 작성하시오.

function getType(param) {
    return typeof param;
}

console.log(getType("Hello"));
console.log(getType(123));
console.log(getType("123"));
console.log(getType(true));

// 2. 함수에서 isNaN 사용
// 값이 NaN이면 true를 반환하는 isValueNaN 함수를 작성하시오.

function isValueNaN(param) {
    if (isNaN(param)) {
        return true;
    } else {
        return false;
    }
}

console.log(isValueNaN(123));
console.log(isValueNaN("Hello"));

// 3. 함수에서 arguments 객체 사용
// 모든 인수의 곱을 반환하는 multiplyAll 함수를 작성하시오.

function multiplyAll(...args) {
    return args.reduce((acc, cur) => acc * cur, 1);
}
// "arguments" 는 배열이 아니기 때문에(유사배열객체) 바로 reduce()를 쓸 수 없다.
// "...args"는 배열이므로 reduce()를 사용할 수 있다.
// 요약 : 나머지 매개변수(...args)는 진짜 배열이고, argument는 유사 배열 객체다.

console.log(multiplyAll(1, 2, 3, 5));

// 4. 함수에서 재귀 사용.
function factorial(num) {
    if (num === 1 || num === 0) {
        num = 0;
    }

    return num * factorial(num - 1);
}

console.log(factorial(3));
