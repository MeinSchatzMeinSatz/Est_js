// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];

console.log(users.map((user) => user.name));

// user 객체를 복사하여 age만 30으로 바꾼 객체를 만드세요.
const user = { name: "Ghost", age: 20 };

const newUser = JSON.parse(JSON.stringify(user));

newUser.age = 30;

console.log(newUser);

// 3. person에 동적으로  key와 value를 추가
const person = { name: "Ghost", age: 1000 };
person.hobby = "football";

// 4. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const newObj = { obj1, obj2 };

console.log(newObj);

// 5. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
console.log(`${user.name} : ${user.age}`);

// 6. users 배열에서 나이가 20 이상인 사람만 추출하세요.
console.log(users.filter((item) => item.age >= 20));

// 7. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.
const person1 = { name: "Ghost", hobby: "football" };

const upper = Object.entries(person1).reduce((acc, [key, value]) => {
    acc[key.toUpperCase()] = String(value).toUpperCase;
    return acc;
}, {});

// 8. 중첩 객체에서 내부 값에 접근하세요.
const person2 = { name: "Ghost", info: { email: "ghost@eamil.com" } };

console.log(person2.info.email);

// 9. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj).map((value) => Number.isInteger(value)));
console.log(Object.values(obj).map((value) => typeof value === "number"));
console.log(Object.values(obj).every((value) => typeof value === "number"));

// 10. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.

console.log();
