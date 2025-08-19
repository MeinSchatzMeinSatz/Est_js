console.log(new Date());
console.log(Date());

console.log(new Date(0));
console.log(new Date(86400000));

console.log(new Date("May 26, 2020 10:00:00"));
console.log(new Date("2020/03/26/10:00:00"));

// Date.now()
const now = Date.now();
console.log(now);
console.log(new Date(now));

// Date.parse()
console.log(Date.parse("Jan 2, 1970 00:00:00 UTC"));
console.log(Date.parse("Jan 2, 1970 09:00:00"));
console.log(Date.parse("1970/01/02/09:00:00"));

// Date.UTC()
console.log(Date.UTC(1970, 0, 2));
console.log(Date.UTC("1970/1/2"));

// Date.prototype.getFullYear()
console.log(new Date("2020/07/24").getFullYear());

const today = new Date();

today.setFullYear(2000);
console.log(today.getFullYear());

today.setFullYear(1900, 0, 1);
console.log(today.getFullYear());

console.log(new Date("2020/07/24").getMonth());

const today1 = new Date();

today1.setMonth(0);
console.log(today1.getMonth());

today1.setMonth(11, 1);
console.log(today1.getMonth());

console.log(new Date("2020/7/24").getDate());

console.log(new Date("2020/07/24/12:00").getHours());

// Date.prototype.toISOString
const today2 = new Date("2025/07/13/12:30");

console.log(today2.toISOString().slice(0, 10));
console.log(today2.toISOString().replace(/-/, ""));

// Date.prototype.toLocaleString
console.log(today2.toLocaleString());
console.log(today2.toLocaleString("ko-KR"));
console.log(today2.toLocaleString("en-US"));
console.log(today2.toLocaleString("ja-JP"));

// Date.prototype.toLocaleTimeString
console.log(today2.toLocaleTimeString());
console.log(today2.toLocaleTimeString("ko-KR"));
console.log(today2.toLocaleTimeString("en-US"));
console.log(today2.toLocaleTimeString("ja-JP"));
