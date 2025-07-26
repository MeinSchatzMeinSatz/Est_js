// 1. 객체 person에서 name 속성의 값을 출력하세요.
const person = { name: "Ghost", age: 20 };

console.log(person.name);

// 2. person 에 height: 180 속성을 추가하세요.
person.height = 180;

console.log(person);

// 3. for... of 문으로 문자열 배열을 모두 소문자로 변환해 새 배열로 만드세요.
const arr = ["A", "B", "C"];

let result = [];
for (const x of arr) {
    result.push(x.toLowerCase());
}

console.log(result);

arr.forEach((a, i) => {
    result.push(a.toLowerCase());
});

console.log(result);

// 4. user 객체
// name, age, pets(dog(이름, 나이), parrot(이름, 나이))
// sayHello메서드 -> `Hello, ${name}`

// 객체 만들기
const user = {
    name: "Marry",
    age: 25,
    skills: ["fly", "swim"],
    pets: {
        dog: {
            name: "bobby",
            age: 8,
        },
        parrot: {
            name: "cherry",
            age: 3,
        },
    },
    sayHello() {
        return `Hello, ${this.pets.parrot.name}`;
    },
};

console.log(user.sayHello());

console.log((user.pets.dog.name = "White"));
console.log(user);

// 객체 지우기
delete user.pets;
console.log(user);

console.log(user.skills[1]);

// user 에 mbti키 값을 추가
user.mbti = "INFJ";
console.log(user);
// user -> age 삭제
delete user.age;
console.log(user);

// user -> name 변경
user.name = "Ghost";
console.log(user);

// 객체에 method 추가하기
user.sayBye = () => {
    `GoodBye, ${user.name}`;
};

console.log(user);

// method => mySkills() => 나의 능력은 'fly', 'swim'이야
// this 키워드 사용.

user.mySkills = function mySkills() {
    console.log(`나의 능력은 '${this.skills[0]}', '${this.skills[1]}' 이야 `);
    return;
};

user.mySkills();
