// function

console.log(sum(3, 4));
// console.log(evenCheck(3));

// 선언적함수, 함수선언식
function sum(a, b) {
    return a + b;
}

sum(3, 4);

// 함수표현식 - 변수에다가 함수를 할당하는 방식
const evenCheck = function (number) {
    return number % 2 ? "홀수" : "짝수";
};

// 화살표함수 - 정말정말 너무너무 많이 쓴데
const sum2 = (a, b) => {
    return a + b;
};

// function getRandomHex() {
//     return Math.floor(Math.random() * 256)
//         .toString(16)
//         .padStart(2, "0");
// }

const newRandomValue = (a) => {
    return Math.floor(Math.random() * 256);
};

const newRandomValue2 = function (number) {
    return Math.floor(Math.random() * 256);
};

console.log(newRandomValue());
console.log(newRandomValue2());
