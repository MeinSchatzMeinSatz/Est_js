import React from "react";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("diary", ["uid", "==", user.uid]);

  // 오늘 날짜를 구하는 코드
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}.${month}.${day}`;

  return (
    <div className="container">
      <main className={styles["diary-main"]}>
        <h2 className={styles["heart"]}>{formattedDate}의 비밀일기</h2>
        <DiaryForm uid={user.uid} />
      </main>
      <section>
        <h2 className={styles["a11y-hidden"]}>일기 목록</h2>
        <ul>
          {documents && (
            <li>
              <DiaryList list={documents} />
            </li>
          )}
          {error && <li>{error}</li>}
        </ul>
      </section>
    </div>
  );
}
