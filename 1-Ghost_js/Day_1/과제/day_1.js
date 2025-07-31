//quiz 1

// let name = "Ghost";
// const age = 1000;

// console.log(name, age);

//quiz 2
// let age = 25;
// age = 30;

// console.log(age);

//quiz 6
// const user = { name: "Bob" };
// user.name = "Tom";

// console.log(user);
// user.age = "1000";
// console.log(user);

// quiz 7
let name = "이채준";
let age = "30";

console.log(`안녕하세요, 저는 ${name}이고 ${age}살입니다.`);

// quiz 10
const fruits = ["apple", "banana"];
fruits[0] = "orange";
console.log(fruits);

// quiz 12
let num1 = 14;
let num2 = 15;
function sum(a, b) {
    return a + b;
}

console.log(`${num1} + ${num2} = ${sum(num1, num2)}`);

console.log(sum(1, 3));

// quiz 13
let a = 6;
let b = 2;

console.log(`${a} * ${b} = ${a * b}`);

// 추가
function multi(x, y) {
    console.log(x * y);
}
function div(x, y) {
    console.log(x / y);
}

console.log(multi(4, 5));
console.log(div(4, 2));
