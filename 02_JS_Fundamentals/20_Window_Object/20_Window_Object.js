// Window methods/ objects/ properties

window.console.log(123);
// window is optional

// alert
// alert('This is an alert');

// Prompt
// const ip = prompt('What is your name?');
// console.log('Hello', ip);

// confirm
// if (confirm('Are you sure?')) {
//     console.log('Yes');
// }
// else {
//     console.log('No');
// }

// Properties
console.log(window.outerHeight, window.outerWidth);
console.log(window.innerHeight, window.innerWidth);
console.log(window.scrollY, window.scrollX); // Good for animated scrolling


// Location object
val = window.location;
console.log(val);
console.log(val.href);
console.log(val.hostname);
console.log(val.port);
console.log(val.protocol);
// console.log(val.search);

// redirect
// val.href = 'https://google.com';
// val.reload();

// History object
// window.history.go(-5);
console.log(window.history.length);

// Navigator object
console.log(window.navigator);
val = window.navigator;
console.log(val.appName);
console.log(val.appVersion);
console.log(val.userAgent);
console.log(val.platform);
console.log(val.vendor);
console.log(val.language);