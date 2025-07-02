// 객체타입
// Array.method

const fruits = ["apple", "mango", "banana"];

// mango -> cherry
// fruits[1] = "cherry";
// console.log(fruits);

// 추가
fruits.unshift("watermelon", "lemon");
fruits.push("Grape");
console.log(fruits);

// 삭제 shift, pop
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

// lemon, apple, mango, banana

const newFruits = fruits.slice(1, 2);
console.log(newFruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const newArr = arr1.concat(arr2);
const newArr = [...arr1, ...arr2];
console.log(newArr);

const whosBig = Math.max(...arr1); // spread 연산자(전개)
console.log(whosBig);

// ["Ghost", "World", "Sunny"]
const str = "Ghost,World,Sunny";
const names = [str];
const names2 = str.split(",");

console.log(names);
console.log(names2);

const newStr = names2.join("💕");
console.log(newStr);

const newStr2 = [...str];
console.log(newStr2);

const newStr3 = str.split("");
console.log(newStr3);

console.clear();

const users = "hello world"; // w c 찾기 indexOf
console.log(users.indexOf("w"));

const animals = ["puppy", "cat", "parrot"];
console.log(animals.indexOf("cat"));

// String.prototype.includes("World")
// Array.prototype.includes("cat")

console.log(animals.includes("cat")); // Boolean 값을 반환
console.log(animals.lastIndexOf("cat"));
