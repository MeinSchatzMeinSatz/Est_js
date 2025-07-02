// key "in " 객체
// 해당 key가 객체에 있는지 존재여부를 Boolean으로 표현

const user = {
    name: "Ghost",
    age: 1000,
};

console.log("name" in user);
console.log("color" in user);

const arr = ["a", "b", "c"];

// for.. in : 객체를 순회하면 key값을 출력한다.(배열에서는 index값을 출력하며, 잘 사용하지 않는다.)

// 배열에 사용
for (const idx in arr) {
    console.log("array", idx);
}

// 객체에 사용
for (const key in user) {
    console.log("object :", key);
}

for (const key in user) {
    console.log("object :", user[key]);
}

const friend1 = {
    name: "Ghost",
    age: 1000,
    skills: "fly",
};

const friend2 = {
    name: "Irangi",
    age: 500,
};

// friend1, friend2 skills 값이 있는지 확인
console.log("skills" in friend1);
console.log("skills" in friend2);

// for.. in -> for (변수선언 in 오브젝트) {변수값이 "key"}
for (const key in friend1) {
    console.log(key, friend1[key]);
}

// quiz
const person = { name: "Ghost", age: 20 };

console.log(person);
delete person.age;
console.log(person);

person.skill = "fly";

for (const key in person) {
    console.log(key);
}
