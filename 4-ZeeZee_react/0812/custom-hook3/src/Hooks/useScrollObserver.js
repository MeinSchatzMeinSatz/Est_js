import { useEffect, useState } from "react";

// 1. 옵저버를 만든다
// 2. 옵저버의 관찰 대상을 만든다
// 3. 관찰 대상 생성
// 4. 콜백함수 생성. 어떤 로직으로?
// 5. 옵션
export function useScrollObserver(target, callback) {
    useEffect(() => {
        if (!target.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    callback && callback();
                }
            },
            { threshold: 1.0 }
        );

        observer.observe(target.current);

        return () => observer.disconnect();
    }, [target, callback]);
}
