// Quiz1
// 아래 코드가 올바르게 작동하도록 해주세요
interface User {
  name: string;
  age: number;
  email?: string;
}

const user1: User = {
  name: "김철수",
  age: 25,
};

const user2: User = {
  name: "이영희",
  age: 30,
  email: "younghee@example.com",
};

// Quiz 2
interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  name: "박관리자",
  age: 35,
  email: "admin@example.com",
  permissions: ["read", "write", "delete"],
};
