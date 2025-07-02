// 1. filter로 짝수만 추출
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter((item) => !(item % 2)));

// 2. map으로 각 요소 제곱 만들기
const arr1 = [1, 2, 3, 4];

console.log(arr1.map((item) => item ** 2));
console.log(arr1.map((item) => Math.pow(item, 2)));
console.log(arr1.map((item) => item * item));

// 3. sort()로 내림차순 정렬
const arr2 = [5, 2, 9, 1];

console.log(arr2.sort((a, b) => b - a));

// 4. reduce로 모든 값의 합 구하기
const arr3 = [1, 2, 3, 4, 5];

console.log(arr3.reduce((acc, cur) => acc + cur));

// 5. some으로 0보다 작은 값이 있는지 확인
const arr4 = [3, -1, 5, 7];

console.log(arr4.some((item) => item < 0));

// 6. every로 모두 3보다 큰지 확인
const arr5 = [4, 5, 6];

console.log(arr5.every((item) => item > 3));

// 7. forEach 로 요소 출력
function solution(names) {
    names.forEach((name) => {
        console.log(name);
    });
}
solution(["Irangi", "Camel", "Shoopa"]);

function solution2(names) {
    names.forEach((name) => {
        return name;
    });
}

console.log(solution2(["Irangi", "Camel", "Shoopa"]));

// 8. filter와 map의 조합
function solution1(scores) {
    return scores.filter((item) => item > 60).map((item) => item * 2);
}

console.log(solution1([50, 60, 70, 80]));

// 9. filter로 모음 제거

function solution3(my_string) {
    let vowels = ["a", "e", "i", "o", "u"];

    return my_string
        .split("")
        .filter((item) => !vowels.includes(item))
        .join("");
}

console.log(solution3("beautiful"));

// 10. for문을 사용해 1부터 5까지 출력하세요.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 11. for 문으로 1~10 중 3의 배수만 배열에 담아 출력하세요.

let numbers3 = [];

for (let i = 1; i <= 10; i++) {
    numbers3[i] = i;
}

console.log(numbers3.filter((item) => item % 3 === 0));
