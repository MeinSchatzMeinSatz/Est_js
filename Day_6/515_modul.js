import { user1, user2 } from "./datas/users.js";
//ES6

// 변수에 기본값 지정하기
const { name, age, skills = "No Skills" } = user1;
console.log(name, age, skills);

const { name: newName, age: newAge, skills: newSkills = "No Skills" } = user2;
console.log(newName, newAge, newSkills);
