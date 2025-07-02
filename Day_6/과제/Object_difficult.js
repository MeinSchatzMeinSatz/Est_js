// 1. 객체 obj를 깊은 복사(Deep Copy)하는 코드를 작성하세요.
const obj = { a: 1, b: { c: 2 } };

const deepCopy = JSON.parse(JSON.stringify(obj));

console.log(deepCopy);

// 2. 두 객체가 값이 같은지 얕은 비교(shallow equal)하는 함수를 작성하시오.
const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };

console.log(a === b);

// 3. 객체 user에 getter/ setter 를 추가하여 age가 0~120 사이만 허용되게 하세요.

// 4. 객체 person에 sayHello 매서드를 추가하고 실행하세요.
// -> 뭔가 완전하지 않은 기분?
const person = { name: "Ghost" };

person.sayHello = function (name) {
    console.log(`Hello, ${name}`);
};

person.sayHello("Ghost");

// 5. 생성자 함수로 user 객체를 만들고, 인스턴스를 생성하세요.
// -> 아직 모르는 내용
function users(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new users("Ghost", 1000);

console.log(user1);

// 6. user 생성자에 sayHello 메서드를 프로토타입으로 추가하세요.
users.sayHello = function () {
    console.log(`Hello, ${this.name}`);
};

const userHello = users.sayHello();

userHello;

// 7. 객체의 key를 기준으로 정렬된 배열을 만드세요.
const obj3 = { b: 2, a: 1, c: 3 };
const obj3keys = Object.keys(obj3).sort((a, b) => a.localeCompare(b));

console.log(obj3keys);

// 8. 객체의 불변성을 유지하며 age를 25로 변경한 새 객체를 만드시오.
const user = { name: "Ghost", age: 20 };
const newUser1 = JSON.parse(JSON.stringify(user));

newUser1.age = 25;

console.log(user);
console.log(newUser1);

// 9. 객체 obj의 모든 값이 true 인지 판별하세요.
const obj4 = { a: true, b: true, c: false };

const trueObj = Object.values(obj4).every((item) => item === true);

console.log(trueObj);

// 10. 객체 obj의 key와 value를 뒤집은 새 객체를 만드세요.⭐️
const obj5 = { a: 1, b: 2 };
