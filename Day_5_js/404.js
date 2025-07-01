const arr = [1, 2, 3];
arr.push(4);
console.log(arr); //[1, 2, 3, 4]
// 2번째 인덱스의 값을 삭제

arr.splice(2, 1);
console.log(arr);

const fruits = ["apple", "mango", "banana"];
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("mango"));

fruits[1] = "Melon";
fruits.splice(2, 1, "Grape");
console.log(fruits);
console.log(Boolean(-1));
