// useContext를 사용하고 구현

import { createContext, useState, useContext } from "react";
import LanguageSelector from "./LangSelector";
import Content from "./Content";
import { LanguageContext, Languages } from "./LanguageProvider";

function Header() {
    const { title } = useContext(LanguageContext).currentLanguage;
    return <h2>{title}</h2>;
}

function App() {
    const [language, setLanguage] = useState("ko");
    const currentLanguage = Languages[language];

    return (
        // useContext를 사용할 것이라서 매우 깔끔해진 것을 볼 수 있습니다.
        <LanguageContext.Provider
            value={{ currentLanguage, language, setLanguage }}
        >
            <LanguageSelector />
            <Header />
            <Content />
        </LanguageContext.Provider>
    );
}

export default App;
