// 1. 문자열에서 특정 문장의 위치(indexOf) 찾기
const str = "vectar.";

console.log(str.indexOf("a"));

// 2. 문자열에 특정 단어가 포함되어 있는지(includes) 확인하기
console.log(str.includes("n"));

// 3. 문자열에서 특정 위치의 문자(charAt) 가져오기
console.log(str.charAt("2"));

// 4. 문자열의 일부를 추출하기(slice)
console.log(str.slice(2, 4));

// 5. 문자열 반복(repeat)하기
console.log(str.repeat(3));

// 6. 문자열 양 끝 공백 제거(trim)하기
const str2 = "    Hello  World   ";

console.log(str2.trimStart().trimEnd());

// 7. 문자열을 대문자 / 소문자로 변환(toUpperCase / to LowerCase)

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 8. 문자열을 배열로 분리(split)하기

console.log(str.split(""));

// 9. 문자열 일부를 다른 문자열로 바꾸기(replace)

console.log(str.replace("a", "o"));
console.log(str.replace("a", "e"));

// 10. 문자열의 길이(length) 구하기
//  -> 프로퍼티 속성임에 유의

console.log(str.length);

// 11. 문자열이 특정 문자로 끝나는지(endsWith) 확인하기

console.log(str.endsWith("."));

// 12. 문자열이 특정 문자로 시작하는지(startWith) 확인하기

console.log(str.startsWith("c"));

// 13. 문자열의 일부를 추출(substring)하기

console.log(str.substring(3, 5));

// 14. 문자열 앞을 0으로 채우기(padStart)
// 15. 문자열 뒤를 특정 문자로 채우기(padEnd)

const numStr = "34";
const str4 = "이채준";

console.log(numStr.padStart(3, "0"));
console.log(str4.padEnd(5, "🇰🇷"));

// 16. 두 문자열을 합치기
console.log(numStr.concat(str4));

// 17. 정규표현식으로 문자열에서 패턴 찾기(match)
// 오 이거 유용할 듯
// string.match("패턴 문자열");
const str5 = "The rain in SPAIN stays mainly in the plain";

console.log(str5.toLowerCase().match("ain"));

// 18. 정규표현식으로 문자열에서 패턴 위치 찾기(search)
// 하나만 찾넹...

console.log(str5.search("ain"));

// 19. 문자열의 모든 일치 항목 바꾸기(replaceAll)

console.log(str5.toLowerCase().replaceAll("ain", "abc"));

// 20. 문자열 비교(localeCompare)로 정렬 기준 만들기
// ?
