// 1. 함수에서 setInterval 사용
// 1초마다 "Hello"를 3번 출력하는 printHello 함수를 작성하시오.

function printHello() {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

// setInterval(printHello, 1000);

// 2. 함수에서 Date 객체 사용
// 현재 연도를 반환하는 getCurrentYear 함수를 작성하시오.
function getCurrentYear() {
    let result = new Date();

    return result.getFullYear();
}

console.log(getCurrentYear());

// 3. 함수에서 Math.random 사용
// 0 이상 1 미만의 난수를 반환하는 getRandom 함수를 작성하시오.

function getRandom() {
    let result = Math.random();

    return result;
}

console.log(getRandom());

// 4. 함수에서 Math.floor 사용
// 0 이상 10 미만의 정수를 반환하는 getRandomInt 함수를 작성하시오.
function getRandomInt() {
    let result = Math.floor(Math.random() * 10);

    return result;
}

console.log(getRandomInt());

// 5. 함수에서 배열의 길이 반환.
function getLength(x) {
    let result = x.length;

    return result;
}

console.log(getLength([1, 2, 3]));

// 6. 함수에서 배열의 마지막 값 반환
// 배열의 마지막 값을 반환하는 getLast 함수를 작성하시오.
function getLast(arr) {
    return arr[arr.length - 1];
}

console.log(getLast([1, 2, 3, 4]));

// 7. 함수에서 배열의 모든 값 출력
// 배열의 모든 값을 한 줄씩 출력하는 printAll 함수를 작성하시오.
function printAll(arr) {
    for (let i; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

console.log(printAll([1, 2, 3, 4]));

// 8. 함수에서 배열의 짝수만 출력
// 배열에서 짝수만 출력하는 printEvens 함수를 작성하시오.
function printEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2)) {
            console.log(arr[i]);
        }
    }
}

console.log(printEvens([1, 2, 3, 4, 5]));

// 9. 함수에서 배열의 합이 짝수인지 반환
// 배열의 합이 짝수면 true, 아니면 false를 반환하는 isSumEven 함수를 작성하시오.

function isSumEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if (sum % 2) {
        return false;
    } else {
        return true;
    }
}

console.log(isSumEven([1, 2, 3, 4, 5]));

// 10. 함수에서 배열의 모든 값을 2배로 반환.
// 배열의 모든 값을 2배로 만든 새 배열을 반환하는 doubleArray 함수를 작성하시오.

function doubleArray(arr) {
    return arr.map((item) => item * 2);
}

console.log(doubleArray([1, 2, 3, 4, 5]));
