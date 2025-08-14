import { useState } from "react";
import { useActionState } from "react";

export default function Login() {
    // useActionState를 써봅시다.
    // state - 현재 상태, formAction - 폼 액션 함수, isPending - 로딩 상태( boolean )
    const [state, formAction, isPending] = useActionState(
        async (previousState, formData) => {
            const userName = formData.get("userName");
            const password = formData.get("password");

            try {
                // API 호출
                const response = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName,
                        password,
                    }),
                });

                if (!response.ok) throw new Error("로그인 실패");

                return { success: true, message: "로그인 되었습니다." };
            } catch (error) {
                return { success: false, message: error.message };
            }
        }
    );

    return (
        <div>
            <h2>로그인</h2>

            <form action={formAction}>
                <div>
                    <label htmlFor="userName">
                        아이디:
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            placeholder="아이디를 입력하세요"
                            disabled={isPending}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="password">
                        비밀번호:
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            disabled={isPending}
                            required
                        />
                    </label>
                </div>

                <div>
                    <button type="submit" disabled={isPending}>
                        {isPending ? "로그인 중..." : "로그인"}
                    </button>
                    <button
                        type="reset"
                        disabled={isPending}
                        // onClick={() => {
                        //     document.querySelector("#userName").value = "";
                        //     document.querySelector("#password").value = "";
                        // }}
                    >
                        초기화
                    </button>
                </div>
            </form>
            {state?.message && (
                <div
                    className={`message ${state.success ? "success" : "error"}`}
                >
                    <p>{state.message}</p>
                </div>
            )}
        </div>
    );
}
