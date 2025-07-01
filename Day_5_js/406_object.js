const obj = { key: "value", key: "value", key: "value" };
// key 값은 문자열로 자동처리 됨

const obj1 = {
    name: "ghost",
    age: 1000,
    sayHello() {
        return `Hello, ${this.name}`;
    },
    sayBye: function () {
        return `Goodbye, ${this.name}`;
    },
    getAge: () => {
        return this.age; // 화살표 함수 안의 this는 obj1 바깥쪽을 가르키므로 주의.
    },
}; // 객체 안의 함수를 메서드라고 한다.

console.log(obj1.sayHello());
console.log(obj1.sayBye());
console.log(obj1.getAge());

const ghost = {
    age: 1000,
    mbti: "INFJ",
    say: function () {
        console.log("say Hello");
    },
};

// 객체 접근하는 방법, 값을 가져오는 법
console.log(ghost.age, ghost.mbti);

// 수정하는 법
ghost.age = 500;

console.log(ghost);

// 키와 벨류의 값의 쌍을 property라고 한다.

// => 객체란 프로퍼티를 모아놓은 것.

const type = "age";
console.log(ghost[type]); // key값이 변수값으로 들어오면 [변수이름, 'age']

ghost.say();
