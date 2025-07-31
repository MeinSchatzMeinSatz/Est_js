// DOM 요소 선택
const memoForm = document.getElementById("memo-form");
const titleInput = document.getElementById("title-input");
const contentInput = document.getElementById("content-input");
const memoList = document.getElementById("memo-list");

// 전역 변수 선언
let memoData = [];
const MEMO_KEY = "memo";

// TODO 1: 페이지 로드 시 로컬스토리지에서 데이터 불러오기
function loadMemoStorage() {
    const savedMemo = localStorage.getItem(MEMO_KEY);
    if (savedMemo) {
        memoData = JSON.parse(savedMemo);
        return;
    }
    renderMemo();
}

// TODO 2: 메모 목록을 화면에 출력하는 함수
function renderMemo() {
    // 초기화
    memoList.innerHTML = "";
    // 메모가 없는 경우
    if (memoData.length === 0) {
        const li = document.createElement("li");
        li.textContent = "작성된 메모가 없습니다.";
        memoList.appendChild(li);
        return;
    }
    // 메모가 있는 경우
    memoData.forEach((memo, index) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        li.textContent = memo;
        btn.textContent = "삭제";
        memoList.appendChild(li);
        li.appendChild(btn);
        // 삭제버튼 추가
        btn.addEventListener("click", (e) => {
            deleteMemo(index);
        });
    });
}
// TODO 3: 로컬스토리지에 메모 데이터 저장하는 함수
function saveMemoStorage() {
    localStorage.setItem(MEMO_KEY, JSON.stringify(memoData));
}

// TODO 4 : 폼 제출 이벤트 처리
memoForm.addEventListener("click", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title) {
        alert("제목을 입력해주세요.");
        titleInput.focus();
        return;
    }

    memoData.unshift(`title: ${title}, content: ${content}`);
    saveMemoStorage();
    titleInput.value = "";
    contentInput.value = "";

    renderMemo();
});

// TODO5: 메모 삭제 함수 (선택 과제)
function deleteMemo(index) {
    memoData.splice(index, 1);
    saveMemoStorage();
    renderMemo();
}

loadMemoStorage();
