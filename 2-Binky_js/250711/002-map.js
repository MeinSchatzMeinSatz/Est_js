// Map: 모든 타입을 키로 사용할 수 있는 객체

// 생성
const emptyMap = new Map();
console.log(emptyMap);
// 값을 추가할 떄 set()

const mapWithData = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
]);
console.log(mapWithData);

// 크기 확인 - 객체와 차이점
// 일반 객체
const obj = {
    name: "위니브",
    number: 1,
};
console.log(obj.length); // undefined
// length 속성이 없음
console.log(Object.keys(obj).length); // 1

// Map 객체
console.log(mapWithData.size);

const myMap = new Map();
myMap.set("name", "Yujin");

// 존재 여부 확인
// Map 객체 - has()
console.log(myMap.has("name"));
console.log(myMap.has("address"));

// 일반 객체 - in 연산자
console.log("name" in obj);
console.log("address" in obj);

// 순회 방법
// Map 객체
for (const [key, value] of myMap) {
    console.log(key, value);
}

myMap.forEach((value, key) => {
    console.log(key, value);
});

// 일반 객체 => Object.keys(), Object.values(), Object.entries()

// 객체 -> map
console.log(obj);
const mapFromObject = new Map(Object.entries(obj));
mapFromObject.set(true, "boolean");
console.log(mapFromObject);

// Map -> 객체
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

// 차이점 정리
/*
1. 키의 타입
- Map: 모든 데이터 타입을 키로 사용
- Object: 문자열
2. 순서 보장
3. 성능 : 대량의 데이터를 처리할 때(수정, 삭제) Map 객체가 성능이 좋음

빈번한 추가와 삭제에 최적화 되어있는 Map
*/
