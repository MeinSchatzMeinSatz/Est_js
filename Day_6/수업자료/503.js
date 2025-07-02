// 객체에 접근하는 방법
// computed property

const blood = "bloodType";

const user = {
    name: "Ghost",
    [blood]: "B",
    [3 + 5]: 8,
    ["best" + "Friend"]: "Irangi",
}; // blood라는 변수(키값이 아닌) 가 들어간 것.

console.log(blood, user[blood]);
console.log(blood, user.bloodType);
console.log(user[8]); // user.8은 지정불가(숫자는 키 값이 될 수 없다.)
console.log(user["8"]);
console.log(user.bestFriend);
