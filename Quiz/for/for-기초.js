// 1. for문을 사용해 1부터 5까지 출력하세요.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*for in 과 for of 의 차이점
for in: 객체 순회에 적합.
for of: 배열 순회에 적합
*/

// 2. for... of 문으로 배열의 모든 값을 출력하세요.
const arr = [10, 20, 30];
for (let num of arr) {
    console.log(num);
}

// 3. for... in 문으로 객체의 모든 key를 출력하세요.
const obj = { a: 1, b: 2 };
for (let key in obj) {
    console.log(key);
}

// 4. forEach로 배열의 값을 모두 2배로 출력하세요.
const newArr = arr.forEach((item) => {
    console.log(item * 2);
});

// 5. for문으로 1~10 중 짝수만 출력하세요.
for (let i = 1; i <= 10; i++) {
    if (!(i % 2)) {
        console.log(i);
    }
}

// 6. for... of문으로 문자열의 모든 문자를 한 줄씩 출력하세요.
const str = "abc";
for (let a of str) {
    console.log(a);
}

// 7. for... in 문으로 객체의 value만 출력하세요.
for (let key in obj) {
    console.log(obj[key]);
}

// 8. forEach로 배열의 인덱스와 값을 함께 출력하세요.
const arr2 = ["a", "b", "c"];

arr2.forEach((item, idx) => {
    console.log(idx, item);
});

// 9. for문으로 5부터 1까지 역순으로 출력하세요.
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// 10. forEach로 배열의 모든 값을 대문자로 출력하세요.
arr2.forEach((item) => {
    console.log(item.toUpperCase());
});
