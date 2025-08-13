import { useScrollObserver } from "./Hooks/useScrollObserver_solution";
import { useState, useEffect } from "react";

// 이미지 데이터 불러오기
// 이미지 렌더링
// 바닥에 닿았을 경우, 옵저버로 인지.
// 이미지 데이터 5개씩 출력

function ImageList() {
    const [photos, setPhotos] = useState([]);
    const isBottom = useScrollObserver();
    console.log("isBottom", isBottom);

    // API를 호출해서 데이터 가져오기
    const getPhotos = async (page) => {
        let url = `https://picsum.photos/v2/list?page=${page}&limit=5`;
        let response = await fetch(url);
        let data = await response.json();
        setPhotos(data);

        console.log(photos);
    };

    // 사진 렌더링
    const showPhotos = () => {
        getPhotos(1);
        photos.forEach((photo) => {
            // console.log(photo.id);
        });
    };

    // 앱이 실행되자마자 사진 데이터 불러오고, 사진 렌더링
    useEffect(() => {
        showPhotos();
    }, [isBottom]);

    return <ul></ul>;
}

function App2() {
    return (
        <div style={{ backgroundColor: "white", height: "1000px" }}>
            <ImageList />
        </div>
    );
}

export default App2;
