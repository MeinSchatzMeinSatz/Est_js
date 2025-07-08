// 7. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.
const person1 = { name: "Ghost", hobby: "football" };

const upper = Object.entries(person1).reduce((acc, [key, value]) => {
    acc[key.toUpperCase()] = String(value).toUpperCase;
    return acc;
}, {});

// 10. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.
const users = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 19 },
    { name: "Irangi", age: 22 },
];
