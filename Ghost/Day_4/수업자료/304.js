// flat()
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr);

// sort() : 오름차순, 내림차순 정렬
const users = ["Daniel", "Don", "donald", "Michael", "Juliet"];
users.sort();
console.log(users);

const numbers = [31, 2, 12, 1, 22, 5];

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

// some(), every() => and / or 조건과 유사
const numbers2 = [1, 2, 3, 4, 5];

// some() 결과값이 하나라도 true -> true
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);

// every() 결과값이 모두 true -> true
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);

// 콜백함수
// reduce( reducer 리듀서 )
// filter (true, false -> predicate 함수) -> Boolean값 반환 : some, every,
// map (mapping function)

// users에 'Amy'가 포함되어 있는지 확인.
console.log(users.some((user) => user === "Amy"));

// numbers에서 3보다 큰 값이 있는지 확인
console.log(numbers.some((num) => num > 3));

const fruits = ["apple", "banana", 3];
// fruits변수 안에 들어있는 값이 모두 문자열인지 확인
console.log(fruits.every((fruit) => typeof fruit === "string"));

// 4. 이메일형식이 모두 맞는지 확인 (@와 .이 반드시 있어야 함) every
const emails = ["text@example.com", "hello@domain.com", "user@site.org"];

console.log(
    emails.every((email) => email.includes("@") && email.includes("."))
);

console.clear();
const arr2 = [3, 4];
console.log(Array.isArray(arr2));
