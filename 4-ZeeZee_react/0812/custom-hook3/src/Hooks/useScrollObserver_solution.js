import { useEffect, useState, useRef } from "react";

// 1. 옵저버를 만든다
// 2. 옵저버의 관찰 대상을 만든다
// 3. 관찰 대상 생성
// 4. 콜백함수 생성. 어떤 로직으로?
// 5. 옵션

export function useScrollObserver() {
    const [isBottom, setIsBottom] = useState();
    const endLineRef = useRef(null);

    useEffect(() => {
        const endLine = document.createElement("div");
        endLine.style.height = "10px";
        document.body.append(endLine);
        endLineRef.current = endLine;

        const observer = new IntersectionObserver(
            (entry) => {
                if (entry[0].isIntersecting) {
                    setIsBottom(true);
                } else {
                    setIsBottom(false);
                }
            },
            {
                threshold: 1,
            }
        );

        observer.observe(endLineRef.current);

        return () => {
            observer.unobserve(endLineRef.current);
            document.body.removeChild(endLineRef.current);
        };
    }, []);

    return isBottom;
}
