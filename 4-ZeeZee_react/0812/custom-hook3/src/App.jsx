import { useMouseLocation } from "./Hooks/useMouseLocation";
import { useScroll } from "./Hooks/useScroll";
import { useScrollThrottle } from "./Hooks/useScrollThrottle";
import { useScrollDebounce } from "./Hooks/useScrollDebounce";

function App() {
    // const mouseLocation = useMouseLocation({ x: 0, y: 0 });
    // console.log(mouseLocation);
    // const scroll = useScroll();
    // console.log(scroll);
    // const scrollThrottle = useScrollThrottle();
    // console.log(scrollThrottle);
    const scrollDebounce = useScrollDebounce();
    console.log(scrollDebounce);

    return <div style={{ backgroundColor: "blue", height: "1000px" }}></div>;
}

export default App;
