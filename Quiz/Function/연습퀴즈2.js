// 1. 함수에서 조건문 사용
// 숫자가 짝수면 true, 아니면 false를 반환하는 isEven 함수를 작성하시오.

function isEven(num) {
    if (num % 2) {
        return false;
    } else {
        return true;
    }
}

console.log(isEven(2));

// 2. 함수에서 반복문 사용
// 1부터 n까지의 합을 반환하는 sumToN 함수를 작성하시오.
function sumToN(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToN(10));

// 3. 함수에서 배열 합계 구하기
// 배열의 모든 값을 더해 반환하는 sumArray 함수를 작성하시오.

let arr = [1, 2, 3, 4, 5];

function sumArray(array) {
    let sumArr = 0;
    for (let i = 0; i < array.length; i++) {
        sumArr += array[i];
    }

    return sumArr;
}

console.log(sumArray(arr));

function sumArray2(array) {
    return arr.reduce((acc, cur) => acc + cur);
}

console.log(sumArray2(arr));

// 4. 함수에서 최대값 찾기
function max(arr) {
    return Math.max(...arr);
}

console.log(max(arr));

// 5. 함수에서 최소값 찾기
function min(arr) {
    return Math.min(...arr);
}

console.log(min(arr));

// 6. 함수에서 문자열 뒤집기
let str = "abcdefghijklmnopqrstuvwxyz";
function reverseStr(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr(str));

// 7. 함수에서 대소문자 변환
// 문자열을 모두 대문자로 변환하는 toUpper 함수와 소문자로 변환하는 toLower 함수를 작성하시오.

let intro =
    "Hello, My Name is Chaejun Lee. Now I'm looking for job as a FrontEnd Developer";

function toUpper(str) {
    return str.toUpperCase();
}
console.log(toUpper(intro));

function toLower(str) {
    return str.toLowerCase();
}
console.log(toLower(intro));

// 8. 함수에서 인수 개수 제한
// 두 수만 더하고, 그 외에는 "두 수만 입력하세요"를 반환하는 add 함수를 작성하시오.

function add3(a, b, ...args) {
    if (arguments.length > 2) {
        console.log("두 수만 입력하세요.");
    }
    return a + b;
}

console.log(add3(1, 2, 3));

// 9. 함수에서 나머지 매개변수 사용
// 모든 인수의 합을 반환하는 sumAll 함수를 작성하시오.

function sumAll(...args) {
    return args.reduce((acc, cur) => acc + cur);
}

console.log(sumAll(1, 3, 5, 7, 9));

// 10. 함수에서 undefined 반환
// 아무 값도 반환하지 않는 logHello 함수를 작성하시오.
