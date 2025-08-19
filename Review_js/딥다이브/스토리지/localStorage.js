// 데이터 저장
localStorage.setItem("isLogin", false);
localStorage.setItem("color-theme", "dark");

const user1 = {
    id: 1,
    name: "Yujin",
};

localStorage.setItem("user", JSON.stringify(user1));

const user = localStorage.getItem("user", JSON.stringify(user1));

console.log(JSON.parse(user));
