// 입력한 나이에 따라 성인/미성년자 출력하기

const age = 15;

function adult(age) {
    if (age < 19) {
        console.log("미성년자 입니다.");
    } else {
        console.log("성인 입니다.");
    }
}

adult(age);

// 숫자를 입력하면 짝수인지 홀수인지 출력하기

const num = 3;

function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
}

evenOrOdd(num);

// 사용자 점수에 따라 등급(A-F) 나누기

const score = 84;

function grade(score) {
    if (score >= 90) {
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

grade(score);

// 사용자 이름이 특정 이름인지 확인하고 인사 출력하기

const name = "Chaejun";

if (name === "Chaejun") {
    console.log("Hello Chaejun!");
} else {
    console.log("Who are you?");
}

//입력한 수가 0보다 크면 "양수", 0이면 "0", 아니면 "음수" 출력하기

const number = -1;

if (number >= 0) {
    console.log("양수입니다.");
} else if (number === 0) {
    console.log("0입니다.");
} else {
    console.log("음수입니다.");
}

// 비밀번호가 일치하는지 검사하고 로그인 결과 출력하기

const pw = "1234";

if (pw === "1234") {
    console.log("로그인 되었습니다.");
} else {
    console.log("비밀번호가 일치하지 않습니다.");
}

// 세 개의 수 중 가장 큰 수 찾기

const array = [10, 14, 6];
let n = Math.floor(Math.random() * 3);
let arrayNumber = array[n];

if (arrayNumber === Math.max(...array)) {
    console.log("가장 큰 수 찾았습니다.");
} else {
    console.log("가장 큰 수 못찾았습니다.");
}

console.log(Math.max(...array));

// `Math.max(array)` → NaN (배열 전체를 하나의 인수로 넘김)
// `Math.max(...array)` → 정상 동작 (배열의 각 요소를 개별 인수로 넘김)

// 주어진 숫자가 3의 배수인지 확인하기

const randomNumber = Math.ceil(Math.random() * 100);

if (randomNumber % 3 === 0) {
    console.log("3의 배수입니다.");
} else {
    console.log("3의 배수가 아닙니다.");
}
