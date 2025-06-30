// every, some 이용하기
let ages = [23, 17, 15, 34, 50, 5];

// Quiz 1. 모두 성인인지 확인하기(성인판단기준 18세 이상) : "모두 성인입니다." 또는 "성인이 아닌사람이 있습니다."
if (ages.every((person) => person < 18)) {
    console.log("모두 성인입니다.");
} else {
    console.log("성인이 아닌 사람이 있습니다.");
}

// Quiz 2. 미취학 아동이 있는지 확인하기(미취학 아동은 6세이하) : "미취학아동이 있습니다.", 또는 "미취학 아동이 없습니다." some 이용

if (ages.some((person) => person <= 6)) {
    console.log("미취학아동이 있습니다.");
} else {
    console.log("미취학 아동이 없습니다.");
}

const scores = [32, 85, 73, 50, 3, 93];
// Quiz 3. scores의 정수를 모두 더해서 총점을 구하세요.
console.log(scores.reduce((acc, cur) => acc + cur));

// Quiz 4. scores의 평균을 구하세요.
console.log(scores.reduce((acc, cur) => acc + cur) / scores.length);

// Quiz 5. scores를 오름차순으로 정렬하세요.
console.log(scores.sort((a, b) => a - b));

// Quiz 6. 1부터 50까지 더하여 결과를 출력하세요(Array(n).fill().map() 이용하기
console.log(
    Array(50)
        .fill(0)
        .map((num, index) => (num += index + 1))
);

const today = new Date();
// Quiz 7. 오늘이 주말인지 평일인지 구하여 출력하세요.

let WeekOrWeekend =
    today.getDay() === 0 || today.getDay() === 6
        ? "주말입니다."
        : "평일입니다.";

console.log(WeekOrWeekend);

const animals = ["puppy", "cat", "fox"];

// Quiz 8. puppy와 cat 사이에 "parrot"과 "rabbit"을 추가하세요.

animals.splice(1, 0, "parrot", "rabbit");
console.log(animals);
