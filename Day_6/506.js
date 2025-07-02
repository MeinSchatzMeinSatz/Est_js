const students = [
    { name: "Ghost", score: 85 },
    { name: "Camel", score: 92 },
    { name: "Mui", score: 78 },
];

// students data type -> array
// 배열에 요소추가 메서드 -> array.prototype.push(추가할 값)
// 학생을 추가, name : "Shoopa", score : 20

students.push({ name: "Shoopa", score: 20 });

console.log(typeof students);
console.log(Array.isArray(students)); // array인지 확인하는 정적 메서드

console.log(students);

const arr = [30, 40, 50, 60];
// filter를 이용해서 50점 이상인 값만 배열로 출력
const over50 = arr.filter((x) => x >= 50);

console.log(`50이상인 값은, ${over50}`);

// students중에 score가  80점 이상인 요소를 배열로 추출
const over80 = students.filter((x) => x.score >= 80);
console.log(over80);
const over80Names = over80.map((x) => x.name);
console.log(`80점 이상인 사람은 ${over80Names}`);

const numbers = [11, 2, 23, 1, 55];
// 오름차순으로 정렬
const numbersUp = numbers.sort((a, b) => a - b);
console.log(numbersUp);

// 내림차순으로 정렬
const numbersDown = numbers.sort((a, b) => b - a);
console.log(numbersDown);

// students 성적순으로 정렬
const highScores = [...students]
    .sort((a, b) => b.score - a.score)
    .map((x) => x.name);
console.log("highScores :", highScores);
console.log("AfterSort :", students);

console.clear();

const alphabets = ["banana", "Banana", "apple", "Zebra"];
alphabets.sort((a, b) => a.localeCompare(b));

console.log(alphabets);

alphabets.sort((a, b) => b.localeCompare(a));
console.log(alphabets);
