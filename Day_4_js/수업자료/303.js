// reduce() 누적연산을 하는 의미
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, cur) => acc + cur, 0);
// <첫번째 인수> acc -> 누적값, cur -> 현재값 : 한 번씩 접근
// <두번째 인수> 초깃값 -> 생략가능

console.log(total);

// 1 ~ 100
const numbers2 = [10, 23, 15, 3, 2, 12, 30, 42, 50];
// 홀수번째 인덱스만 더한 결과를 출력하시오.

const oddIndex = numbers2.filter((num, index) => index % 2 === 0);
const sumOddIndex = oddIndex.reduce((acc, cur) => acc + cur);

console.log(oddIndex);
console.log(sumOddIndex);

const arr1 = [];
const arr2 = new Array();

console.log(arr2);

// 1부터 10까지 [1,2,3,4,5,6,7,8,9,10] 배열 만들기
const arr = Array(10)
    .fill(0)
    .map((_, i) => i + 1);

console.log(arr);

function sumNumbers(number) {
    const sum = Array(number)
        .fill(0)
        .map((_, i) => i + 1)
        .reduce((acc, cur) => acc + cur);

    return sum;
}

console.log(sumNumbers(100)); // 1~100까지 더한 값
console.log(sumNumbers(50)); // 1~50까지 더한 값
console.log(sumNumbers(1000000));
