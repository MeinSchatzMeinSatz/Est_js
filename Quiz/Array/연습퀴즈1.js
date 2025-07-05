// 1. filter로 짝수만 추출
const arr = [1, 2, 3, 4, 5, 6];
let evenArr = arr.filter((item) => item % 2 === 0);

console.log(evenArr);

// 2. map으로 각 요소 제곱 만들기
let squared = arr.map((item) => item ** 2);

console.log(squared);

// 3. sort로 내림차순 정렬
let sorted = arr.sort((a, b) => b - a);
console.log(sorted);

// 4. reduce로 모든 합 구하기
let reduced = arr.reduce((acc, cur) => acc + cur, 0);

console.log(reduced);

// 5. find로 10보다 큰 첫번째 값 찾기
let arr2 = [3, 7, 12, 5, 20];
let found = arr2.find((item) => item > 10);
console.log(found);

// 6. some으로 0 작은 값이 있는지 확인
let arr3 = [3, -1, 5, 7];
let someNumber = arr3.some((item) => item < 0);

console.log(someNumber);

// 7. every로 모두 3보다 큰지 확인
const arr4 = [4, 5, 6];
let everyNumber = arr4.every((number) => number > 3);

console.log(everyNumber);

// 8. includes로 특정 값 포함 여부 확인
let includesNumber = arr2.includes(7);

console.log(includesNumber);

// 9. forEach 로 모든 요소 출력
const arr5 = ["a", "b", "c"];
const foreacharr = arr5.forEach((item) => {
    console.log(item);
});

// 10. filter와 map의 조합.
const arr6 = [2, 5, 8, 1, 10];
const filterMapNumber = arr6.filter((item) => item > 5).map((item) => item * 2);

console.log(filterMapNumber);
