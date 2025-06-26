// 데이터타입

const a = 3 > 5; // false
console.log(a, typeof a); // boolean

const b = 5;
console.log(typeof b); // number

const c = "5";
console.log(typeof c); // string

const d = undefined;
console.log(typeof d); // undefined

const e = null;
console.log(typeof e); // object(Null object)

// typeof로 데이터 타입을 확인할 수 있다.

const f = 2 + "2"; // number + string = string(자동 형변환)
console.log(`${f}는 ${typeof f}이다.`);

const g = 2 * "2";
console.log(`${g}는 ${typeof g}이다.`);

const number = "15";
const result = Number(number) + 3; // 명시적 형변환
console.log(result);

console.log(+number); // 명시적 형변환

const baseFont = 16;
const targetFont = 24;
const toEm = targetFont / baseFont;

console.log(`24px은 16px의 ${toEm}em 입니다.`);
