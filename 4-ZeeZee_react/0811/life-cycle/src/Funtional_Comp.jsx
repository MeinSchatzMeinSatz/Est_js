import { useState, useEffect } from "react";
const Functional_Comp = () => {
    const [state, setState] = useState(0);

    const handleClick = (e) => {
        setState((prev) => prev + 1);
        console.log("ComponentWillUpdate");
    };

    useEffect(() => {
        console.log("ComponentDidMount");
        // 앱 초기작업들, api호출
    }, []);

    useEffect(() => {
        console.log("ComponentDidUpdate");
    }, [state]);

    return (
        <div>
            {console.log("render")}
            <button onClick={handleClick}>Click me!</button>
            <span>{state}</span>
        </div>
    );
};

export default Functional_Comp;
