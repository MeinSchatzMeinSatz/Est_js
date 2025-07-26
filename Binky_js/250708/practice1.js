const counter = {
    count: 0,

    handleClick() {
        console.log("handleClick", this); // <button id="clickBtn">클릭 횟수: 0</button>
        console.log("count", this.count);
        this.count++;
        document.getElementById(
            "clickBtn"
        ).textContent = `클릭 횟수: ${this.count}`;
    },

    init() {
        // TODO: bind를 사용해서 아래 코드를 수정해 보세요.
        console.log("init", this); // counter를 가르키고 있음.

        // document
        //     .getElementById("clickBtn")
        //     .addEventListener("click", this.handleClick);
        document
            .getElementById("clickBtn")
            .addEventListener("click", this.handleClick.bind(this));
    },
};

counter.init();

/* bind 없이 호출되었을 떄 흐름
1. 이벤트 리스너 등록 시점
- this.handleClick -> 함수 자체만 전달됨(this 정보는 정달되지 않음)

2. 버튼 클릭 시점
- handleClick() 호출
- this => 이벤트가 발생한 요소 => 버튼으로 설정
*/

/* bind를 사용했을 떄 흐름
1. 이벤트 리스너 등록 시점
- bind가 먼저 실행되면서 this 가 counter 객체로 고정되고, 그 고정된 함수가 새로 생성
- 새로운 함수가 이벤트 리스너로 등록
=> 정리 : bind()가 먼저 실행되어서 this 가 고정된 새로운 함수 생성

2. 버튼 클릭 시점
- bind로 만들어진 새로운 함수가 호출
- this가 counter 객체로 고정되어 있는 상태)
- 브라우저가 this를 바꿀 수 없음. (기존 이벤트 핸들러 방식 X)
- this는 counter!!!
=> 브라우저가 함수를 호출하지만, 이미 고정된 this가 우선.
 */
