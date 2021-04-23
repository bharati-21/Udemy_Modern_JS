try {
    // Produces Reference Error
    // myFunction();

    // Produces TypeError
    // null.myFunction();

    // Produces SyntaxError
    // console.log(eval('Hello World')); // Sees Hello and World as variables

    // Produces URIError
    // decodeURIComponent('%');

}

catch (e) {
    // console.log('IT"S NULL!');
    console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
}

finally {
    console.log('Finally runs regardless of the result...');
}

// Error Handling ensures the script execution is not stopped when an error is encountered.
console.log('Program continues...');


const user = { email: 'jdoe@gmail.com' };
try {
    if (!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
}
catch (e) {
    console.log(`User Error: ${e.message}`);
}