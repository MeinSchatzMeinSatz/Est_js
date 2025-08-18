import { useState, useEffect, useRef } from "react";
// import Login from "./component/Login";
import "./App.css";

const Login = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);

  function validation1(loginId, loginPw) {
    if (loginId.current.value.trim() === "") {
      console.error("아이디가 입력되지 않았습니다.");

      idRef.current.focus();

      alert("아이디가 입력되지 않았습니다.");
      return false;
    }

    if (loginPw.current.value.trim() === "") {
      console.error("비밀번호가 입력되지 않았습니다.");

      pwRef.current.focus;

      alert("비밀번호가 입력되지 않았습니다");
      return false;
    }

    return true;
  }

  return (
    <div>
      <form action="">
        <label htmlFor="login">ID</label>
        <input ref={idRef} type="text" id="login" placeholder="아이디 입력" />
        <label htmlFor="pw">Password</label>
        <input
          ref={pwRef}
          type="password"
          id="pw"
          placeholder="비밀번호 입력"
        />
        <button onClick={handleLogin} type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
