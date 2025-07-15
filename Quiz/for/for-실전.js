// 1. for문으로 배열의 합계를 구하세요.
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += i;
}
console.log(sum);

// 2. for... of 문으로 배열의 최댓값을 구하세요.
const arr2 = [7, 2, 9, 4];
for (let i of arr2) {
    if (i === Math.max(...arr2)) {
        console.log(i);
    }
}

// 3. forEach로 배열에서 짝수만 출력하세요.
const arr3 = [1, 2, 3, 4, 5, 6];
arr3.forEach((item) => {
    if (!(item % 2)) {
        console.log(item);
    }
});

// 4. for... in 문으로 객체의 key와 value를 "key:value" 형태로 출력하세요.
const obj = { a: 10, b: 20 };
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

// 5. for 문으로 1~10 중 3의 배수만 배열에 담아 출력하세요.
let forArr = [];

for (let i = 1; i <= 10; i++) {
    if (!(i % 3)) {
        forArr.push(i);
    }
}
console.log(forArr);

// 6. for...of 문으로 2차원 배열의 모든 값을 한 줄씩 출력하세요. 두 개 겹쳐도 되네?!
const arr4 = [
    [1, 2],
    [3, 4],
];
for (let item of arr4) {
    for (let i of item) {
        console.log(i);
    }
}

// 7. forEach로 문자열 배열을 모두 소문자로 변환해 새 배열로 만드세요.
const arr5 = ["A", "B", "C"];
const newArr5 = [];

arr5.forEach((item) => {
    newArr5.push(item.toLowerCase());
});
console.log(newArr5);

// 8. for... in 문으로 객체에서 값이 10 이상인 key만 배열로 만드세요.
const obj2 = { a: 5, b: 15, c: 20 };
const newObj = [];
for (let key in obj2) {
    if (obj2[key] > 10) {
        newObj.push(key);
    }
}

console.log(newObj);

// 9. for 문으로 1~5의 곱(팩토리얼을 구하세요.
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log(factorial);

// 10. forEach로 배열의 각 값을 제곱한 새 배열을 만드세요.
const arr6 = [2, 3, 4];
const newArr6 = [];
arr6.forEach((item) => {
    newArr6.push(item ** 2);
});
console.log(newArr6);
