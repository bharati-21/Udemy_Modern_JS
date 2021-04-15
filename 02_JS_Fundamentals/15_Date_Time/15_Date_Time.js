let val;
const today = new Date();
let birthday = new Date('07-21-1999 11:25:06');

val = today;
console.log(val, typeof val);
// val = today.toString();

val = birthday;
console.log(val);

val = new Date('July 21 1999');
console.log(val);

val = new Date('07/21/1999');
console.log(val);

console.log(today.getMonth()); // 0 based number
console.log(today.getDate()); // 1-31
console.log(today.getDay()); // 0-6
console.log("Date.now()", Date.now()); // milliseconds elapsed since 1st Jan 1970 midnight
console.log((new Date).getFullYear()); //4 digits for 4 years
console.log((new Date).getHours()); // 0-23
console.log((new Date).getMilliseconds()); // 0-999
console.log((new Date).getMinutes()); 0-59
console.log((new Date).getSeconds()); 0-59
console.log((new Date()).getTime()); //number of milliseconds since January 1, 1970, 00:00:00 UTC.
console.log((new Date()).getUTCDate());
console.log((new Date()).getUTCHours());

birthday.setMonth(9);
birthday.setDate(12);
birthday.setFullYear(1994);
birthday.setHours(15);
birthday.setMinutes(25);
birthday.setSeconds(35);
console.log(birthday);
