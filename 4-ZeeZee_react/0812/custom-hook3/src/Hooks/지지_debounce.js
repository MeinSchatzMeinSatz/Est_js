import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
    }, [value, delay]);

    return () => {
        clearTimeout(timerId);
    };

    return debounceValue;
}

// const debounceSearch = useDebounce(searchTerm, 300)
