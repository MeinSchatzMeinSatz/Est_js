// 01. heights에서 ghost 보다 키가 큰 사람이 몇명인지 출력하시오.
const heights = [150, 169, 185, 170];
const ghost = 167;

const tallerGhost = heights.filter((person) => person > ghost);
console.log(tallerGhost.length);

// 02. words 중에서 단어에 l자가 들어있는 단어만 배열로 저장하시오.
// 조건, 대소문자 상관없이 모두 찾아야함.
const words = ["hello", "ghost", "apple", "grape", "Lemon"];

const lWord = words.filter((word) => word.toLowerCase().includes("l"));

console.log(lWord);
