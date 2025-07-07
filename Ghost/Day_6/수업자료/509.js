// Object.assign({} : target, 복사할 객체) -> 얕은 복사
// 겉의 껍데기만 복사

const user = { name: "Ghost", age: 1000 };
const newUser = user;
const newUser1 = Object.assign({ name: "Irangi", bloodType: "B" }, user);

newUser.mbti = "INFJ";

console.log(user, newUser);
console.log(user === newUser); //  True => 이를 참조복사라 한다.

console.log(user, newUser1);
console.log(user === newUser1); // False => 이게 제대로 된 복사
// 키 값이 같은 건 덮어쓰고, 새로운 키값은 추가된다.

const obj = { name: "Apple" };
obj.name = "Mango";
obj.age = 1000;
console.log(obj);

console.clear();

const user2 = {
    name: "Ghost",
    age: 1000,
    pets: { dog: "Bobby", parret: "Cherry" },
};
// user2를 newUser2로 복사해서, age를 500으로 변경해보세요.
const newUser2 = Object.assign({}, user2);
newUser2.age = 500;

console.log(user2, newUser2);
console.log(user2 === newUser2); // false

// 복사가 잘 됬으니 dog 의 이름을 바꾸기
newUser2.pets.dog = "Bombi";

console.log(user2.pets.dog, newUser2.pets.dog);
console.log(user2.pets.dog === newUser2.pets.dog); // true
// 객체 안의 객체는 여전히 같네?

// 깊은 복사 : JSON.parse
console.log(user2);
console.log(JSON.stringify(user2));

const newUser3 = JSON.parse(JSON.stringify(user2));
console.log(typeof newUser3, newUser3);

newUser3.pets.parret = "Alpha";
console.log(user2.pets.parret, newUser3.pets.parret);
console.log(user2.pets.parret === newUser3.pets.parret); // false
