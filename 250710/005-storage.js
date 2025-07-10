// 로컬 스토리지
// : 브라우저 데이터를 영구적으로 저장하는 방식
// => 사용자가 직접 지우지 않는 한, 데이터는 브라우저를 껐다가도 그대로 남아있습니다.
// ex : 로그인 여부, 로그인 방식, 다크모드 설정 등

// 데이터 저장
// localStorage.setItem("Key 이름", "저장할 값")
localStorage.setItem("isLogin", false);
localStorage.setItem("color-theme", "dark");

// 객체 형태의 값도 저장할 수 있다.
// JSON.stringify를 사용해서 변환이 필요.
const user1 = {
    id: 1,
    name: "Yujin",
};

localStorage.setItem("user", JSON.stringify(user1));

// 데이터 가져오기
const isLogin = localStorage.getItem("isLogin", false);
console.log(isLogin); // 불리언값 형 변환 필요.
const theme = localStorage.getItem("color-theme");
console.log("theme :", theme);

const userStorage = localStorage.getItem("user");
console.log(JSON.parse(userStorage));

// 값 지우기 (데이터 삭제)
localStorage.removeItem("user");
// localStroage.clear();

// 2. 세션 스토리지: 브라우저 세션 동안만 데이터를 저장하는 방법.
// => 브라우저를 닫으면 데이터가 삭제된다. 데이터의 지속성이 로컬 스토리지와 다름.

// 데이터 저장
sessionStorage.setItem("session", 1);
sessionStorage.setItem("session", 1);
sessionStorage.setItem("user", JSON.stringify(user1));

// 데이터 가져오기
console.log(sessionStorage.getItem("session"));

const userStroage2 = sessionStorage.getItem("user");
console.log(JSON.parse(userStroage2));

// 값 지우기
sessionStorage.removeItem("user");
// sessionStorage.clear();

// 3. Cookie: 브라우저가 서버에 자동으로 전송하는 데이터
/*
- 문자로만 저장, 4KB 제한
- 자동전송 -> 인증 정보에 자주 쓰임
HTTPonly 속성이 설정된 쿠키는 자바스크립트로 읽을 수 없다. => 보안을 위한 장치이다.
*/
console.log(document.cookie);
