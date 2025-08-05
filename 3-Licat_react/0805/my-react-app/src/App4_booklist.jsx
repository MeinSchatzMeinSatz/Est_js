import { useState } from "react";
import data from "./data.jsx";

function App() {
    // console.log(data);
    const [inputValue, setInputValue] = useState("");
    // const filteredData = data.filter((book) => {
    //     book.title.includes("견");
    // });
    // const filteredData = data.filter((book) => book.title.includes(inputValue));
    const filteredData = data.filter((book) =>
        book.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    return (
        <>
            <h1>Book List</h1>
            <div>{inputValue}</div>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
            />
            {filteredData.map((book, index) => {
                return (
                    <section key={index}>
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                    </section>
                );
            })}
        </>
    );
}

export default App;
