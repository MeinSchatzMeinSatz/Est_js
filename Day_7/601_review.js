// 1. 이름과 나이를 입력받아서, '000님 나이는 00세 입니다.' => 함수표현식의 화살표 함수로 만들기
const user = (name, age) => {
    return `${name}님 나이는 ${age}세 입니다.`;
};

console.log(user("Ghost", 1000));

// 2. 더하기 함수 a + b인데, 만약 b가 입력되지 않았을 경우 b의 기본값은 10이 되도록 함수를 만드세요.⭐️

const sum = function (a, b = 10) {
    return a + b;
};

console.log(sum(1));

// 3. 함수의 인자로 숫자를 2개 받아서 배열로 리턴 => 1, 2, => return [1, 2]

function array(a, b) {
    return [a, b];
}

console.log(array(1, 2));

// 4. 함수의 인자로 이름과 나이를 받아서 객체로 리턴 => "Ghost", 1000 -> return {name : "Ghost", age : 1000}

const toObject = (name, age) => ({ name, age });
console.log(toObject("Erangi", 14));

function info(name, age) {
    const user = {};
    user.name = name;
    user.age = age;

    return user;
}

console.log(info("Ghost", 1000));

// 5. 연도를 입력받아서 나이를 계산하는 함수 -> getAge(1900) -> 현재 getFullYear 연도를 구해서 차감.

function getAge(a) {
    const date = new Date();
    return date.getFullYear() - a - 1;
}

console.log(getAge(1900));

// 6. for문으로 구구단 -> gugudan(3), gugudan(5) 제한, 2~9 단까지만 지원
// escape 문자
// 예외처리되는 건 우선 처리하는 것이 좋음
const gugudan = (dan) => {
    if (dan < 2 && dan > 9) {
        return "구구단은 2~9단까지만 지원합니다.";
    }

    let result = "";
    for (let i = 1; i <= 9; i++) {
        result += `${dan} * ${i} = ${dan * i}\n`;
    }
    return result;
};
console.log(gugudan(3));

// 7. 구조분해할당 => 아래 배열을 앞의 2개만 변수로 받고, 나머지는 나머지 연산자로 할당하여 받으세요.

const arr = [19, 24, 30, 40];

const [a1, b1, ...rest] = arr;

console.log(a1, b1);

// 8. 구조분해할당 -> 아래 객체 중 이름과 이메일만 변수로 할당하여 받으세요. 이떄 이름은 userName으로 변경하여 받으세요.
const user1 = { id: 1, name: "Ghost", age: 1000, email: "ghost@gmail.com" };

const { name, email } = user1;
console.log(name, email);

const users = [
    { name: "ghost", age: 1000 },
    { name: "irangi", age: 500 },
    { name: "nuvis", age: 30 },
];

// users객체를 JSON을 이용해서 문자열로 출력하시오.

const stringUsers = JSON.stringify(users);
console.log(stringUsers, typeof stringUsers);

const objectUsers = JSON.parse(stringUsers);

console.log(objectUsers, typeof objectUsers);
