// 리터럴 방식

// 패턴: 'abc', 플래그: g(전역 검사)
const reg1 = /abc/g; // abc라는 문자를 global(전역)에서 검색하겠다.
console.log(reg1.test("abc abc abc")); // 문자열 안에 특정한 문자열이 존재하는지 검색
console.log(reg1.test("abb abb abb"));

// 생성자 방식
const reg2 = new RegExp("abc", "g");
console.log("g 플래그 :", "abc Abc ABC, abc".match(reg2));

const reg3 = new RegExp("abc", "gi"); // 대소문자 구분하지 않겠다.
console.log("i 플래그 :", "abc Abc ABC, abc".match(reg3));

console.log("----플래그----");
// 플래그 => 혼합해서 사용할 수 있다.
/*
g(global) : 전역 검색
i(ignore case) : 대소문자 구분 없이 검색
m(multiline) : 여러 줄로 구성된 문자열 검색
=> 각 줄이 개별적으로 인식이 된다.
*/

const text = `abc
Abc
ABC
abc`;

const reg4 = /^abc/gim;
console.log("m 플래그 :", text.match(reg4)); // ['abc', 'Abc', 'ABC', 'abc']

console.log("----메서드----");
/* 메서드
1, test()
*/
let pattern1 = /abc/g;
console.log(pattern1.test("ABC"));
console.log(pattern1.test("abc"));

// 2, exec(): 매칭 결과 상세 정보/ execute
pattern1 = /hello/g;
console.log(pattern1.exec("hello world")); // index: 0
console.log(pattern1.exec("hello world hello weniv")); // index: 12
// g가 없는 경우: indexOf()로 조건에 맞는 첫 번째 인덱스만 출력하는 거랑 비슷한듯.
// g가 있는 경우: 해당하는 조건에 맞는 뒤의 인덱스를 반환

// 3. match() : 일치하는 모든 결과를 배열로 반환
const text2 = "abc ABC Abc";
console.log(text2.match(/abc/gi));
console.log(text2.match(/hello/gi)); // 일치하는 값이 없으면 null

// 4. search(): 정규표현식에 일치하는 첫번쨰 인덱스 반환
console.log(text2.search(/ABC/g));
console.log(text.search(/xyz/)); // 일치하는 값이 없으면 -1

// 5. replace(): 일치하는 부분을 지정한 문자열로 치환
console.log("Hello World Hello Weniv".replace(/Hello/g, "Nice to meet you"));

console.log("----패턴----");
// 패턴: 우리가 찾고자 하는 문자열 규칙
// 1. 기본문자
const text3 = "abc ABC 가나다 1234 !@#";

// 소문자: /[a-z]/ : 문자 집합을 사용한다.
console.log(text3.match(/[a-z]/g));
console.log(text3.match(/a-z/g)); // null

// 대문자: /[A-Z]/
console.log(text3.match(/[A-Z]/g));

// 한글: [거-힣], 한글 음절 범위
console.log(text3.match(/[가-힣]/g));

// 숫자: [0-9]
console.log(text3.match(/[0-9]/g));

// 2. 이스케이프 패턴
let testText = `abc ABC 가나다 
1234 !@#_`;

console.log("모든 문자(.) :", testText.match(/./g));
console.log("숫자(\\d) :", testText.match(/\d/g));
console.log("단어문자(\\w) :", testText.match(/\w/g)); // 영문자, 숫자, 밑줄(_)
console.log("공백문자(\\s) :", testText.match(/\s/g)); // 스페이스, 탭, 줄바꿈
console.log("단어 경계(\\b) :", testText.match(/\b/g)); // 단어-비단어 경계

// 대문자로 나타내면 반대의 의미를 가집니다.
console.log("숫자 제외 모든 문자(\\D) :", testText.match(/\D/g));
console.log("단어문자 제외 모든 문자(\\W) :", testText.match(/\W/g));
console.log("공백문자 제외 모든 문자(\\S) :", testText.match(/\S/g)); // split()과 유사
console.log("단어 경계에 있지 않은 모든 문자(\\B) :", testText.match(/\B/g));

// 위치 문자
let exampleText2 = "Example\nexample";
console.log(exampleText2);

// 문자열의 시작(^)
console.log(exampleText2.match(/^E/g));
console.log(exampleText2.match(/^e/gm)); // 멀티라인 사용하여 해결

// 문자열의 끝($)
console.log(exampleText2.match(/e$/));
console.log(exampleText2.match(/e$/gm)); // 문자 뒤에 공백이 있으면 ... 인식 안됨

// 수량 패턴
let repeatText = "abc aabbcc aaabbbccc aaaabbbbcccc";
// ?: 앞의 문자열이 0개 이거나 1개인 경우
console.log(repeatText.match(/a?b/g));
// ['ab', 'ab', 'b', 'ab', 'b', 'b', 'ab', 'b', 'b', 'b']

// + :앞의 문자열이 1개 이상인 경우
console.log(repeatText.match(/a+b/g));
// ['ab', 'aab', 'aaab', 'aaaab']

// *: 앞의 문자열이 0개 이상
console.log(repeatText.match(/a*b/g));
// ['ab', 'aab', 'b', 'aaab', 'b', 'b', 'aaaab', 'b', 'b', 'b']

// a{2} => aa
// a{2, } => aa, aaa, aaaa
// a{2, 4} => aa, aaa, aaaa

// OR 연산(|)
console.log(repeatText.match(/a{2}|b{2}/g));
// a가 혹은 b가 2번 반복되는 경우

// () :서브패턴
// [] :문자집합:
let message = "i love cat and dog";
console.log(message.match(/(cat|dog)/g)); // cat / dog이라는 덩어리를 가져오겠다. -> cat , dog
console.log(message.match(/[cat|dog]/g)); // 한 글자 한 음절로 쪼개서 가져오겠다. o, c, a, t, a, d, d, o, g

// 활용
// 1. 해시태그 추출하기
let post =
    "#개발 강의는 역시 $위니브! #오르미 6기 #최고 #개발자 #프론트엔드 #front_end";
// 태그: 영문자, 숫자, 한글, 밑줄 => 한글 + 단어 패턴
let hashtagPattern = /#[가-힣\w]+/g;
// ['#개발', '#오르미', '#최고', '#개발자', '#프론트엔드', '#front_end']
let hashtags = post.match(hashtagPattern);
console.log(hashtags);

let cleanHashtags = hashtags.map((tag) => tag.replace("#", ""));
console.log(cleanHashtags);

// 2. 여러 개의 공백을 하나로 줄이기
let spaceText = "     Hello    World    Hello   weniv";
let spacePattern = /\s+/g; // 1개 이상의 공백을 검색하는 정규표현식
console.log(spaceText.match(spacePattern)); // 연속된 공백을 하나의 공백으로 변경/치환
console.log(spaceText.replace(spacePattern, " ").trim()); // 앞, 뒤 공백 제거
//  Hello World Hello weniv

// 3. 전화번호 포멧 검사하기
// 010-1234-5678 => /^\d{2, 3}-\d{3, 4}-\d{4}$/
const numberPattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
console.log(numberPattern.test("010-1111-2222"));
console.log(numberPattern.test("02-1111-2222"));
console.log(numberPattern.test("070-1111-2222"));
console.log(numberPattern.test("0700-1111-2222"));

// 4. 이메일 형식
// 아이디@url.com =>
// id : 영문자, 숫자, 마침표(\.), 밑줄, 6자 이상 => [a-zA-Z0-9_]{6,}
// 도메인 이름 : 영문자, 하이픈, 3자 이상 => ([a-zA-Z0-9\-]{2,}\.)+
// 점: \.
// 최상위 도메인 => [a-z]{2,4}

// /^[a-zA-Z0-9_]{6,}@([a-zA-Z0-9\-]{2,}\.)+[a-z]{2,4}$/
const emailPattern = /^[a-zA-Z0-9_]{6,}@([a-zA-Z0-9\-]{2,}\.)+[a-z]{2,4}$/;
console.log(emailPattern.test("test123@weniv.com"));
console.log(emailPattern.test("test123@weniv.co.kr"));
