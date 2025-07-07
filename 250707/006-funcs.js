// 1. 콜백함수
//  setTimeout, setInterval, addEventListener, forEach, map, filter

function callFunc(name, callback) {
    console.log(`안녕하세요. ${name}님`);
    callback(); // 콜백 함수 호출
    // 함수 내부에서 인자로 받아서 호출될 아이.
}

function sayHello() {
    console.log("반갑습니다.");
}

callFunc("우리", sayHello);

// 2. 재귀함수
// : 자기 자신을 다시 호출하는 함수 => 반복되는 작업을 수행하기 위함
// 재귀조건, 종료조건이 필요하다!
// 팩토리얼 계산, 피보나치 수열, 폴더 탐색 등
// 5! = 5*4*3*2*1

function factorial(num) {
    console.log(num);
    // 종료조건
    if (num === 0 || num === 1) {
        return 1;
    }

    // 재귀조건
    return num * factorial(num - 1);
}

console.log(factorial(5));

// num = 5
// 5 * (4 * fac(3))
// 5 * (4 * (3 * fac(2)))
// 5 * (4 * (3 * (2 * fac(1))))
// 5 * (4 * (3 * (2 * 1)))

// 3. 즉시 실행 함수
// 함수를 정의하자마자 바로 실행하는 함수
// 변수의 영역범위를 제한하거나, 모듈 스코프를 제한하기 위해

(function () {
    console.log("이 함수는 선언과 동시에 실행됩니다.");
})();

// orderCoffee라는 함수를 작성합니다.
// 첫 번째 인자로 커피 이름을, 두 번째 인자로 콜백 함수를 받습니다.
// 함수 실행 시 콘솔에 커피 준비 중...을 출력한 후, 콜백 함수를 실행합니다.
// 콜백 함수에 커피 이름을 인자로 전달하여 실행합니다.

function orderCoffee(coffeeName, callback) {
    console.log("커피가 준비중입니다.");
    callback(coffeeName);
}

function preparedCoffee(coffee) {
    console.log(`메뉴가 준비되었습니다 : ${coffee}`);
}

orderCoffee("카페라떼", preparedCoffee);

// sumUpTo라는 함수를 만듭니다.
// 인자로 받은 수까지 1부터 더한 값을 반환해야 합니다.
// 반복문 없이 재귀로 작성합니다.
// sumUpTo(5)를 실행했을 때, 15가 출력되도록 합니다.

// 🔍 힌트
// 종료 조건: n이 1일 때 무엇을 반환해야 할까요?
// 재귀 조건: n + sumUpTo(n-1)의 형태로 생각해보세요
// 주의사항: 0 이하의 수가 들어올 경우도 고려해보세요

function sumUpTo(num) {
    if (num <= 0) {
        console.log("1 이상의 값을 입력해주세요.");
        return 0;
    }

    // 종료조건
    if (num === 1) {
        return 1;
    }

    // 재귀 조건: n + (n-1 까지의 합)
    return num + sumUpTo(num - 1);
}

console.log(sumUpTo(5));
console.log(sumUpTo(10));
