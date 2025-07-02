// 함수 선언식 :sum
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5)); // 결과가 리턴

// 함수 표현식 (function 키워드)
const sayHello = function (name) {
    return `Hello ${name}`;
};
console.log(sayHello("Ghost"));

//함수 표현식 (화살표 함수)
const getBig = (arr) => {
    return `${Math.max(...arr)} is a Big number`; // 스프레드 문법 헷깔려
};

console.log(getBig([3, 5, 10, 12]));

//
