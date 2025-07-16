// 예시 데이터
const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

// 페이지네이션 변수 선언
const limit = 10; // 한 페이지에 보여줄 개수
let currentPage = 1; // 현재 페이지 번호(초기값)
const totalPage = Math.ceil(data.length / limit); // 전체 페이지 수

// 페이지별 데이터 보여주기 함수
function renderItems(page) {
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = data.slice(start, end);

    // HTML로 렌더링
    document.getElementById("item-list").innerHTML = items
        .map((item) => `<div>${item}</div>`)
        .join("");
}

// 페이지 버튼 만들기
function renderPagination(page) {
    let html = "";

    // 이전 버튼
    if (page > 1) html += `<button id="prev">이전</button>`;

    // 페이지 번호 버튼
    for (let i = 1; i <= totalPage; i++) {
        html += `<button class="page-btn" data-page="${i}" ${
            i === page ? 'style="font-weight:bold"' : ""
        }>${i}</button>`;
    }

    // 다음 버튼
    if (page < totalPage) html += `<button id="next">다음</button>`;

    document.getElementById("pagination").innerHTML = html;
}

function setPaginationEvents() {
    // 페이지 버튼 클릭
    document.querySelectorAll(".page-btn").forEach((btn) => {
        btn.onclick = function () {
            currentPage = Number(this.dataset.page);
            renderPage();
        };
    });

    // 이전 버튼 클릭
    if (document.getElementById("prev")) {
        document.getElementById("prev").onclick = function () {
            if (currentPage > 1) {
                currentPage -= 1;
                renderPage();
            }
        };
    }

    // 다음 버튼 클릭
    if (document.getElementById("next")) {
        document.getElementById("next").onclick = function () {
            if (currentPage < totalPage) {
                currentPage += 1;
                renderPage();
            }
        };
    }
}

// 페이지 전체를 그리는 함수
function renderPage() {
    renderItems(currentPage);
    renderPagination(currentPage);
    setPaginationEvents();
}

renderPage();
