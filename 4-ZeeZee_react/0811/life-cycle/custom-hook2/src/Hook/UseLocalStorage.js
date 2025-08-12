import { useState } from "react";

export default function useLocalStorage() {
    const [myLang, setMyLang] = useState(
        localStorage.getItem("myLang") || "ko"
    );
    localStorage.setItem("myLang", myLang);
    // 로컬스토리지에 저장하는 부분(수정)

    const selectedLang = (e) => {
        const newLang = e.target.value;
        localStorage.setItem("myLang", newLang);
        setMyLang(newLang);
    };
    return { myLang, selectedLang };
}
