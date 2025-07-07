// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.

const users = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];
// 여기에 코드를 작성하세요
const userNames = users.map((user) => user.name);
console.log(userNames);

// 2. 태그들의 글만 추출하기
const posts = [
    { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
    { title: "React", tags: ["React", "Redux", "Hooks"] },
    { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

const tagContent = posts
    .map((item) => item.tags)
    .flat(1)
    .join();

console.log(tagContent);

const tagList = [];
posts.forEach((post) => tagList.push(post.tags));
console.log(`${tagList}`);
