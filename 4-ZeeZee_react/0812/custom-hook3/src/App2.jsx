import { useScrollObserver } from "./Hooks/useScrollObserver_solution";
import { useState, useEffect } from "react";
import "./App.css";

// 과제:
// 1. 이미지 데이터 불러오기(화면이 나오자마자 데이터 불러오기)
// 2. 이미지 렌더링
// 3. 바닥에 닿았을 경우, 옵저버로 인지.
// 4. 이미지 데이터 5개씩 추가 출력

function ImageList() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const isBottom = useScrollObserver();

    // API를 호출해서 데이터 가져오는 함수
    const getPhotos = async (pageNum) => {
        try {
            let url = `https://picsum.photos/v2/list?page=${pageNum}&limit=5`;
            let response = await fetch(url);

            if (!response.ok) {
                throw new Error("에러 발생");
            }
            let data = await response.json();

            // 이 부분 복습시 참고
            setPhotos((prev) => [...prev, ...data]);
        } catch (error) {
            console.error(error, "에러 발생");
        }
    };

    // 최초 렌더링시 사진 데이터 불러오고,
    useEffect(() => {
        getPhotos(1);
        setPage(2);
    }, []);

    // 페이지가 1 이상 그리고 스크롤 하단에 닿았을때 사진 렌더링
    useEffect(() => {
        if (isBottom && page > 1) {
            getPhotos(page);
            setPage((prev) => prev + 1);
            console.log(photos);
            console.log("isBottom :", isBottom);
        }
    }, [isBottom]);

    return (
        <ul className="image-list">
            {/* 사진 렌더링 ❓ */}
            {photos.map((photo) => (
                <li key={photo.id}>
                    <img src={photo.download_url} alt={photo.author} />
                </li>
            ))}
        </ul>
    );
}

function App2() {
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <ImageList />
        </div>
    );
}

export default App2;
