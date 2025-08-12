import Contents from "./Contents";
import LangSelector from "./LangSelector";
import { LanguageProvider } from "./LanguageProvider";
import useDarkMode from "./Hook/useDarkMode";
import Greetings from "./Greetings";
// 이부분 임포트

function App() {
    const [darkMode, toggleDarkMode] = useDarkMode();
    // button 추가

    return (
        <LanguageProvider>
            <button onClick={toggleDarkMode} style={{ marginBottom: 16 }}>
                {darkMode ? "라이트 모드" : "다크 모드"}
            </button>
            {/* 이 부분 버튼 추가*/}
            <LangSelector />
            <Contents />
            <Greetings />
        </LanguageProvider>
    );
}

export default App;
