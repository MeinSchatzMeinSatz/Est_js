import React from "react";

const Login = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="login">ID</label>
                <input type="text" id="login" />
                <label htmlFor="pw">Password</label>
                <input type="password" id="pw" />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;
