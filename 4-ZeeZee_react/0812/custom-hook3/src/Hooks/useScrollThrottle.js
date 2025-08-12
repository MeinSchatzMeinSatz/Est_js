import { useState, useEffect, useRef } from "react";

export function useScrollThrottle() {
    const [isBottom, setIsBottom] = useState(false);
    const throttleTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // 쓰로틀링 중이면 무시
            if (throttleTimeout.current) return;

            throttleTimeout.current = setTimeout(() => {
                const scrolledToBottom =
                    window.innerHeight +
                        document.documentElement.scrollTop +
                        10 >=
                    document.documentElement.offsetHeight;

                setIsBottom(scrolledToBottom);

                // 타임아웃 초기화 - 다음 이벤트 처리 가능
                throttleTimeout.current = null;
            }, 200); // 200ms 간격으로 실행
        };

        window.addEventListener("scroll", handleScroll);

        // 컴포넌트 언마운트 시 이벤트 해제 및 타임아웃 클리어
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (throttleTimeout.current) clearTimeout(throttleTimeout.current);
        };
    }, []);

    return isBottom;
}
