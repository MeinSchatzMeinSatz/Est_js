const arr = [10, 20, 30, 40, 50];

// find
const bigger20 = arr.find((x) => x >= 20);
console.log(`20이상의 수는 ${bigger20}`);

const bigger30 = arr.findIndex((x) => x >= 30);
console.log(`30이상의 수는 ${bigger30}`);

const bigger40 = arr.find(function (x) {
    return x >= 40;
});
console.log(`40이상의 수는 ${bigger40}`);

const numbers = [15, 20, 17, 3, 80];
// find를 이용해서 20이상의 수를 추출하시오.

console.log(
    numbers.find(function (x) {
        return x >= 20;
    })
);

const over20 = numbers.filter((number) => number >= 20);
console.log(over20);

// numbers에서 홀수를 모두 찾아내시오.
const oddNumbers = numbers.filter((oddNumber) => oddNumber % 2 === 1);
console.log(oddNumbers);

// filter -> 검색기(조건에 맞는 값만 반환)

// map -> 조건을 적용해서 새로운 배열로 반환
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

// number 는 함수 안의 파라미터로서, 배열 안의 인자들을 하나하나 함수에 대입한다.
