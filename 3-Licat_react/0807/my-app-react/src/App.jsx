import { use, useMemo, useState } from "react";
import "./App.css";

function 부하() {
    console.log("부하 함수가 실행되었습니다.");
    return "부하 완료";
}
function App() {
    const [count, setCount] = useState(0);
    const [two, setTwo] = useState(0);

    const result = useMemo(() => 부하(), [count]);

    return (
        <>
            <h1>Hello World</h1>
            <p>Count: {count}</p>
            <p>Count: {two}</p>
            <p>Result: {result}</p>
            <button onClick={() => setCount(count + 1)}>increase Count</button>
            <button onClick={() => setTwo(count + 1)}>increase Two</button>
        </>
    );
}

export default App;
