import { useState, useEffect } from "react";

export function useScrollThrottle() {
    const [isBottom, setIsBottom] = useState();

    useEffect(() => {
        // 함수가 마운트될때마다 생성되지 않도록 메모리 누수를 방지하기 위해서 throttle함수를 useEffect 안에 넣어준다.
        function throttle(callback, delay) {
            let timer = null;

            return () => {
                if (timer === null) {
                    timer = setTimeout(() => {
                        callback();
                        timer = null;
                    }, delay);
                }
            };
        }

        const handleScroll = () => {
            setIsBottom(
                window.innerHeight + document.documentElement.scrollTop + 10 >=
                    document.documentElement.offsetHeight
            );
        };

        const throttleHandler = throttle(handleScroll, 1000);
        // window.addEventListener("scroll", () => {
        //     setIsBottom(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight);
        //     console.log("scrolling...");
        // });

        window.addEventListener("scroll", throttleHandler);

        return () => {
            window.removeEventListener("scroll", throttleHandler);
        };
    }, []);

    return isBottom;
}
