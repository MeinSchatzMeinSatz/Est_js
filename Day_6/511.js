// 구조분해할당(Destructuring)

const animals = ["puppy", "cat", "parret", "lion", "tiger", "duck", "goose"];
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = animals; // ...rest 나머지 연산자
console.log(rest);

// animals, numbers를 합친 새로운 배열을 만드세요.
const newArray = [...animals, ...numbers];
const newArray1 = animals.concat(numbers);

console.log(newArray);

function calc(a, b) {
    // const sum = a+b;
    // const div = a/b;
    return [a + b, a / b, a * b];
}

const array = calc(10, 2); // [12, 5]
console.log(array);

const [sum, div, multiply] = calc(15, 3);
console.log(sum, div);

const array2 = ["apple", "mango", "coffee"];

// 변수 - a, b, c

const [x, y, z] = array2;

console.log(x);
console.log(y);
console.log(z);

console.clear();
