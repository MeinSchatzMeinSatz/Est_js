// 1. 객체 person에서 name 속성의 값을 출력하시오.
const person = { name: "Ghost", age: 20 };
console.log(person.name);

// 2. 객체 person에 height: 180 속성을 추가하세요.
person.height = 180;
console.log(person);

// 3. 객체 person에서 age 속성을 삭제하세요.
delete person.age;
console.log(person);

// 4. 객체 person의 모든 속성(key) 이름을 배열로 출력하세요.
person.age = 20;

console.log(Object.keys(person));

// 5. 객체 person의 모든 value만 배열로 출력하세요.
console.log(Object.values(person));

// 6. for... in 문으로 person의 모든 key, value를 한 줄씩 출력하세요.⭐️
for (const key in person) {
    console.log(key, person[key]);
}

// 7. person에 'age' 속성이 있는지 true/false로 출력하세요.⭐️
console.log("age" in person);

// 8. person 객체의 모든 값을 "이름: 값" 형태의 문자열로 출력하세요.
for (info in person) {
    console.log(`${info} : ${person[info]}`);
}

// 9. 빈 객체 obj를 만들고, 동적으로 key와 value를 추가하세요.
const obj = {};

obj.city = "서울광역시";
obj.area = "서대문구";
obj.weather = "흐림";

console.log(obj);

// 10. 객체 person의 key의 개수를 출력하세요.⭐️
const person1 = { name: "Chris", age: 20 };
console.log(Object.keys(person1).length);
