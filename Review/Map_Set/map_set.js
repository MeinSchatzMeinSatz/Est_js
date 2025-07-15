// Map: 모든 타입을 키로 사용할 수 있는 객체
// 생성
const emptyMap = new Map();
console.log(emptyMap);

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
// length 속성이 안됨
console.log(Object.keys(obj).length); // 2

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

// 일반 객체 => Object.keys(), Object.value(), Object.entries()

// 객체 -> Map
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
