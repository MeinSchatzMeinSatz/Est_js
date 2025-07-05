// 1. filter로 짝수만 추출
function solution(ages) {
    let evenAges = ages.filter((item) => item % 2 === 0);
    return evenAges;
}

console.log(solution([21, 24, 30, 17, 18]));

// 2. map으로 제곱 구하기
function solution2(scores) {
    let squared = scores.map((item) => item ** 2);
    return squared;
}

console.log(solution2([2, 3, 4]));

// 3. sort로 내림차순 정렬
function solution3(times) {
    let sortTimes = times.sort((a, b) => b - a);

    return sortTimes;
}

console.log(solution3([12, 5, 8, 20]));

//4. reduce로 합 구하기
function solution4(candies) {
    let reduceCandies = candies.reduce((acc, cur) => acc + cur);

    return reduceCandies;
}

console.log(solution4([1, 2, 3, 4]));

// 5. find로 특정 값 찾기
