// for... of
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
    console.log(fruit);
}

// for ( 매개변수 of Array) {     }
// 매개 변수는 따로 선언하지 않아도 Ok

const str = "Hello";
console.log(str.length);

// for of 는 이터러블 객체(순회가능한 객체)에 사용.
for (const spell of str) {
    console.log(spell);
}

console.clear();
// while문 => 아래의 조건이 참인 동안에 계속 실행

let i = 4;
while (i < 10) {
    console.log(i);
    i++;
}

console.log("while문이 끝났습니다.");

// do ... while문
// 적어도 한 번은 실행하는 while문이라고 생각하면 쉽다.
let j = 4;
do {
    console.log(j);
    j++;
} while (j < 10);

let k = 1; // 1부터 2씩 증가하는 값을 찍으세요. 1, 3, 5, 7... 10 이상이 되면 멈추기

do {
    if (k === 5) {
        k += 2;
        continue;
    }
    console.log(k);
    k += 2;
} while (k < 10);

while (k < 10) {
    if (k === 5) {
        k += 2;
        continue;
    }
    console.log(k);
    k += 2;
}

// 위의 반복문에서 5는 찍히지 않도록
