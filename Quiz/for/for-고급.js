// 1. for문으로 1~100 중 3의 배수이면서 5의 배수인 수만 출력하세요.
for (let i = 1; i <= 100; i++) {
    if (!(i % 3)) {
        if (!(i % 5)) {
            console.log(i);
        }
    }
}

// 2. for... of문으로 중첩 배열에서 모든 숫자를 한 줄씩 출력하세요.
const arr = [[1, 2], [3, 4, 5], [6]];
for (let item of arr) {
    for (let i of item) {
        console.log(i);
    }
}

// 3. forEach로 객체 배열에서 age가 20 이상인 사람의 이름만 새 배열로 만드세요.
const users = [
    { name: "Ghost", age: 19 },
    { name: "Camel", age: 22 },
];

users.forEach((item) => {
    if (item.age >= 20) {
        console.log(item);
    }
});

// 4. for...in문으로 객체의 key를 대문자로 변환해 새 객체를 만드시오.
const obj1 = { a: 1, b: 2 };
const newObj1 = {};
for (let item in obj1) {
    newObj1[item.toUpperCase()] = obj1[item];
}

console.log(newObj1);

// 5. for문과 break로 1~100 중 50보다 큰 첫 번째 짝수를 출력하고 종료하세요.
for (let i = 1; i <= 100; i++) {
    if (i > 50 && !(i % 2)) {
        console.log(i);
        break;
    }
}

// 6. forEach로 배열의 중복값을 제거한 새 배열을 만드세요.
const arr1 = [1, 2, 2, 3, 3, 3, 4];
const newArr1 = [];

arr1.forEach((item) => {
    if (!newArr1.includes(item)) {
        newArr1.push(item);
    }
});
console.log(newArr1);

// 7. for문으로 배열의 평균을 구하세요.
const arr2 = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
    sum = sum + arr2[i];
    if (i === arr2.length - 1) {
        console.log(sum / arr2.length);
    }
}

// 8. for...of 문으로 문자열 배열을 모두 소문자로 변환해 새 배열로 만드세요.
const arr3 = ["A", "B", "C"];
const newArr3 = [];
for (let item of arr3) {
    newArr3.push(item.toLowerCase());
}
console.log(newArr3);

// 9. forEach로 객체의 Key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
// const obj3 = { a: 1, b: 2 };
// obj3.forEach((item) => {
//     console.log(item);
// });

// 10. for문과 reduce로 배열의 합을 각각 구해 출력하세요.
const arr4 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < arr4.length; i++) {
    sum1 += arr4[i];
}
console.log(sum1);

console.log(arr4.reduce((acc, cur) => acc + cur, 0));
