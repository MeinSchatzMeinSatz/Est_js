const target = document.getElementById("target");
// 감시 대상

// 어떤 변화에 반응할지 설정
const config = {
    attributes: true,
    childList: true, // 자식 요소 감지
    subtree: true, // 하위 모든 요소 감지
    characterData: true, // 텍스트 노드의 내용이 바뀌면 감지
};
// => 필요한 옵션만 켜서 불필요한 감지 비용을 줄여야 합니다.

// element.classList.add("active")
// ul <- li
// textContent

// mutationList : 감지된 변화들을 담는 배열
const callback = (mutationList) => {
    for (const mutation of mutationList) {
        console.log(mutation);
        console.log("변화 타입:", mutation.type);
    }
};

const observer = new MutationObserver(callback);
observer.observe(target, config);

// ============= 변화 ============
for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    target.appendChild(li);
}

target.classList.add("target");

// 감시를 멈추고 싶을때
// observer.disconnect();

/*
- setInterval 같은 무조건 반복 방식보다 훨씬 효율적!
- 변화가 있을 때만 실행되므로 CPU 낭비를 줄입니다.
- 실시간 UI 반응에 매우 적합
- 설정값(config)을 잘 조절하면 원하는 변화만 감지할 수 있다.
*/
