// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.⭐️
const users = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];

console.log(users.map((item) => item.name));

// 2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: "Ghost", age: 20 };
user.age = 30;

console.log(user);

// 3. person 객체에 동적으로 key와 value를 추가하세요.
const person = { name: "Ghost" };

person.hobby = "football";

console.log(person);

// 4. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const objs = { obj1, obj2 };

console.log(objs);

// 5. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.

person.age = 20;
for (info in person) {
    console.log(`${info} : ${person[info]}`);
}

// 6. users 배열에서 나이가 20 이상인 사람만 추출하세요.

console.log(users.filter((user) => user.age >= 20).map((user) => user.name));

// 7. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.⭐️⭐️
// 이거 구조가 이해 안됨 ㅠㅠ

console.log(
    Object.entries(person).reduce((acc, [key, value]) => {
        acc[key.toUpperCase()] = String(value).toUpperCase();
        return acc;
    }, {})
);

// 8. 중첩 객체에서 내부 값에 접근하세요. (person.info.email)

const person1 = { name: "Ghost", info: { email: "ghost@email.com" } };

console.log(person1.info.email);

// 9. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj).map((item) => typeof item === "number"));

// 10. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.⭐️

console.log(users.filter((user) => user.age === Math.max(user.age)));
