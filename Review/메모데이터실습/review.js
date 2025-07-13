const memoForm = document.getElementById("memo-form");
const titleInput = document.getElementById("title-input");
const contentInput = document.getElementById("content-input");
const memoList = document.getElementById("memo-list");

let = memoData = [];
const MEMO_KEY = "memo";

// 1. 페이지 로드 시 로컬스토리지에서 데이터 불러오기
function loadMemoStorage() {
    const savedMemo = localStorage.getItem(MEMO_KEY);
    if (savedMemo) {
        memoData = JSON.parse(savedMemo);
    }
    renderMemo();
}

// 2. 메모 목록을 화면에 출력하는 함수
function renderMemo() {
    // 메모리스트 초기화
    memoList.innerHTML = "";
    // 메모가 없는경우
    if (memoData.length === 0) {
        const li = document.createElement("li");
        li.textContent = "메모리스트가 비어있습니다.";
        memoList.appendChild(li);
    }
    // 메모가 있는 경우 반복문으로 각 메모를 화면에 출력
    memoData.forEach((memo, idx) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        li.textContent = memo;
        btn.textContent = "삭제";
        memoList.appendChild(li);
        li.appendChild(btn);

        // 삭제 버튼에 이벤트 리스너 추가
        btn.addEventListener("click", () => {
            deleteMemo(idx);
        });
    });
}

// 3. 로컬스토리지에 메모 데이터 저장하는 함수
function saveMemoStorage() {
    // memoData 배열을 JSON 문자열로 변환해서 로컬스토리지에 저장
    localStorage.setItem(MEMO_KEY, JSON.stringify(memoData));
}

// 4. 폼 제출 이벤트 처리
memoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // 입력값 가져오기
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    // 제목이 비어 있으면 경고 메시지
    if (!title) {
        alert("제목을 기입해주세요.");
        titleInput.focus();
        return;
    }
    // 새 메모 객체를 memoData 배열 맨 앞에 추가
    memoData.unshift(`title: ${title}, content: ${content}`);
    // 로컬 스토리지 저장
    saveMemoStorage();
    // 입력 필드 초기화
    titleInput.value = "";
    contentInput.value = "";
    // 메모 목록 재렌더링
    renderMemo();
});

// 5. 메모 삭제 함수
function deleteMemo(index) {
    // 해당 인덱스의 메모를 배열에서 제거
    memoData.splice(index, 1);
    console.log(memoData);
    // 로컬스토리지 업데이트
    saveMemoStorage();
    // 메모 목록 재렌더링
    renderMemo();
}

loadMemoStorage();
console.log(memoData);
