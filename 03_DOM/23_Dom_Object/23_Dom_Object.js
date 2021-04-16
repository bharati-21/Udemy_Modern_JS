let val;

val = document;
val = document.all;
console.log(val);
console.log(val[2]);
console.log(val.length);

console.log(document.body);
console.log(document.doctype);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);

console.log(document.forms);
console.log(document.forms[0]);

console.log(document.forms[0].id);
console.log(document.forms[0].method);

console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].className);
console.log(document.links[0].classList);

console.log(document.scripts);
console.log(document.scripts[2].getAttribute('src'));

let scripts = document.scripts;

let scriptArr = Array.from(scripts)

scriptArr.forEach(function (script){
    console.log(script.getAttribute('src'));
});