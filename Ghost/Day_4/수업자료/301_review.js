const numbers = [51, 20, 12, 5, 2];

// 01. numbers의 절반값을 구하시오. 단, 정수로

const halfNumbers = numbers.map((item) => parseInt(item / 2));

console.log(halfNumbers);

// 02. numbers에서 15 미만인 숫자를 모두 구하시오.
const under15 = numbers.filter((item) => item < 15);

console.log(under15);

// 03. number에서 15보다 작은 첫 번째 수를 구하시오.
const under15First = numbers.find((item) => item < 15);

console.log(under15First);

//  03.5 str에서 '5'가 몇개인지 출력하기 -> 2
const str = "15352";
console.log(str.split("").filter((item) => item === "5").length);

// 04. number2에서 전체적으로 '5'가 몇개 있는지 구하시오.
const numbers2 = [153, 7, 55];

const findNumber5 = numbers2
    .map(String)
    .join("")
    .split("")
    .filter((number) => number === "5").length;

console.log(findNumber5);

// 05. users에서 'd'자가 들어간 이름만 배열로 반환할 것.
// includes, toUpperCase, toLowerCase

const users = ["Daniel", "Don", "donald", "Michael", "Juliet"];
const usersD = users
    .map((item) => item.toLowerCase())
    .filter((item) => item.includes("d"));

const includeD = users.filter((user) => user.toUpperCase().includes("D"));

console.log(usersD);
console.log(includeD);

// 06. 머쓱이네 양꼬치
// function yangKochi(n, k) {
//     return n * 12000 + (k - Math.floor(n / 10)) * 2000;
// }

// console.log(yangKochi(10, 3));

function yangKochi(n, k) {
    const discount = Math.trunc(n / 10) * 2000;
    const price = n * 12000 + k * 2000;

    return price - discount;
}

console.log(yangKochi(10, 3));
