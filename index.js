const drinkMenu = {
    espresso: 2000,
    americano: 2500,
    latte: 3000,
    chocolateLatte: 4000,
    matchaLatte: 4000,
};

const cupSize = {
    small: 0,
    medium: 1000,
    large: 2000,
};

const count = {
    one: 1,
    two: 2,
    three: 3,
};

const coffee = "americano";
const size = "medium";
const number = "two";

console.log(
    `총 비용은 ${(drinkMenu[coffee] + cupSize[size]) * count[number]}원 입니다.`
);
