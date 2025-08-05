// 잘 사용하는 이벤트 종류

// 1. onClick: 클릭 이벤트
// 2. onChange: 입력값 변경 이벤트
// 3. onSubmit: 폼 제출 이벤트
// ---

// 나머지 이벤트
// 4. onMouseOver: 마우스 오버 이벤트
// 5. onMouseOut: 마우스 아웃 이벤트
// 6. onFocus: 입력 핅드에 포커스가 맞춰졌을 때
// 7. onInput: 입력 필드의 값이 변경될 때

function App() {
    function log() {
        console.log("Hello, World!");
    }

    return (
        <>
            <h1>Hello, World!</h1>
            {/* 
            1. onclick이 아니라 onClick으로 순수한 javascript가 아님을 알 수 있다.
            2. onClick 안에 함수를 실행시키는 것이 아니라 함수를 전달한다. 누구에게? onClick에게 전달하는 것이고, React가 이 함수를 실행시킨다.
            */}
            <button onClick={log}>클릭햇!</button>
        </>
    );
}

export default App;
