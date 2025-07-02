function calc(a, b) {
    // const sum = a+b;
    // const div = a/b;
    return [a + b, a / b];
}

const array = calc(10, 2); // [12, 5]
console.log(array);

const [sum, div, multiply = "No multiply", diff = "No diff"] = calc(15, 3);
console.log(sum, div, multiply, diff);
