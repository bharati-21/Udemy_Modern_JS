// Iterator
function nameIterator(names) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < names.length ?
                {
                    value: names[nextIndex++],
                    done: false
                } :
                {
                    done: true
                };
        }
    }
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];

// Init iterator and pass namesArr
const names = nameIterator(namesArr);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);


// Generator: functions that can return multiple values
function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Creator
function* createId() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

const gen = createId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);