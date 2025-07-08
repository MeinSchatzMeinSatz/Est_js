// 디바운싱
// : 일정 시간 동안 추가 입력이 없을 떄 한 번만 실행
// => 마지막 입력 후 일정 시간이 지나면 실행
// : 계속적인 입력이 필요한 상황에서 실행(검색창). 회원가입할때 유효성 검사.

// 입력을 멈춘 후에! func 실행
// => 마지막 입력으로부터 delay 시간이 지나야 실행이 된다!
function debounce(func, delay) {
    let timer; // 타이머 ID를 저장하는 변수 => 타이머 초기화할 떄 사용!

    return function (...args) {
        // args: 배열 형태의 인자가 들어옴.
        clearTimeout(timer); // 타이머 취소(초기화), 입력 중에는 타이머가 초기화되어야 함
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

// 적용하기
function handleInput(keyword) {
    console.log("검색어 :", keyword);
}

const debouncedSearch = debounce(handleInput, 1000);

document.querySelector("#searchInput").addEventListener("input", (event) => {
    debouncedSearch(event.target.value);
    // handleInput(event.target.value);
});

// 작동원리

// apple
// a 입력 = 타이머1 시작(1초 후 실행 예정)
// ap 입력 = 타이머1 초기화, 타이머2 시작
// app 입력 = 타이머2 초기화, 타이머3 시작
// appl 입력 = 타이머3 초기화, 타이머4 시작
// apple 입력 = 타이머4 초기화, 타이머 5 시작
// ===> .... 1초 동안 입력 없음 => 완료 => 검색 함수 실행/ 검색 요청이 된다.
// => 사용자가 apple 이라는 검색어를 모두 입력하고 1초 동안 멈춘 후에야 검색이 실행된다.

// 디바운스 처리를 하지 않았다면?!
// a => 요청
// p => 요청
// p => 요청
// l => 요청
// e => 요청

/*
- "마지막 입력 기준"으로 동작 => "input" 이벤트!!
- 연속 입력 중에는 실행되지 않음
- 입력이 완전히 멈춘 후에만 실행
=> 불필요한 중간 요청/실행을 차단하기 위함!
*/

// => 클로저는 의도를 코드로 명확히 표현하는 구조를 만들기 위해 활용한다!!!
