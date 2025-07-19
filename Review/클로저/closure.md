# 클로저

클로저란?
함수의 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프를 벗어난 외부 스코프에서 실행될 때에도 자신의 렉시컬 스코프에 접근할 수 있게 해주는 것.

클로저는 JS에서 굉장히 중요한 개념
함수를 사용하는 곳이면 어디든지 적용할 수 있는 개념이다.
클로저를 사용하면 특정한 상태를 기억하고 캡슐화하거나 나아가 하나의 모듈을 정의하는 패턴으로도 확장할 수 있다.
-> 캡술화 / 모듈 정의 패턴에 적용
-> 강력한 활용도를 가진 클로저는 앞서 설명한 렉시컬 스코프와 스코프 체인만 제대로 이해하면 쉽게 사용할 수 있다.

[학습 목표]
렉시컬 스코프와 스코프 체인 이해하기

## 클로저 뜯어보기

```javascript
function foo() {
    var a = 1;
    function bar() {
        console.log(a); // 1
    }
    bar();
}
foo();
```

bar() 함수는 상위 스코프인 foo() 함수 내에서 실행된다.
렉시컬 스코프 체인을 통해 foo() 함수의 스코프를 기억하고 있다.

그렇다면 bar() 함수를 클로저라고 볼 수 있을까? - X
이론적으로 보면 그렇다고 할 수 있지만 실제로 이런 경우를 클로저라고 부르지는 않는다. 일반적으로 bar()와 같은 내부 함수가 자신을 감싸고 있는 외부 함수 foo()를 벗어나 완전히 독립적인 스코프에서 실행되었을 경우 클로저라고 부른다.

위 코드를 클로저를 이용한 코드로 변경해보자

```javascript
function foo() {
    var a = 1;
    function bar() {
        console.log(a); // 1
    }
    return bar;
}
const baz = foo();
baz(); // 1
```

코드는 아래와 같은 순서대로 실행된다.

1. bar() 함수는 렉시컬 스코프 체인을 통해 foo() 함수의 스코프를 기억한다.
2. bar() 함수는 전역 변수 baz에 할당하였다.
3. 전역 변수 baz를 사용하여 bar() 함수를 호출했다.
4. bar() 함수는 자신의 스코프에서 변수 a를 찾는다.
5. 자신의 스코프에서 찾을 수 없기 때문에 스코프 체인을 통해 foo() 함수의 스코프에서 찾는다.
6. foo() 함수의 스코프에서 변수 a를 찾아 1을 출력한다.

bar() 함수는 자신이 생성된 렉시컬 스코프에서 벗어나 baz라는 전역 변수로 호출되었다.
여기서 중요한 점은 bar() 함수가 자신을 감싸고 있는 foo() 함수를 벗어나 bar()함수의 스코프와 상관없는 전역 스코프에서 실행된다는 점이다.
그리고 bar() 함수를 실행하였을 때 자신의 렉시컬 스코프 체인을 통해 foo() 함수의 스코프에서 변수 a를 찾는다.
이거슨 클로저다.

즉, 클로저를 사용하면 외부에서도 얼마든지 원래의 렉시컬 스코프에 접근할 수 있다.

## 모듈화 패턴

```javascript
function myModule() {
    let counter = 0;

    function increment() {
        counter += 1;
    }

    function decrement() {
        counter -= 1;
    }

    function getCount() {
        return counter;
    }

    return {
        increment,
        decrement,
        getCount,
    };
}

const myCounter = myModule();

myCounter.increment();
console.log(myCounter.getCount()); // 1
myCounter.decrement();
console.log(myCounter.getCount());
```

myModule() 함수는 increment(), decrement(), getValue() 함수들을 객체로 만들어 실행 결과로써 반환한다.
반환된 함수들은 기억한 렉시컬 스코프 체인에 의해 myModule() 함수의 스코프에 접근할 수 있다.
그렇기에 세 함수를 사용하면 외부 스코프에서도 myModule() 함수 내부에 선언된 counter 변수에 접근하여 값을 변경하거나 조회할 수 있다.

여기서 중요한 점은 myModule() 험수가 반환한 객체는 함수들에 대한 참조만 가지며 내부 변수 counter에 대한 접근은 불가능하다는 점이다.

즉, counter 변수는 캡슐화 되어서 외부에서 접근할 수 없으며, 접근하고 싶다면 외부로 반환한 클로저 함수를 통해서만 접근할 수 있다는 점.

이거슨 모듈 패턴이다.
