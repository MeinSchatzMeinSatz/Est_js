// 1. 객체에서 특정 속성 값만 추출
function solution1(friends) {
    return friends.map((item) => item.name);
}

console.log(
    solution1([
        { name: "Irangi", age: 21 },
        { name: "Camel", age: 24 },
        { name: "Mui", age: 19 },
    ])
);

// 2. 객체 배열에서 조건에 맞는 객체 찾기
function solution2(friends) {
    return friends.filter((item) => item.age >= 20)[0];
}

console.log(
    solution2([
        { name: "Irangi", age: 19 },
        { name: "Camel", age: 22 },
        { name: "Mui", age: 25 },
    ])
);

// 3. 중복 제거(유니크 값 추출)
// 중복된 항목이 무엇? -> 해당하는 항목 삭제
// 이거 전혀 모르겠다.
function solution3(colors) {
    let noUnique = [...new Set(colors)];
    // let noUnique = color.filter((v, i, a) => a.indexOf(v) === i)
    return noUnique;
}

console.log(solution3(["red", "blue", "red", "green", "blue"]));

// 4. 객체 배열에서 평균 구하기
function solution4(scores) {
    let scoresArr = scores.map((_, i, a) => a[i].score);
    let average = scoresArr.reduce((acc, cur) => acc + cur) / scoresArr.length;
    return average;
}

console.log(
    solution4([
        { name: "Irangi", score: 80 },
        { name: "Camel", score: 90 },
        { name: "Mui", score: 100 },
    ])
);

// 5. 다단계 변환(객체 배열 -> 이름 + 점수 문자열 배열)
function solution5(scores) {
    let newArr = scores.map((_, i, a) => `${a[i].name}:${a[i].score}`);
    return newArr;
}

console.log(
    solution5([
        { name: "Irangi", score: 80 },
        { name: "Camel", score: 90 },
    ])
);

// 6. 그룹화(카테고리별로 묶기)
// function solution6(friends) {

// }

// console.log(solution6([
//     {name: 'Irangi', hobby: '축구'},
//     {name: 'Camel', hobby: '농구'},
//     {name: 'Mui', hobby: '축구'}
// ]));

// 7. 다중 조건 필터링
function solution7(friends) {
    let footballers = friends.filter((_, i, a) => a[i].hobby === "축구");
    return footballers;
}

console.log(
    solution7([
        { name: "Irangi", age: 21, hobby: "축구" },
        { name: "Camel", age: 19, hobby: "농구" },
        { name: "Mui", age: 22, hobby: "축구" },
    ])
);

// 8. 다중 정렬(여러 기준으로 정렬)
// function solution8(friends) {
//     let friendsOrder = friends.sort((a, b) => )
// }
// console.log(solution8([
//     {name: 'Irangi', age: 21},
//     {name: 'Camel', age: 22},
//     {name: 'Mui', age: 21}
// ]));

// 9. 플랫(flat)과 중첩 배열 펼치기
function solution(hobbies) {
    let flatHobbies = hobbies.flat(1);
    return flatHobbies;
}
console.log(solution([["축구", "농구"], ["야구"], ["수영", "독서"]]));

// 10. 객체 배열에서 최대/최소 찾기⭐️
function solution10(scores) {
    // 여기에 코드를 작성하세요
}
console.log(
    solution10([
        { name: "Irangi", score: 80 },
        { name: "Camel", score: 95 },
        { name: "Mui", score: 70 },
    ])
);
// // babbling
// function solution(babbling) {
//     let speak = ["aya", "ye", "woo", "ma"];
//     return speak.filter((item) => babbling.includes(item));
// }

// console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));

// console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
