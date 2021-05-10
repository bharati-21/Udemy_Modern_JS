// Storage Controller
const StorageController = (function () {

})();

// Item Controller
const ItemController = (function () {
    // Item constructor

    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure
    const data = {
        item: [
            {
                id: 0,
                name: 'Steak Dinner',
                calories: 1200
            },
            {
                id: 1,
                name: 'Cookie',
                calories: 900
            },
            {
                id: 2,
                name: 'Eggs',
                calories: 300
            }
        ],
        currentItem: null,
        totalCalories: 0
    };

    return {
        logData: function() {
            return data;
        }
    }

})();

// UI Controller
const UIController = (function () {

})();

// App Controller
const AppController = (function (ItemController, UIController) {
    
    return {
        init: function () {
            
        }
    }

})(ItemController, UIController);


AppController.init();
