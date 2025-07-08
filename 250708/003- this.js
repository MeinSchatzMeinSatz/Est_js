// this: 호출 방식에 따라 바뀌는 동적 키워드

/*
요약
- (생성자 함수, 클래스)new 키워드 : 새로운 인스턴스
- 객체의 메서드 호출 : 점(.) 앞의 객체
- 화살표 함수 : 상위 스코프의 this를 그대로 받는다.
- 이벤트 핸들러 안에서의 this : 일반함수 (실제 클릭된 DOM 요소)
- 이벤트 핸들러 안에서의 this : 화살표 함수 (상위 스코프의 this)
- 그 외 일반 함수 호출 -> window(strict mode 에서 undefined)
*/

// 1. 전역 범위
console.log("전역범위", this); // => window를 가리킴

// 2. 일반 함수 this
function func1() {
    console.log("일반 함수", this);
}
func1();
// 기본적으로 전역 객체를 this로 설정 -> 전역 객체: window를 가리킴

// 3. 객체 메서드 this => 객체
const obj1 = {
    name: "객체1",
    func1() {
        console.log("객체 메서드", this);
    },
};

obj1.func1();

// 4. 객체 메서드 내 일반 함수
const obj2 = {
    name: "객체2",
    func2() {
        console.log("객체 메서드2", this);

        function inner() {
            console.log("내부 함수", this);
        }
        inner();
    },
};

obj2.func2();

// 5. 객체 메서드, 화살표 함수
const obj3 = {
    name: "객체3",
    func3() {
        console.log("객체 메서드3", this);

        const inner = () => {
            console.log("내부 화살표 함수", this);
        };
        inner();
        // this를 가지지 않음, "상위 스코프의 this"를 그대로 가져옴!
        // 화살표 함수의 장점. 예측 가능성!
    },
};
obj3.func3();

// 6. 생성자 함수 this => 포인트 new 키워드
function Friends(name) {
    // this는 이미 새로운 인스턴스를 가리킴
    console.log("생성자 함수1:", this);
    this.name = name;
    console.log("생성자 함수1:", this);
    this.sayHello = function () {
        console.log(`Hello, ${this.name}`);
    };
    console.log("생성자 함수1", this);

    // return this; 엔진이 자동으로 완성된 객체를 반환합니다.
}

// 6-1. new 키워드를 사용했을 때
// 인스턴스가 생성되는 동시에 this는 생성된 인스턴스를 가리키게 된다.
const friend1 = new Friends("Bingky");

console.log(friend1);

/* 
생성자 함수에서의 this 바인딩 과정
1. 빈 객체 생성: 속성이 없는 완전히 비어있는 상태 {}
2. this 바인딩
3. 생성자 함수 코드 실행 => 속성과 메서드 추가
*/

// 6-2. new 키워드 없이 사용했을 때
// 인스턴스가 생성되는 동시에 this는 window를 가리키게 된다.

// const friend2 = Friends("Yujin");
// console.log("new 키워드 없이 만든 인스턴스 :", friend2); // undefined
// console.log(window.name); // 유진, 전역 변수 오염!!

// 생성자 함수, 일반 함수에서의 this 결정 방식이 다르다.

// 7. 클래스 this
class Friends2 {
    contructor(name) {
        this.name = name;
        console.log(this);
    }

    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}

const friend3 = new Friends2("채준");
console.log(friend3.name);

// 8. 이벤트 핸들러
const $button = document.querySelector("#button");

// 8-1. 일반 함수
// this : 누가 이벤트를 받았는지, 실제 클릭된 DOM 요소
$button.addEventListener("click", function () {
    console.log("이벤트 핸들러(일반) :", this);
    console.log("클릭된 요소 :", this.tagName);
});

// 8-2. 화살표 함수
$button.addEventListener("click", () => {
    console.log("이벤트 핸들러(화살표) :", this);
    // console.log("클릭된 요소 :", this.tagName);
});
// 윈도우를 가르킴

/*
- (생성자 함수, 클래스)new 키워드 : 새로운 인스턴스
- 객체의 메서드 호출 : 점(.) 앞의 객체
- 화살표 함수 : 상위 스코프의 this를 그대로 받는다.
- 이벤트 핸들러 안에서의 this : 일반함수 (실제 클릭된 DOM 요소)
- 이벤트 핸들러 안에서의 this : 화살표 함수 (상위 스코프의 this)
- call/ apply/ bind -> 명시적 this 바인딩
- 그 외 일반 함수 호출 -> window(strict mode 에서 undefined)
*/
