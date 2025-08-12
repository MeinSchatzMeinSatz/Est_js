import { useEffect, useState } from "react";

export default function useDarkMode() {
    // 초기값을 localStorage 또는 시스템 설정에서 받아오기
    const getInitialMode = () => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("darkMode");
            if (savedMode !== null) return savedMode === "true";
            return (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            );
        }
        return false;
    };

    const [darkMode, setDarkMode] = useState(getInitialMode);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return [darkMode, toggleDarkMode];
}
