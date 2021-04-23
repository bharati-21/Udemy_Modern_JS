let re;
re = /hello/i;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global research (search the entire input for all instances)

console.log(re);
console.log(re.source);

// Functions to evaluate expression

//1. exec() - Return result in an array or null when no match
const result = re.exec('hello world');
// Regular expression, starting index where the string matches the input, input
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// 2. test() - Returns true or false
const testResult = re.test('hello world');
console.log(testResult);

// 3. match() - Returns result array or null
const str = 'HellThere';
const matchResult = str.match(re);
console.log(matchResult);

// 4. search() - Returns index of the first match. Not found, returns -1
const ipStr = 'Bharati Hello There';
const searchResult = ipStr.search(re);
console.log(searchResult);

// 5. replace() - Return new string with some or all matches of the pattern
const repStr = 'Hello There';
const replaceResult = repStr.replace(re, 'Hi');
console.log(replaceResult);