import { useEffect, useState } from "react";

export function useMouseLocation(initVal) {
    const [mouseLocation, setMouseLocation] = useState(
        initVal || { x: null, y: null }
    );
    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            console.log("mouseLocation :", event);
            setMouseLocation({ x: event.x, y: event.y });
        });

        return () => {};
    }, []);

    return mouseLocation;
}
