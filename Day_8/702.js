// 몇초에 한 번 반복하겠다.

function sayHello(name) {
    console.log(`Hello ${name}`);
}

const timerId = setInterval(sayHello, 1000, "Ghost");
// clearInterval(timerId);
setTimeout(clearInterval, 5000, timerId);

function sayBye(name) {
    console.log(`Goodbye, ${name}`);
}

// 3초 후에 sayBye 실행
const timer = setTimeout(sayBye, 3000, "Ejey");
clearTimeout(timer);
