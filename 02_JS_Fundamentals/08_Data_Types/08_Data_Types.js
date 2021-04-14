// 1. Primitive Data Types
    // 1.1) Strings
    const name = 'John Doe';
    console.log('Type of variable:', typeof name);

    // 1.2) Numbers
    const age = 21;
    console.log('Type of variable:', typeof age);

    // 1.3) Boolean
    const hasKids = true;
    console.log('Type of variable:', typeof hasKids);

    // 1.4) Null
    const car = null;
    console.log('Type of variable:', typeof car);

    // 1.5) Undefined
    let test;
    console.log('Type of variable:', typeof test);

    // 1.6) Symbol
    const sym = Symbol();
    console.log('Type of variable:', typeof sym);


// 2. Reference Types

    // 2.1) Array
    const hobbies = ['reading', 'singing', 'movies'];
    console.log('Type of variable:', typeof hobbies);

    // 2.2) Object Literal
    const address = {
        city: 'Chennai',
        state: 'TN'
    };
    console.log('Type of variable:', typeof address);


    // 2.3) Date
    const today = new Date();
    console.log('Type of variable:', typeof today);
