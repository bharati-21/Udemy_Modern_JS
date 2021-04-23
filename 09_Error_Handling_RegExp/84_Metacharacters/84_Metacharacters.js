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


// Character Sets
// Brackets [] - Character sets
re = /gr[ae]y/i;    // Must be one of the characters inside []
re = /[GF]ray/;     // Must be G or F 
re = /[^GF]ray/i;   // Match anything except the characters inside []
re = /[A-Z]ray/;    // Match any uppercase
re = /[a-z]ray/;    // Match any uppercase
re = /[A-Za-z]ray/;    // Match any uppercase
re = /[0-9]ray/;

// Braces {} - Quantifiers
re = /Hel{2}o/i;    // Must occur exactly m number of times
re = /Hel{2,4}o/i;  // Must occur at least m times and at most n times
re = /Hel{2,}o/i;   // Must occur at least m times


// Parenthesis () - Grouping
re = /([0-9]x){3}$/;

// String to match
const str = '1x1x1x';

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