const customer = {
    name: "빙키",
    phone: "010-1234-5678",
    greet() {
        console.log(`안녕하세요! ${this.name}입니다. 연락처: ${this.phone}`);
    },
};

const newCustomer = {
    name: "지지",
    phone: "010-1111-2222",
};

const newGreet = customer.greet.bind(newCustomer); // 여기에 bind 코드 작성 // 출력 예시: "안녕하세요! 지지입니다. 연락처: 010-1111-2222"

newGreet();

const counter = {
    count: 0,

    handleClick() {
        console.log(this); // <button id="clickBtn">클릭 횟수: 0</button>
        console.log(this.count);
        this.count++;
        document.getElementById(
            "clickBtn"
        ).textContent = `클릭 횟수: ${this.count}`;
    },

    init() {
        // TODO: bind를 사용해서 아래 코드를 수정해 보세요.
        document
            .getElementById("clickBtn")
            .addEventListener("click", this.handleClick);
    },
};

counter.init();
