// 총점, 평균, 최고점수

function calcScores(scores) {
    let a = scores.reduce((acc, cur) => acc + cur);
    let b = a / scores.length;
    let c = Math.max(...scores);

    return [a, b, c];
}

const [total, average, top] = calcScores([100, 50, 25, 32, 70]);
console.log(
    `점수의 합계는 ${total}, 평균은 ${average}, 최고점수는 ${top} 입니다.`
);
