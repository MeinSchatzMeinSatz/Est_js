// 여기에 알맞은 타입을 지정하세요
let userName: string = "김개발";
let userAge: number = 25;
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["typescript", 100];

// 타입 추론 이해하기
let value: string = "Hello";
value = "42";

let numbers1: number[] = [1, 2, 3];
numbers.push(4);

let mixed: (number | string | boolean)[] = [1, "two", 3];
mixed.push(true);

// 적절한 반환 타입을 지정하세요
function logMessage(message): void {
  console.log(message);
}

function throwError(message): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("무한 루프");
  }
}

// 변수 순회하기

const fruits: string[] = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
