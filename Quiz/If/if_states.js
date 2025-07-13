// 1. 입력한 나이에 따라 성인 / 미성년자 출력하기
let age = 20;
if (age > 18) {
    console.log("성인입니다.");
} else {
    console.log("미성년자 입니다.");
}

// 2. 숫자를 입력하면 짝수인지 홀수인지 출력하기
let num = 4;
if (num % 2) {
    console.log("홀수 입니다.");
} else {
    console.log("짝수 입니다.");
}

// 3. 사용자 점수에 따라 등급(A-F) 나누기
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// 4. 사용자 이름이 특정 이름인지 확인하고 인사 출력하기
let userName = "Jimin";

function sayHello(name) {
    if (name === "Jimin") {
        console.log("Hello, Jimin");
    } else {
        console.log("WHO R U?");
    }
}

sayHello(userName);
sayHello("Chaejun");

// 5. 입력한 수가 0보다 크면 "양수", 0이면 "0", 아니면 "음수" 출력하기

function numberTest(num) {
    if (num > 0) {
        console.log("양수 입니다.");
    } else if ((num = 0)) {
        console.log("0");
    } else {
        console.log("음수 입니다.");
    }
}

numberTest(0);
numberTest(10);
numberTest(-1);

// 6. 비밀번호가 일치하는지 검사하고 로그인 결과 출력하기
function pwTest(pw) {
    if (pw === "12345") {
        console.log("로그인에 성공하셨습니다.");
    } else {
        console.log("로그인에 실패하셨습니다.");
    }
}

pwTest("1234");
pwTest("12345");

// 7. 세 개의 수 중 가장 큰 수 찾기

// 8. 숫자가 3의 배수인지 확인하기
function number3test(num) {
    if (!(num % 3)) {
        console.log("3의 배수 입니다.");
    } else {
        console.log("3의 배수가 아닙니다.");
    }
}

number3test(7);
number3test(3);

// 9. 이메일 주소에 "@"가 포함되어 있는지 검사하기
function emailAddress(str) {
    let arr = str.split("");
    if (arr.includes("@")) {
        console.log("이메일 주소입니다.");
    } else {
        console.log("이메일주소가 아닙니다.");
    }
}

emailAddress("cowns1230@naver.com");
emailAddress("d131215");

// 10. 오늘 요일에 따라 다른 인사말 출력하기
