const arr = ["a", "b", "c"];

for (let i = 0; i > 0; i--) {
    console.log(i);
}

//continue
const nums = [1, 2, 3, 4, 5];
// 3이라면 찍지 말기
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) continue; // break =>for 문 종료 , continue => 3일때만 넘어가줘
    console.log(nums[i]);
}

let result = [];
// for 문을 이용해서, nums의 배열 요소를 모두 result로 넣을건데, 홀수번째만 넣기
for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] % 2)) continue;
    result.push(nums[i]);
}

console.log(result);
