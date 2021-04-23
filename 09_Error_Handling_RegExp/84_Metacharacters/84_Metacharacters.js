let re;
// Literal Characters
re = /hello/;
re = /hello/i;      // case insensitive

// Metacharacter Symbols
re = /^h/i;         // Must start with. Gives null if the str = "Bharati Hello World" as the string does not begin with h

re = /d$/i;         // Must end with d 
re = /world$/i;     // Must end with world 
re = /^hello$/i;    // Must start and end with hello
re = /^h.llo/i;     // Matches any ONE character
re = /^h*llo/i;     // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character (Matches gry as well)
re = /gre?a?y\?/i;



// String to match
const str = 'Hello World';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);