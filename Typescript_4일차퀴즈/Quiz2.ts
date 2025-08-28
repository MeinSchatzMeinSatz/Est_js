// Quiz3
// API 응답을 감싸는 제네릭 함수를 만드세요.

// 성공/실패를 나타내는 응답 타입
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

// 제네릭 함수 createResponse를 완성하세요
// 성공시: success: true, data 포함
// 실패시: success: false
async function createResponse<T>(
  // data: object | null,
  // success: boolean,
  // message?: string
  data: T | null,
  isSuccess: boolean,
  error?: string
): ApiResponse<T> {
  // 함수 내용을 구현하세요
  if (isSuccess) {
    return { success: true, data: data as T };
  } else {
    return { success: false, message };
  }
}

// 사용 예시 (이 코드들이 올바르게 작동해야 합니다)
const userResponse = createResponse({ name: "홍길동", age: 20 }, true);
const errorResponse = createResponse<User>(
  null,
  false,
  "사용자를 찾을 수 없습니다"
);
