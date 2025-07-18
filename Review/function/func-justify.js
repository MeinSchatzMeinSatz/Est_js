/* 함수는 객체의 특별한 형태이며 문(Statement)으로 구성된 몸체를 가진 하나의 실행 단위이다.

자바스크립트의 함수는 일급 함수
- 일급 함수란? => "함수를 값처럼 다룰 수 있는 언어적 특성"
즉, 함수도 변수에 할당하고, 함수의 인자로 전달하며, 함수의 반환값으로 쓸 수 있는 성질.

함수의 인자로 전달하는 것을 콜백함수라고 한다.
*/

// 콜백함수의 예시
function doSomething() {
    console.log("hello javascript");
}

function finishSomething(callback) {
    callback();
    console.log("finish");
}

finishSomething(doSomething);

// 또 다른 대표적인 예시로는 addEventListener() 함수가 있다.
button.addEventlistener("click", callback);
