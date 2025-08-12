import { useEffect, useState } from "react";
import useLang from "./Hook/useLang";
import useGreetingTime from "./Hook/useGreetingTime";

function Greetings() {
    const [greetings, setGreetings] = useState([]);
    // 인사말 빈 배열로 저장
    const time = useGreetingTime();
    // 시간을 커스텀 훅에서 가져옴
    const { currentLanguage } = useLang();
    // 현재 언어 커스텀 훅에서 가져옴

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/src/data/greetings.json");
                if (!response.ok) {
                    throw new Error("으아악!");
                }
                const data = await response.json();

                setGreetings(data.greetings);
                //인사말을 가져온 데이터에 추가
            } catch (error) {
                console.log(error, "으악! 에러발생!");
            }
        }
        fetchData();
    }, []);

    const greetingObj = greetings.find((v) => v.language === currentLanguage);
    //find함수로 가져온 인사말에서 현재 언어랑 같은거 골라내서 객체에 저장

    return (
        <>
            <strong>{greetingObj?.[time]}</strong>
            {/* 옵셔널 체이닝 사용 (?. 를 붙이면 데이터가 아직 비동기일때 undefined여도 에러를 안뱉음) */}
        </>
    );
}

export default Greetings;
