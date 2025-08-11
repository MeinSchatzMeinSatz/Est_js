import { useEffect, useRef, useState } from "react";

export default function FunctionComp() {
    const [number, setNumber] = useState(0);
    const firstRenderRef = useRef(true);

    useEffect(() => {
        console.log("componentDidMount");

        return () => {
            console.log("componentWillUnmount");
        };
    }, []);

    useEffect(() => {
        if (!firstRenderRef.current) console.log("componentDidUpdate");
        firstRenderRef.current = false;
    }, [number]);

    function handleClick() {
        setNumber(number + 1);
    }
    function handleReset() {
        setNumber(0);
    }

    const willUpdate = (func) => {
        console.log("shouldComponentUpdate");
        console.log("componetWillUpdate");
        func();
    };
    if (firstRenderRef.current) console.log("componentWillMount");

    console.log("render");
    return (
        <>
            <div>
                <button onClick={() => willUpdate(handleClick)}>
                    click Me!
                </button>
                <button onClick={() => willUpdate(handleReset)}>reSet</button>
            </div>
            <div>
                <span>{number}</span>
            </div>
        </>
    );
}
