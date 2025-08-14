import { useState, useEffect } from "react";
import { useScrollObserver } from "./Hooks/useScrollObserver_solution";

import { ClipLoader } from "react-spinners";

function ImageList() {
    return (
        <ul>
            {imageList.map((image) => {
                return (
                    <li key={image.id}>
                        <img style={s} src={image.downloda_url} />
                    </li>
                );
            })}
        </ul>
    );
}

function App3() {
    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const isBottom = useScrollObserver;

    async function fetchImages(pageNumber) {
        setIsLoading(true);
        try {
            const response = fetch(
                `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
            );

            if (!response.ok) {
                throw new Error("네트워크에 문제가 있습니다.");
            }

            const data = await response.json();
            setImageList((prev) => [...prev, ...data]);

            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (isBottom && !isLoading) {
            setPage((prev) => prev + 1);
        }
    }, [isBottom]);

    useEffect(() => {
        fetchImages(page);
    }, [page]);

    return (
        <div>
            <ImageList />
            <ClipLoader
                color="#f9ca11"
                loading={isLoading}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default App3;
