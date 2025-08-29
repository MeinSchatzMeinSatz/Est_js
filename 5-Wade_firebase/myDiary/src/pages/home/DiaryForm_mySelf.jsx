import React from "react";
import { useState } from "react";
import styles from "./Home.module.css";

export default function DiaryFormMyself() {
  const [input, setInput] = useState({
    title: "",
  });
  const [textArea, setTextArea] = useState("");

  // useState로 연결하는 방법.
  // const [title, setTitle] = useState("");
  // const [text, setText] = useState("");

  // const handleData = (event) => {
  //     if (event.target.id === 'diary-title') {
  //         setTitle(event.target.value);
  //     } else if (event.target.id === "diary-content") {
  //         setText(event.target.value);
  //     }
  // }

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(title, text);
  // }

  return (
    <form>
      <label className="a11y-hidden" htmlFor="diary-title">
        일기 제목
      </label>
      <input
        className="input-style"
        id="diary-title"
        type="text"
        value={input.title}
        onChange={(e) => setInput({ ...input, title: e.target.value })}
        placeholder="제목"
        required
      />

      <label className="a11y-hidden" htmlFor="diary-content">
        일기 내용
      </label>
      <textarea
        className={styles["diary-textarea"]}
        id="diary-content"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        placeholder="오늘의 비밀은 무엇인가요?"
      ></textarea>
      <button className="black-btn" type="submit">
        작성하기
      </button>
    </form>
  );
}
