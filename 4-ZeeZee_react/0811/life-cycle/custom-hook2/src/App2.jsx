// useContext를 사용하고 구현

import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

function LanguageSelector() {
    const { currentLanguage, setLanguage } = useContext(LanguageContext);
    return (
        <>
            <div>{currentLanguage.languageSelector}</div>
            <button onClick={() => setLanguage("en")}>영어</button>
            <button onClick={() => setLanguage("ko")}>한국어</button>
            <button onClick={() => setLanguage("ja")}>日本語</button>
        </>
    );
}

function Header() {
    const { title } = useContext(LanguageContext).currentLanguage;
    return <h2>{title}</h2>;
}

function Content() {
    const { greeting, description } =
        useContext(LanguageContext).currentLanguage;
    return (
        <div>
            <p>{greeting}</p>
            <p>{description}</p>
        </div>
    );
}

function App() {
    const [language, setLanguage] = useState("ko");
    const currentLanguage = languages[language];

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
