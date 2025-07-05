// 2. map으로 대문자 변환
function solution2(names) {
    return names.map((item) => item.toUpperCase());
}

console.log(solution2(["Irangi", "Camel", "Mui"]));

// 3. sort로 알파벳순 정렬
function solution3(names) {
    return names.sort();
}

// 이거 말고 머 다른 거 있었는데, 뭐였더라 =>localeCompare
console.log(solution3(["Shoopa", "Camel", "Mui"]));

// 4. reduce로 글자 수 합계
function solution4(names) {
    return names.reduce((acc, cur) => acc + cur.length, 0); // 이렇게 하면 활용도가 더 좋은듯
}

console.log(solution4(["Irangi", "Camel", "Mui"]));

// 5. find로 5글자 이상되는 첫번째 요소 출력
function solution5(names) {
    return names.find((item) => item.length >= 5);
}
console.log(solution5(["Mui", "Camel", "Shoopa", "Liang"]));

// 6. some으로 'a' 포함 여부 확인
function solution6(names) {
    return names.some((item) => item.includes("a"));
}

console.log(solution6(["Mui", "Camel", "Shoopa"]));

// 7. every로 모두 대문자인지 확인
function solution7(names) {
    return names.every((item) => (item = item.toUpperCase()));
}
console.log(solution7(["IRANGI", "CAMEL", "MUI"]));

// 8. includes로 "Nuvis" 포함여부 확인
function solution8(names) {
    return names.includes("Nuvis");
}

console.log(solution8(["Irangi", "Nuvis", "Mui"]));

// 9. forEach로 이름 출력
function solution9(names) {
    return names.forEach((name) => {
        console.log(name);
    });
}

solution9(["Irangi", "Camel", "Mui"]);

// 10. filter 와 map 조합 : 배열에서 5글자 이상인 이름만 소문자로 출력
function solution10(names) {
    return names
        .filter((name) => name.length >= 5)
        .map((name) => name.toUpperCase());
}

console.log(solution10(["Irangi", "Camel", "Mui", "Shoopa"]));
