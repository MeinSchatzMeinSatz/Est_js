const users = [
    { nickName: "Ghost", role: "superAdmin", email: "ghost@gmail.com" },
    { nickName: "shoopa", role: "user", email: "shoopa@naver.com" },
    { nickName: "Camel", role: "user", email: "camel@kakao.com" },
    { nickName: "Irangi", role: "admin", email: "irangi@gmail.com" },
    { nickName: "Mui", role: "user", email: "mui@naver.com" },
];

const posts = [
    { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
    { title: "React", tags: ["React", "Redux", "Hooks"] },
    { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

// users에서 admin 권한을 가진 요소출력, 사용자의 이름을 출력 / 사용자의 이름은 알파벳 순으로 정렬해서 배열로 반환받고 싶다.
// admin 권한 -> superAdmin , admin
const adminRoles = ["admin", "superAdmin"];

// const adminUser = users
//     .filter((x) => x.role.toLowerCase().includes("admin"))
//     .map((user) => user.nickName)
//     .sort((a, b) => a.localeCompare(b));
const adminList = users.filter((user) => adminRoles.includes(user.role));
const adminNames = adminList.map((admin) => admin.nickName);
const adminSort = adminNames.sort((a, b) => a.localeCompare(b));
console.log("adminNames :", adminNames);

// 2. users에서 일반유저가 몇명인지 출력. -> 일반유저는 총 3명입니다.
const normalUser = users.filter((x) => x.role === "user").length;
console.log(`일반유저는 총 ${normalUser}명 입니다.`);
