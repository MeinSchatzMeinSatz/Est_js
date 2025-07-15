const parent = document.getElementsByClassName("parent")[0];
// getElementByClassName 배열로 전환 => article
// console.log(document.getElementsByClassName("parent"));

const img = parent.getElementsByTagName("img")[0];
const figCap = parent.querySelector(".figCap");

console.log(parent);
console.log(img);
console.log(figCap);

// document.querySelector -> 좀 더 넓은 범위에서 탐색하게 됨 -> 성능에서 비효율적일 수 있다.

const figure = parent.firstElementChild;
const img2 = figure.firstElementChild;
const figCap2 = figure.lastElementChild;

console.log(figure);
console.log(img2);
console.log(figCap2);

img2.src =
    "https://miro.medium.com/v2/resize:fit:720/format:webp/1*nZaiJiMSPGsLGp9oiUoWsA.png";
figCap2.textContent = "개리는 무엇을 먹을지 고민합니다.";

// 고정된 구조, 바뀔 가능성이 없을 때 => 성능에 유리하다.
// 탐색 범이가 적기 때문에 빠르다! 성능이 약간 더 좋다.

// 리스트가 많아질수록(내부 콘텐츠가 복잡해질수록) 성능 차이가 체감됩니다!!!!
