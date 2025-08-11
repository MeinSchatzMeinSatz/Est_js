import { useContext } from "react";

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

export default Content;
