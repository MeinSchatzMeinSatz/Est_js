// truthy, falsy
// 공백이 있는 문자열 -> true
// 공백이 없는 문자열 -> false
// null -> false
// undefined -> false
// if (조건식)

if ("hello") {
    console.log("true");
} else {
    console.log("false");
}

if ("  ") {
    console.log("true");
} else {
    console.log("false");
}

if ("") {
    console.log("true");
} else {
    console.log("false");
}

if (null) {
    console.log("true");
} else {
    console.log("false");
}

if (undefined) {
    console.log("true");
} else {
    console.log("false");
}

// 삼항연산자 -> 조건식 ? 참일때: 거짓일때

// 예시1
null ? console.log("true") : console.log("false");
let number = 5;

// 예시2
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

number % 2 === 0 ? console.log("even") : console.log("odd");

// 90점 이상 합격, 이하 불합격
// 90점 이상 'A' 70점 이상 'B' / 70 미만 "F"
const score = 50;
if (score >= 90) {
    console.log("합격");
} else {
    console.log("불합격");
}

// 조건식 여부 중요!
if (score >= 90) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else {
    console.log("F");
}
