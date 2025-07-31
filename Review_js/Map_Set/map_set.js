/*
차이점 정리

1. 키의 타입
- Map: 모든 데이터 타입을 키로 사용
- Object: 문자열
2. 순서 보장
3. 성능 : 대량의 데이터를 처리할 때(수정, 삭제) Map 객체 성능이 좋음

빈번한 추가와 삭제에 최적화 되어있는 Map
*/

// Map: 모든 타입을 키로 사용할 수 있는 객체

// 생성
const emptyMap = new Map();
console.log(emptyMap);
// 값을 추가할 때 set()

const mapWithData = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
]);
console.log(mapWithData);

/* 크기 확인 - 객체와 차이점 */
// 일반 객체
const obj = {
    name: "위니브",
    number: 1,
};
console.log(obj.length); // undefined
// 객체에는 length 속성이 없음
console.log(Object.keys(obj).length); // 2

// Map 객체 -size

const myMap = new Map();
myMap.set("name", "Yujin");

/* 존재 여부 확인 */
// Map 객체 - has()
console.log(myMap.has("name"));
console.log(myMap.has("address"));

// 일반 객체 - in 연산자
console.log("name" in obj);
console.log("address" in obj);

/* 순회 방법 */
// Map 객체
for (const [key, value] of myMap) {
    console.log(key, value);
}

myMap.forEach((value, key) => {
    console.log(key, value);
});

// 일반 객체
// => Object.keys(), Object.values(), Object.entries()

// 객체 -> Map : Object.entries
console.log(obj);
const mapFromObject = new Map(Object.entries(obj));
mapFromObject.set(true, "boolean");
console.log(mapFromObject);

// Map -> 객체 : Object.fromEntries
// 2차원 배열(키-값 목록) => 객체로 변환
const newObject = Object.fromEntries(mapFromObject);
console.log(newObject);

// Map 객체 : 추가시 순서 보장
const map = new Map();
map.set("b", 2);
map.set(1, "one");
map.set("a", 1);
console.log(map);

// 객체 : 추가시 순서 보장이 안됨
const obj2 = {};
obj2["b"] = 2;
obj2[1] = "one";
obj2["a"] = 1;
console.log(obj2);

// Set: 중복되지 않은 값만 저장하는 집합

const set1 = new Set([1, 1, 3, 4, 5, 6]);
console.log(set1);
console.log([...set1]);

const strSet = new Set("Hello World");
console.log(strSet);

// 크기 확인
console.log(set1.size);

// 인덱스로 접근하기
// 일반 배열
const arr = [1, 2, 3, 4, 5];
console.log(arr[1]);
console.log(set1[0]); // undefined - 인덱스 접근이 불가
// set: 순서는 보장이 되지만, 인덱스로 접근이 불가능한 구조.

// 값 존재 확인
// 일반 배열
console.log(arr.includes(3));
console.log(arr.includes(7));

// Set -> 이게 성능이 좋음
// const set1 = new Set([1, 1, 3, 4, 5, 6]);
console.log(set1.has(4));
console.log(set1.has(7));

// Set -> arr => 변형이 될 때 중복이 제거가 된다.
const arrFromSet = Array.from(set1);
console.log(arrFromSet);
console.log([...set1]);

// arr -> Set
const arr1 = [1, 1, 1, 1, 4, 4, 4, 3, 3, 2];
const unique = new Set(arr1);
console.log(unique);

// 자주 사용하는 경우
// 배열 -> Set -> 배열로 변경하는 경우 중복제거
const set2 = [...new Set(arr1)];
console.log(set2);

// 사용자가 선택한 태그들에서 중복 제거
const selectedTag = [
    "JavaScript",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "HTML",
    "CSS",
];

const uniqueTags = [...new Set(selectedTag)];
console.log(uniqueTags);

// 집합
const setA = new Set(["apple", "banana"]);
const setB = new Set(["banana", "Kiwi", "StrawBerry"]);

// 1. 합집합 => set 변환되면서 중복 제거
// ["apple", "banana", "banana", "Kiwi"]
const unionSet = new Set([...setA, ...setB]);
console.log("합집합 :", unionSet);

// 2. 교집합
const intersectionSet = new Set([...setA].filter((el) => setB.has(el)));
console.log("교집합 :", intersectionSet);

// 3. 차집합
// 3-1. setA에는 있지만, setB에는 없는 요소
const diffSet = new Set([...setA].filter((el) => !setB.has(el)));
console.log(diffSet);

// 3-2. setB에는 있지만, setA에는 없는 요소
const diffSet2 = new Set([...setB].filter((el) => !setA.has(el)));
console.log(diffSet2);

// 순서, 중복
/*
1. Set
- 중복 제거가 필요할 때
- 순서보다는 고유성이 중요
- 성능 : has()

2. Array
- 중복이 필요할 때
- 인덱스 접근이 필요할 때
*/
