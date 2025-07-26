// DocumentFragment: 메모리 상태에만 존재하는 가짜 DOM 트리 : 메모리 상의 임시 저장소 역할을 한다.
const itemList = document.getElementById("item-list");

// 메모리 상에만 존재하는 가짜 DOM 컨테이너만들기
const docFrag = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    // itemList.appendChild(li)
    docFrag.appendChild(li);
}

// 마지막에 한 번만 실제 DOM에 추가
itemList.appendChild(docFrag);
