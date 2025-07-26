const animals = ["puppy", "cat", "parrot"];
let result = animals.filter((animals, index) => index === 2);
result = animals.map((animal, index) => index); // Index 매개변수를 이용하기

console.log(result);

// animals의 마지막요소로 Rabbit을 추가하세요. (원본배열을 변경)
animals.push("Rabbit");
console.log(animals);

// slice
// 1~2번째에 있는 요소만 가져오기
const getAnimals = animals.slice(1, 3); // 원본 배열을 변경시키지 않음

console.log(getAnimals);

// splice
animals.splice(1, 2, "Elephant"); // 원본 배열을 변경시킴
console.log("changed Animals :", animals);

animals.splice(1, 0, "cat"); // 지우지 않고 배열의 중간에 요소를 추가
console.log(animals);

// reverse()는 배열요소를 거꾸로 변경(순번) -> 원본을 변경
const arr = ["apple", "mango", "banana"];
arr.reverse();
console.log(arr);
