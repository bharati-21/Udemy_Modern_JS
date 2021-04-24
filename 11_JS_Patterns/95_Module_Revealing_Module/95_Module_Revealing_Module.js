// Basic Structure

// (function () {
//     // Declare private variables and functions

//     return {
//         // Declare public variables and functions
//     }
// })();

// Standard Module Pattern
const UICtrl = (function () {
    let text = 'Hello World';

    const changeTxt = function () {
        const el = document.querySelector('h1');
        el.textContent = text;
    }

    return {
        callChangeText: function () {
            changeTxt();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

// UICtrl.changeTxt();
console.log(UICtrl.text);

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log("Item Added");
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({ id: 1, name: 'John' });
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));