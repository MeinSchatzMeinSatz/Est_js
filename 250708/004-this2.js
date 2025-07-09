// 1. call() : 호출과 동시에 this를 바꿔주는 방법
const user = {
    name: "빙키",
    sayName() {
        console.log(this);
        console.log(`내 이름은 ${this.name}`);
    },
};

const bot = {
    name: "빙키봇",
};

user.sayName();
user.sayName.call(bot);

// 2. apply
function introduce(age, hobby) {
    console.log(`내 이름은 ${this.name}, ${age}살, 취미는 ${hobby}`);
}
introduce(20, "yoga");

const person = { name: "채준" };

introduce.call(person, 20, "yoga");
introduce.apply(person, [20, "yoga"]); // 인자를 "배열"로 전달
// 같은 방식으로 작동하지만, 인자를 전달하는 방식만 다르다.

// 3. bind
const user2 = {
    name: "binky2",
    sayName() {
        console.log(`내 이름은 ${this.name}`);
    },
};

const guest = { name: "게스트" };
// this를 객체 guest로 고정!된 새로운 함수가 형성되는 것.
const bindFunc = user2.sayName.bind(guest);
console.log(bindFunc);
bindFunc();

/*
- (생성자 함수, 클래스)new 키워드 : 새로운 인스턴스
- 객체의 메서드 호출 : 점(.) 앞의 객체
- 화살표 함수 : 상위 스코프의 this를 그대로 받는다.
- 이벤트 핸들러 안에서의 this : 일반함수 (실제 클릭된 DOM 요소)
- 이벤트 핸들러 안에서의 this : 화살표 함수 (상위 스코프의 this)
- call/ apply/ bind -> 명시적 this 바인딩
- 그 외 일반 함수 호출 -> window(strict mode 에서 undefined)
*/

// bind()가 내부적으로 하는 일
Function.prototype.bind = function (args) {
    const originFunc = this; // counter.handleClick

    return function (...args) {
        return originFunc.call(thisArgs, ...args);
    };
};
