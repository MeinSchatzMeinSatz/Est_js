var hello = {
    greet: "hello world",
};

var hi = {
    greet: "hello world",
};

// 동등 비교를 하면 false가 나온다.
console.log(hello === hi);

// 원시값인 내부 속성값을 비교하면 동일하다.
console.log(hello.greet === hi.greet);

hello.greet = "something";

console.log(hello.greet === hi.greet);

/* Object.is */
console.log("Object.is");
console.log(-0 === +0);
console.log(Object.is(-0, +0));

console.log(Number.NaN === NaN);
console.log(Object.is(Number.NaN, NaN));

console.log(NaN === 0 / 0);
console.log(Object.is(NaN, 0 / 0));
