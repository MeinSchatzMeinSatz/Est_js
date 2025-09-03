import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("버튼 기능 테스트", () => {
  // it("특정 텍스트를 찾습니다.", () => {
  //   // 렌더를 통해서 app을 띄우고
  //   render(<App />);
  //   // screen을 통해서 접근한다.

  //   const btnElement = screen.getByText(/count is/i);

  //   expect(btnElement).toBeInTheDocument();
  // });

  it("버튼 이벤트 테스트", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "change to blue!" });

    // expect(button).toHaveStyle({ backgroundColor: "red" });
    let styles = window.getComputedStyle(button);
    expect(styles.backgroundColor).toBe("rgb(255, 0, 0)");

    fireEvent.click(button);

    styles = window.getComputedStyle(button);
    expect(styles.backgroundColor).toBe("rgb(0, 0, 255)");

    expect(button.texContent).toBe("change to red!");
  });
});
