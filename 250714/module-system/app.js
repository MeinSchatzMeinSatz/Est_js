// 정적 임포트
import { PI, add as sum, user } from "./utils.js";
// import sub from "./utils.js";
import minus from "./utils.js";

console.log(PI);
// console.log(add);
console.log(sum(2, 4));
console.log(minus(5, 2));

// 동적 임포트 import()
// 조건문 안에서도 사용할 수 있음
// 사용자가 요청할 때만, 필요한 순간에만, 가볍게 불러오는 방식
const btn = document.getElementById("module-btn");
btn.addEventListener("click", async () => {
    const { PI, add } = await import("./utils.js");
    console.log("module", PI);
    console.log("module", add);
    console.log("module", add(2, 4));
});

// 모듈의 속성 관리
console.log(user);
// user.password = "1234";

// 속성은 변경가능
user.name = "Binky";
console.log(user);

// export 된 객체 자체는 읽기 전용
// 모듈 시스템의 규칙: export 된 변수는 외부에서 직접 재할당하거나, 덮어쓸 수 없다.
// user = {
//     name: "weniv",
// };
