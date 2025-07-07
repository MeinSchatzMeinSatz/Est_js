// switch 문 : 어떤 결과값이 명확할때 사용.

// HTTP -> 200, 404, 500, 알 수 없는 에러
const statusCode = undefined;
switch (statusCode) {
    case 200:
        console.log("성공입니다.");
        break;
    case 404:
        console.log("페이지를 찾을 수 없습니다.");
        break;
    case 500:
        console.log("서버 오류입니다.");
        break;
    default:
        console.log("알 수 없는 오류입니다.");
}

// 유저의 Role을 판단해서 출력하는 구문 만들기
// admin -> "관리자님 안녕하세요", user -> "회원님 안녕하세요", "guest" -> "게스트 화면입니다."
// 그 외의 경우에는 "페이지를 보는 권한이 없습니다."
const userRole = "admin"; //

switch (userRole) {
    case "admin":
        console.log("관리자님 안녕하세요");
        break;
    case "user":
        console.log("회원님 안녕하세요");
        break;
    case "guest":
        console.log("게스트 화면입니다.");
        break;
    default:
        console.log("페이지를 보는 권한이 없습니다.");
}

// Date객체
const today = new Date(); //2025-06-30T04:26:25.661Z
console.log(today);

console.log(today.toISOString().split("T")[0]);

const year = String(today.getFullYear()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const date = String(today.getDate()).padStart(2, "0");
const day = today.getDay(); // 요일 0~6, 0->일요일, 6->토요일

console.log(`${year}-${month}-${date}, ${day}`); //2025-5-30, 30
// ->2025-06-30으로 나오게

// day와 switch문을 이용해서 오늘의 요일을 문자열로 출력하시오.

let week;
switch (day) {
    case 0:
        week = "Sunday";
        break;
    case 1:
        week = "Monday";
        break;
    case 2:
        week = "Tuesday";
        break;
    case 3:
        week = "Wednesday";
        break;
    case 4:
        week = "Thursday";
        break;
    case 5:
        week = "Friday";
        break;
    default:
        week = "Saterday";
}

console.log(`Today is ${week}.`);

console.clear();

const hours = today.getHours(); // 0~23
const minutes = String(today.getMinutes()).padStart(2, "0");

// am or pm 붙이기
// 14:08pm 삼항연산자

const amPm = hours >= 12 ? "PM" : "AM";
const hours12 = String(hours % 12 || 12).padStart(2, "0");

console.log(`${hours}:${minutes}${amPm}`);
