const user = { name: "ghost", age: 1000 };

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("mbti"));

// Object.hasOwn(obj, key) => 이걸 자주 사용
console.log(Object.hasOwn(user, "name"));
console.log(Object.hasOwn(user, "mbti"));
