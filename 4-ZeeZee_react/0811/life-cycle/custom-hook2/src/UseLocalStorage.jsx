import useLang from "./Hook/useLang";
import useLocalStorage from "./Hook/UseLocalStorage";

export default function LangSelector() {
    const { languageData, currentLanguage, changeLanguage } = useLang();

    const { myLang, selectedLang } = useLocalStorage();

    return (
        <>
            <form action="#">
                <label htmlFor="myLang">기본 언어 설정</label>
                <select
                    name="languages"
                    id="myLang"
                    onChange={selectedLang}
                    value={myLang}
                >
                    <option value="en">English</option>
                    <option value="ko">Korean</option>
                    <option value="ja">Japanese</option>
                </select>
            </form>
            <hr />
            <h2>{languageData.languageSelector}</h2>
            <button
                onClick={() => {
                    changeLanguage("en");
                }}
                disabled={currentLanguage === "en"}
            >
                English
            </button>
            <button
                onClick={() => {
                    changeLanguage("ko");
                }}
                disabled={currentLanguage === "ko"}
            >
                한국어
            </button>
            <button
                onClick={() => {
                    changeLanguage("ja");
                }}
                disabled={currentLanguage === "ja"}
            >
                日本語
            </button>
        </>
    );
}
