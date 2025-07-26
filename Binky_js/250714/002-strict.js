// "use strict";

// 1. 변수 선언을 강제
function func1() {
    // "use strict";
    // let x;
    x = 10;
    console.log(x);
}
func1();
// console.log(window.x); => 전역 공간에 변수가 생겨버린다.

// 2. 삭제 불가능한 속성 삭제 시 오류 발생
function func2() {
    "use strict";
    // delete Object.prototype;
    console.log(Object.prototype);
}

func2();

// 3. 중복 매개변수 금지
// function sum(a, a) {
//     "use strict";
//     console.log(a);
// }
// sum(2, 4);

// 4. this 동작의 변화 : 일반 함수 호출 시 this를 undefined로 강제

function func3() {
    "use strict";
    console.log(this);
}
func3();

// 자동으로 엄격모드가 적용되는 경우 : ES6 모듈, 클래스

/*엄격모드의 장점
코드의 안정성 향상 : 일반적인 실수나 버그를 사전에 방지
가독성 향상: 엄격 모드는 코드의 가독성을 높이고, 유지보수 용이
성능 향상
디버깅 용이

주의할 점.
하위 버전의 자바스크립트와 호환되지 않을 수 있다.
엄격 모드를 사용하지 않는 코드를 혼합하여 사용할 때는 주의해야.

즉, 새로운 프로젝트에서는 엄격 모드를 사용하는 것이 좋다.
*/

// 타입스크립트
