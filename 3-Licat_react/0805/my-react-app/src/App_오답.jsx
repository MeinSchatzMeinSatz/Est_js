import { useState } from "react";
import data from "./data.jsx";

function App() {
    // console.log(data);

    const [searchKeyword, setSearchKeyword] = useState("");
    const filteredData = data.filter((book) =>
        book.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const inputBox = (e) => {
        setSearchKeyword(e.target.value);
    };

    console.log();

    return (
        <>
            <h1>Book List</h1>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" onChange={inputBox} />
            <div>
                {data.map((book, index) => {
                    return (
                        <section key={index}>
                            <h2>{book.title}</h2>
                            <p>{book.description}</p>
                        </section>
                    );
                })}
            </div>
        </>
    );
}

export default App;
