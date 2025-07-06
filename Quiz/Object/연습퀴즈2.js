// 1. users 배열에서 몯근 사용자의 이름만 배열로 출력하세요.
const users = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];

users.forEach((item) => {
    console.log(item.name);
});
