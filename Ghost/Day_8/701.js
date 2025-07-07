function print() {
    console.log("3초후에 실행되는 print 함수");
}
print();
// 비동기 함수 setTimeout : 내가 지정한 시간 이후에 매개변수로 들어온 함수를 실행하겠다.
// 기다렸다가 나중에 실행할떄 사용
// setTimeout(print, 3000);

console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 0);
console.log(3);

console.clear();

function sayHello(name) {
    console.log(`Hello, ${name}`);
}
setTimeout(sayHello, 3000, "Ghost");
setTimeout(sayHello, 4000, "Irangi");
