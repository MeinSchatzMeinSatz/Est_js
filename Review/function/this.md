# this

자바스크립트의 함수에서는 this라는 특별한 키워드를 사용할 수 있다.

-   this는 읽기 전용 값이다.
-   런타임 시 설정할 수 없다.
-   함수를 호출한 방법에 의해 값이 달라진다.

## 전역 실행 컨텍스트

-   이때의 this는 항상 전역 객체를 참조한다.
-   전역 실행 컨텍스트란 자바스크립트 코드가 실행되는 최상위 환경이다.

## 일반 함수

-   함수 선언문 또는 함수 표현식으로 정의한 함수
    결론: 전역 객체를 참조한다.
-   하지만 this는 window 전역 객체를 참조하는 것이 아니라, undefined로 남아 있어야 한다.
-   그 이유는 window.func()처럼 메서드 호출이 아니라 func() 함수를 직접 호출하여 함수의 컨텍스트가 어디에 속하는지 알 수 없기 때문이다.

-   이 문제는 엄격 모드를 사용하여 해결할 수 있다.
-   엄격 모드에서는 this의 값이 window 전역 객체를 참조하지 않고 undefined로 올바르게 남아있다.

## 생성자 함수

```javascript
function Vehicle(type) {
    this.type = type; // 프로퍼티 생성
}
const car = new Vehicle("Car");
```

Vehicle() 생성자 함수를 호출하여 객체를 생성하였다. 생성자 함수를 호출하여 객체가 생성될때 아래와 같은 단계로 동작한다.

-   객체를 생성하여 this에 바인딩
    생성된 객체는 생성자 함수의 prototype 프로퍼티에 해당하는 객체를 프로토타입으로 설정한다.
    또한 이 객체는 이후 단계에서 this를 통해 계속 참조된다.
-   프로퍼티 생성
    this에 바인딩한 객체에 프로퍼티를 생성한다.
-   객체 반환
    생성된 객체, this에 바인딩한 객체를 반환한다. 또한 반환 값을 따로 명시하지 않아도 this에 바인딩한 객체가 반환된다.
    다만, this가 아닌 다른 값을 명시적으로 지정하였다면 this가 아닌 해당 값이 반환된다.

```javascript
function Vehicle(type) {
    this.type = type;

    return this; // 이 부분을 생략하여도 this에 바인딩한 객체가 반환된다.
}
const car = new Vehicle("Car");
```

-   이러한 과정은 반드시 new 키워드와 함께 함수를 호출한 경우에만 실행된다.(반드시 기억할 것.)

## 메서드

자바스크립트에서는 객체의 프로퍼티인 함수를 일반 함수와 구분하여 메서드라고 부른다.
결론: 메서드를 호출하면 this는 해당 메서드를 소유하는 객체로 바인딩된다.

```javascript
const obj = {
    lang: "javascript"
    greeting() {
        // this가 obj 객체로 바인딩된다.
        console.log(this);
        return `hello ${this.lang}`;
    }
}

console.log(obj.greeting()); // 'hello javascript
```

여기서 중요한 것은 메서드를 어떻게 호출했느냐에 따라 this 바인딩이 달라진다는 것.

```javascript
const obj = {
    lang: "javascript";
    greeting() {
        return `hello ${this.lang}`;
    }
}

const greeting = obj.greeting;

console.log(greeting()); // "hello undefined"
```

-   예제 코드처럼 메서드를 호출한다면 일반 함수를 호출했을 때와 동일하게 함수의 컨텍스트가 어디에 속하는지 알 수 없게된다.
-   이 경우 this는 전역 객체를 참조하거나 엄격 모드인 경우 undefined로 남아 있게 된다.
-   따라서 메서드를 의도한 대로 사용하기 위해선 반드시 해당 객체의 컨택스트(obj)로 명확하게 지정하여 호출해야 한다.

## call(), apply()와 bind()

함수의 호출 방법에 상관없이 this를 특정한 객체로 바인딩 할 수 있을까?
-> 내장 메서드인 call(), apply(), bind() 메서드를 이용하여 this로 바인딩될 객체를 변경할 수 있다.

-   이러한 방법을 명시적 바인딩이라고 부른다.

### call(), apply()

call(), apply() 메서드는 어떤 함수를 다른 객체의 메서드처럼 호출할 수 있게 한다. 두 메서드는 넘겨받는 인자의 형식만 다를 뿐, "this를 특정 객체에 바인딩하여 함수를 호출하는 역할"을 한다.

#### call()

```javascript
const obj = { name: "javascript" };

function greeting() {
    return `Hello ${this.name}`;
}

console.log(greeting.call(obj)); // 'Hello javascript'
```

-   call() 메서드는 첫 번째 인자로 this로 바인딩할 객체를 지정한다.
-   obj 객체를 call() 메서드의 첫 번째 인자로 넘겨 this로 바인딩하였다.
-   greeting() 함수는 obj의 메서드처럼 사용할 수 있기 때문에 this를 통해 obj의 프로퍼티인 name에 접근할 수 있게 된다.

-   call() 메서드를 통해 호출하는 함수로 인자를 전달할 수도 있다.

```javascript
const obj = { name: "Lee" };

function getUserInfo(age, country) {
    return `name: ${this.name}, age: ${age}, country: ${country}`;
}

console.log(getUserInfo.call(obj, 20, "Korea")); // 'name: Lee, age: 20, country: Korea'
```

-   call() 메서드의 첫 번째 인자 이후의 인자들은 모두 호출하는 함수로 전달된다.

#### apply()

-   apply() 메서드는 call() 메서드와 동일하지만 호출하는 함수에 전달할 인자들을 배열 형태로 전달해야 한다.

```javascript
const obj = { name: "Lee" };

function getUserInfo(age, country) {
    return `name: {this.name}, age: ${age}, country: ${country}`;
}

console.log(getUserInfo.apply(obj, [20, "Korea"])); // 'name: Lee, age: 20, country: Korea'
```

### bind()

-   함수의 this 바인딩을 변경할 수 있는 또 다른 방법

bind()만의 특징

-   bind()메서드는 함수의 this 바인딩을 영구적으로 변경한다. bind()메서드로 this가 변경된 함수는 call(), apply() 또는 다른 bind() 메서드를 사용해도 this 바인딩을 변경할 수 없다.
-   this를 바인딩하여 함수를 호출하는 것이 아니라 "새로운 함수"를 반환한다.

-   bind()메서드는 함수가 어디서 어떻게 호출되는지에 상관없이 this의 값을 고정하고 싶을 때 사용한다.
-   따라서 bind()메서드를 사용할 때는 함수의 동작을 영구적으로 변경하므로 함수의 this가 어떻게 바인딩되는지 잘 파악하고 사용해야 한다.
