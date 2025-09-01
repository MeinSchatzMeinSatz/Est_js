import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../img/icon-edit.svg";
import iconDelete from "../../img/icon-delete.svg";
import { useFireStore } from "../../hooks/useFireStore";

export default function DiaryList({ list }) {
  console.log(list);

  // const date = new Date();

  function formattedTime(seconds) {
    const docDate = new Date(seconds * 1000);

    const year = docDate.getFullYear();
    const month = (docDate.getMonth() + 1).toString().padStart(2, "0");
    const day = docDate.getDate().toString().padStart(2, "0");

    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayofWeek = daysOfWeek[docDate.getDay()];

    const formattedDate = `${year}.${month}.${day}.${dayofWeek}`;

    return formattedDate;
  }

  const { deleteDocument } = useFireStore("diary");

  return (
    <ul>
      {list.map((doc) => {
        return (
          <li key={doc.id}>
            <article className={styles["diary-article"]}>
              <h3 className={styles["article-title"]}>{doc.title}</h3>
              <time
                className={styles["article-time"]}
                dateTime={formattedTime(doc.createdTime.seconds)
                  .slice(0, -4)
                  .replaceAll(".", "-")}
              >
                {formattedTime(doc.createdTime.seconds)}
              </time>
              <p className={styles["article-content"]}>{doc.text}</p>

              <div className={styles["button-group"]}>
                <button type="button">
                  <img src={iconEdit} alt="수정" />
                </button>
                <span></span>
                <button
                  type="button"
                  onClick={() => {
                    deleteDocument(doc.id);
                  }}
                >
                  <img src={iconDelete} alt="삭제" />
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
