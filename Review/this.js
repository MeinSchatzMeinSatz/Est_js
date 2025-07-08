/*
this를 한 마디로 정의하면 "함수가 호출되는 방식에 따라 달라지는 특수한 키워드"라고 할 수 있다.

다양한 상황을 통해 this 가 가리키는 값을 살펴보자.
*/

/*
1.1 전역범위 호출

전역 범위, 보통 전역 컨텍스트라고 얘기한다. 전역 컨텍스트에서 this는 [전역 객체]를 가리킨다. 브라우저에서는 window 객체가 전역 객체이다.

1.2 함수 범위 호출

함수 내부에서 this 의 값은 함수를 호출한 방식에 따라 결정된다.

<1.2.1 일반 함수 호출>

일반 함수 호출에서 this는 [전역 객체]를 나타낸다
*/

function func1() {
    console.log(this);
}

func1();

/*
<1.2.2 메서드 호출>

객체의 매서드로 호출된 함수에서 this는 메서드를 [호출한 객체]를 나타낸다. 다음 코드에서 this는 메서드를 [호출한 obj]를 가리킨다.
*/

const obj = {
    func: function () {
        console.log(this);
    },
};

obj.func();

// 매서드 내부의 함수는 일반 함수로 취급된다. 따라서 매서드 내부의 함수에서 this는 전역 객체를 가리킨다.

const person = {
    name: "licat",
    age: 25,
    a() {
        console.log("a: ", this); // person obj
        console.log("a name :", this.name); // obj.name
        function b() {
            console.log("b :", this); // window(전역 객체)
            console.log("b name :", this.name); //
        }
        b();
    },
};

person.a();

/*
화살표 함수 호출

화살표 함수에서 this는 함수가 정의된 위치의 컨텍스트를 유지합니다. 이를 lexical this라고 합니다.
*/

// Object(obj) (화살표 함수 func2에서의 this)
// Window 객체 (일반 함수 func3에서의 this)

// 위 코드에서 func2의 this는 lexical this로 obj를 가르킵니다. 반면 func3의 this는 일반 함수 호출로 window 객체를 가리킵니다.

/*
1.2.4 생성자 함수 호출

new 키워드를 사용하여 생성자 함수를 호출하면, this는 새로 생성된 객체를 나타냅니다. 즉, 생성자 함수로 만들어진 객체인 인스턴스를 가리킵니다.
*/

function Person(name) {
    this.name = name;
    console.log("new 키워드 :", this);
}

const person1 = new Person("licat");

/* 
1.3 이벤트 핸들러 내에서 호출

이벤트 핸들러는 사용자나 브라우저의 특정 동작(이벤트)에 반응하여 실행되는 함수입니다. "핸들러 함수"라고 불립니다.

웹 페이지에서 자주 사용되는 이벤트에는 클릭, 키보드 입력, 마우스 이동 등이 있습니다. 이벤트 핸들러는 주로 addEventListener 메서드를 사용하여 특정 요소에 할당됩니다.

이벤트 핸들러 내에서 this는 이벤트가 발생한 DOM 요소를 가리킵니다. 아래 예제는 직접 html 파일에 작성해보세요.
*/

// const button = document.getElementById("btn");
// button.addEventListener("click", function () {
//     console.log(this);
// });

// 실무에서는 이벤트 핸들러에서 this를 많이 사용합니다. 이벤트 핸들러에서 this는 이벤트가 발생한 요소를 가리킵니다. 다음은 체크박스를 클릭할 때마다 배경생기 바뀌는 예제입니다.

// const checkbox = document.getElementById("checkbox");
// checkbox.addEventListener("change", function () {
//     if (this.checked) {
//         document.body.style.backgroundColor = "lightcoral";
//     } else {
//         document.body.style.backgroundColor = "";
//     }
// });

/* 2. This 조작하기
2.1 call()
call() 메서드의 첫 번째 인수로 this 사용할 값을 사용하여 함수를 호출합니다.
*/

const peter = {
    name: "Peter Parker",
    sayName: function () {
        console.log(this.name);
    },
};

const bruce = {
    name: "Bruce Wayne",
};

peter.sayName.call(bruce);

// call의 첫번째 인자로 전달된 bruce 객체가 함수 내부의 this로 사용되어 bruce.name을 출력합니다.

/*
2.2 apply()

apply() 매서드는 call()과 유사하지만, 인수를 배열의 형태로 전달합니다. 실행할 메서드에 파라미터가 있다면 배열의 형태로 인자 값을 전달하여 사용합니다.
*/

// function.apply(thisArg, [argsArray])

const peter1 = {
    name: "Peter Parker",
    sayName: function (is, is2) {
        console.log(`${this.name} is  ${is} or ${is2}`);
    },
};

const bruce1 = {
    name: "Bruce Wayne2",
};

peter.sayName.apply(bruce1, ["batman", "richman"]); // 이 뒤에 부분은 의미가 뭐지?

/*
2.3 bind()

bind()는 새로운 함수를 생성하며, this를 고정시킵니다. bind()메서드는 함수를 호출하지 않고 this가 고정된 새로운 함수를 반환합니다.
*/

// function.bind(thisArg, arg1, arg2, ...)

function sayName() {
    console.log(this.name);
}

const bruce2 = {
    name: "bruce",
    sayName: sayName,
};

const peter2 = {
    name: "peter",
};

// bruce.sayName();

const sayMyName = sayName.bind(peter2);

sayMyName();

/*
- (생성자 함수, 클래스)new 키워드 : 새로운 인스턴스
- 객체의 메서드 호출 : 점(.) 앞의 객체
- 화살표 함수 : 상위 스코프의 this를 그대로 받는다.
- 이벤트 핸들러 안에서의 this : 일반함수 (실제 클릭된 DOM 요소)
- 이벤트 핸들러 안에서의 this : 화살표 함수 (상위 스코프의 this)
- call/ apply/ bind -> 명시적 this 바인딩
- 그 외 일반 함수 호출 -> window(strict mode 에서 undefined)
*/
