import { useState, useEffect } from "react";

export function useScroll() {
    const [isBottom, setIsBottom] = useState();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // window.innerHeight > 뷰포트의 높이
            // scrollTop > 타겟 요소가 화면 상단으로부터 스크롤 된 길이
            // offsetHeight > 타겟 요소의 전체 높이
            setIsBottom(
                window.innerHeight + document.documentElement.scrollTop + 10 >=
                    document.documentElement.offsetHeight
            );
        });
    }, []);

    return isBottom;
}
