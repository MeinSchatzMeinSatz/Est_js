const str = "123";
const num = 255;

// '123'
console.log(1 + "1"); // 11 -> string
console.log(num + "");

// 숫자, 배열, 불리언을 문자열로
console.log(num.toString());
console.log((123).toString());

const arr = ["a", "b", "c"];
console.log(arr.toString());

console.log(true.toString());

//객체만들기
// object - user 변수에 mbti -> infj or bloodType -> B
const user = {
    mbti: "INFJ",
};

// 객체 -> 문자열
console.log(user.toString()); // 객체타입을 문자열로 그대로 반환
console.log(JSON.stringify(user)); //JSON객체를 이용해야 함.

console.log(num.toString(16));

// 랜덤한 RGB값을 구해서 -> 16진수로 변환하시오.

// const r = Math.floor(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// const g = Math.floor(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// const b = Math.floor(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");

// console.log(r + g + b);

// const hexColor = `#${createHexValue()}`;
// console.log(hexColor);

function getRandomHex() {
    return Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
}

function createHexValue() {
    return getRandomHex() + getRandomHex() + getRandomHex();
}

console.log(`#${createHexValue()}`);

// 나의 오답
// function createHexValue(r, g, b) {
//     const r = Math.floor(Math.random() * 256)
//         .toString(16)
//         .padStart(2, "0");
//     const g = Math.floor(Math.random() * 256)
//         .toString(16)
//         .padStart(2, "0");
//     const b = Math.floor(Math.random() * 256)
//         .toString(16)
//         .padStart(2, "0");

//     return r + g + b;
// }

console.clear;

const num2 = 123.456789; // 소수점 2자리까지만 출력하고 싶어
const newNum = num2.toFixed(2); // 대신에 숫자열을 문자열로 변경.

console.log(newNum, typeof newNum, parseFloat(newNum));
