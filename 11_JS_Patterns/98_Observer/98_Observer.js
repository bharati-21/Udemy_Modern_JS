function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log('You are subscribed to', fn.name);
    },
    unsubscribe: function (fn) {
        // Filter out from the list whatever matches the callback function. IF there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function (i) {
            if (i !== fn) {
                return i;
            }
        });
        console.log('You are unsubscribed to', fn.name);
    },
    fire: function () {
        this.observers.forEach(function (item) {
            item.call();
        });
    }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function () {
    click.subscribe(getCurMilliSec);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
    click.unsubscribe(getCurMilliSec);
});

document.querySelector('.fire').addEventListener('click', function () {
    click.fire();
});



// Click handler
const getCurMilliSec = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}