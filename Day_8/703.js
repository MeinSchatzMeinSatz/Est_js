// 1초에 한 번씩 hello 찍기
// setInterval(() => console.log("hello"), 1000);

// 현재시각
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());
// setInterval(() => console.log(new Date().toLocaleTimeString()), 3000);

let count = 0;

// setInterval(() => {
//     count += 1;
//     console.log(`Count : ${count}`);
// }, 500);

// 4. 1초마다 배열에 있는 것을 순서대로 출력
const news = [
    "코딩수업 마지막 날",
    "JavaScript 최고",
    "그동안 즐거웠다",
    "끝까지 버티기",
];
let index = 0;

// setInterval(() => {
//     console.log(news[index]);
//     index = (index + 1) % news.length; // 이렇게 인덱스가 나오는 식을 따로 쓸 것.
// }, 1000);

// 1초에 한번씩 Hello가 찍히다가, 3초 후에는 멈추기
// let sayHello = setInterval(() => console.log("hello"), 1000);
// setTimeout(clearInterval, 3000, sayHello);

// const printHello = setInterval(() => console.log("hello"), 1000);
// setTimeout(clearInterval, 3000, printHello);

// 1초마다 1~5까지 출력한 후 멈추기 -> count 변수 감시...
let count1 = 0;
const printCount = setInterval(() => {
    console.log(count1);
    if (count1 === 5) {
        clearInterval(printCount);
    }
    count1++;
}, 1000);
