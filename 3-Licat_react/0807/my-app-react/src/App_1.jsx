import { useState } from "react";
import "./App.css";

// 이렇게 부하가 걸리는 작업의 값을 저장해둔다고 하면 굳이 useMemo라는 것을 사용할 필요가 있을까?
// 1. useState: 상태를 저장하는 것. 상태는 저장되지만, 부하라는 함수는 여전히 실행되어야 한다. 그렇다고 useState를 사용하지 못하는 것은 아니다. useState에 결과값이 있으면 함수를 실행하지 않도록 할 수 있다.
// 2. useEffect: useEffect는 변수를 감시하면서 그 변수가 변경될 때마다 '기능'을 실행하는 훅이다. 그래서 변수를 저장하는 용도로는 적합하지는 않다.
// 3. useMemo: useMemo는 부하가 걸리는 함수를 실행하고 그 결과를 저장하는 훅이다. 꼭 엄청난 부하가 걸리는 함수를 저장하는 것은 아니고, 시스템 상의 조그만한 부하라도 이렇게 저장하는 경우가 많다. '메모리 낭비'라고 얘기하는 분도 있는데, '메모리 좀 쓰면 어떤가요...'

function 부하() {
    console.log("부하 함수가 실행되었습니다.");
    return "부하 완료";
}
function App() {
    const [count, setCount] = useState(0);
    const result = 부하();

    return (
        <>
            <h1>Hello World</h1>
            <p>Count: {count}</p>
            <p>Result: {result}</p>
            <button onClick={() => setCount(count + 1)}>increase Count</button>
        </>
    );
}

export default App;
