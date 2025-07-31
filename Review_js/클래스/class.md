# class

-   자바스크립트의 클래스와 상속은 생성자 함수와 프로토타입을 사용하여 구현할 수 있다.
-   하지만 프로토타입을 사용한 구현은 직관적이지 않고 번거로운 면이 있다.
-   이러한 문제를 해결하기 위해 class 키워드를 이용한 새로운 문법이 등장했다.
-   이 문법은 문법적 설탕으로 좀 더 편하고 세련되게 클래스와 상속을 구현할 수 있게 해준다.

*   문법적 설탕이란, 사람이 더 이해하기 쉽도록 고안된 문법을 의미한다.
*   class 문법과 9장에서 다룰 async, await 문법이 이에 해당한다.

## 클래스 선언

-   클래스를 선언하기 위해서는 클래스의 이름과 함께 class 키워드를 사용해야 한다.
-   클래스의 몸체는 중괄호({})로 묶어서 정의하며, 몸체에는 생성자 함수의 역할을 하는 constructor() 생성자 메서드나 기존 생성자 함수의 prototype 프로퍼티에 정의했던 확장 프로퍼티나 메서드가 정의된다.

```javascript
class Vehicle {
    constructor() {
        console.log("initialize Vehicle");
    }

    run() {
        console.log("run!");
    }

    stop() {
        console.log("stop!");
    }
}

console.log(new Vehicle());
```

-   class 문법을 사용하여 선언한 클래스 역시 함수이다. 내부적으로는 프로토타입을 기반으로 동작한다.
-   즉, 클래스 생성을 위한 문법만 달라질 뿐 기존과 동일하게 프로토타입 체인을 통해 프로퍼티를 검색하며, prototype 프로퍼티 역시 존재한다.

-   클래스를 정의하던 방식이 생성자 함수를 사용하는 방식에서 class 문법을 사용하는 방식으로 변경되었을 뿐
-   기본적인 동작 원리는 큰 차이가 없다.

-   따라서 class 문법을 사용해도 자바스크립트의 프로토타입 자체를 이해하는 것은 여전히 중요하다.

## 상속

```javascript
class Vehicle {
    constructor() {
        console.log("initialize Vehicle");
    }

    run() {
        console.log("run!");
    }

    stop() {
        console.log("stop!");
    }
}

class Car extends Vehicle {
    constructor(type) {
        super();
        this.type = type;
    }
}

console.log(new Car("SUV"));
```

-   상속 구현을 위한 inherit() 함수도 부모 생성자 함수 호출을 위한 apply() 메서드 호출도 필요하지 않다.
-   extends 키워드 뒤에 상속받을 부모 클래스만 정의한 후, constructor() 생성자 메서드에서 super()를 호출하면 된다.

-   extends 키워드로 특정 클래스를 상속받는 경우 constructor() 생성자 메서드에서 반드시 this를 사용하기 전에 super()를 호출해야 한다.
-   그렇지 않을 경우 ReferenceError()가 발생한다.

## 정적 메서드와 private 접근 제한자.

-   static 키워드를 사용하여 정적 메서드를 정의할 수 있다.

### private 접근 제한자

-   클래스의 프로퍼티와 메서드들은 기본적으로 모두 public하다.
-   따라서 외부에서 접근하여 수정할 수 있다.
-   이를 보완하기 위해 # prefix를 추가해 private 클래스 필드를 선언하는 명세 작업을 진행한다.
