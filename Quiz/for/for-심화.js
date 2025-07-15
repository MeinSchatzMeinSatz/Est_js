// 1. 중첩 for문으로 구구단(2~4단) 결과를 출력하세요.
for (let i = 2; i <= 4; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 2. for 문에서 1~10 중 5까지만 출력하고 종료하세요(break 사용)
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

// 3. for문에서 1~10 중 홀수만 출력하세요.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

// 4. for...of 문으로 2차원 배열의 모든 값을 한 줄씩 출력하세요.
const arr = [
    [1, 2],
    [3, 4],
];
for (let item of arr) {
    for (let i of item) {
        console.log(i);
    }
}

// 5. for... in 문으로 객체 배열의 모든 key와 value를 출력하세요.
const users = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 21 },
];
for (let key in users) {
    console.log(users[key]);
}

// 6. forEach로 객체 배열에서 나이가 21 이상인 이름만 출력하세요.
users.forEach((item) => {
    if (item.age >= 21) {
        console.log(item.name);
    }
});

// 7. for...of문으로 Map의 모든 key와 value를 출력하세요.
const m = new Map([
    ["a", 1],
    ["b", 2],
]);

for (let [key, value] of m) {
    console.log(key, value);
}

// 8. for... of문으로 Map의 모든 key와 value를 출력하세요.
const m2 = new Map([
    ["a", 1],
    ["b", 2],
]);

for (let [key, value] of m2) {
    console.log(key, value);
}

// 9. forEach로 2차원 배열의 모든 값을 한 줄씩 출력하세요.
const arr2 = [
    [1, 2],
    [3, 4],
];

arr2.forEach((item) => {
    item.forEach((i) => {
        console.log(i);
    });
});

// for... in 문으로 객체의 동적 속성(Key가 'a'로 시작)만 출력하세요.
const obj = { apple: 1, banana: 1, apricot: 3 };
for (let item in obj) {
    if (item[0] === "a") {
        console.log(item, obj[item]);
    }
}
