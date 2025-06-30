// for문
// for (초기화식; 조건식; 증감식) {
// 반복 실행할 코드
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.clear();
// 초기화식 -> 조건식 -> 코드실행 -> 증감식 -> 조건식 -> 코드실행 ->(...) ->코드실행 -> 증감식 -> 조건식 -> 끝

const users = ["Daniel", "Don", "donald", "Michael", "Juliet"];
for (let i = 0; i < 10; i++) {
    console.log(`Hello, ${users[i]}.`);
}

// 1부터 10까지 더한 합을 구하는 코드
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

// 1부터 20까지 출력
// 1부터 20까지의 수 중에서 짝수만 출력

let even;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// 구구단 출력 (5단)

let dan = 5;

for (let i = 1; i < 10; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
}

for (let i = 2; i <= 9; i++) {
    console.log(`-------${i}단-------`);
    for (j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
