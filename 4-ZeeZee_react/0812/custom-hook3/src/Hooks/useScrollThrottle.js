import { useState, useEffect } from "react";

export function useScrollThrottle() {
    const [isBottom, setIsBottom] = useState();

    const throttle = (callback, delay) => {
        let timerId;

        return (...args) => {
            if (timerId) return;
            timerId = setTimeout(() => {
                callback(...args);
                timerId = null;
            }, delay);
        };
    };

    useEffect(() => {
        window.addEventListener(
            "scroll",
            throttle(() => {
                // window.innerHeight > 뷰포트의 높이
                // scrollTop > 타겟 요소가 화면 상단으로부터 스크롤 된 길이
                // offsetHeight > 타겟 요소의 전체 높이
                setIsBottom(
                    window.innerHeight +
                        document.documentElement.scrollTop +
                        10 >=
                        document.documentElement.offsetHeight
                );
                console.log("scroll");
            }, 100)
        );
    }, []);

    return isBottom;
}
