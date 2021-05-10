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

    // Data Structure that stores all the items
    const data = {
        items: [
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

    const addNewItem = function (itemName, itemCalorie) {
        // console.log(itemName, itemCalorie);
        
        let id;
        // Create id
        if (data.items.length > 0) {
            id = data.items.length - 1;
        }
        else {
            id = 0;
        }

        // Calories to number
        const calories = parseInt(itemCalorie);

        const newItem = new Item(id, itemName, calories);

        // Add to items array
        data.items.push(newItem);

        return newItem;
    }

    return {
        logData: function() {
            return data;
        },

        getItems: function () {
            return data.items;
        },

        addNewItem: function (itemName, itemCalorie) {
            return addNewItem(itemName, itemCalorie);
        }
    }

})();

// UI Controller
const UIController = (function() {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        backBtn: '.back-btn',
        itemNameInput: '#item-name',
        itemCalorieInput: '#item-calories'
    };

    loadItems = function (items) {
        const ul = document.querySelector(UISelectors.itemList);
        let html = ``;

        items.forEach((item) => {
            const li = document.createElement('li');
            li.className = 'collection-item'
            li.id = `item-${item.id}`;
            html= `<strong>${item.name}: </strong> <em>${item.calories} calories</em>`;

            li.innerHTML = html;
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.className = "secondary-content";
            a.innerHTML = `<i class="edit-item fas fa-pencil-alt"></i>`;
            li.appendChild(a);
            ul.appendChild(li);
            // console.log(li);
        });
        
    }


    return {
        populateListItems: function (items) {
            loadItems(items);
        },

        getSelectors: function () {
            return UISelectors;
        },

        getItemInput: function () {
            return {
                itemName: document.querySelector(UISelectors.itemNameInput).value,
                itemCalorie: document.querySelector(UISelectors.itemCalorieInput).value
            }
        },
        addListItem: function (item) {
            // console.log(item);
            const li = document.createElement('li');
            li.className = 'collection-item'
            li.id = `item-${item.id}`;
            html = `
                <strong>${item.name}: </strong> <em>${item.calories} calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fas fa-pencil-alt"></i>
                </a>
            `;

            li.innerHTML = html;
            
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
            // console.log(li);
        }
    }

})();

// App Controller
const AppController = (function (ItemController, UIController) {
    
    // Load Event Listeners
    const loadEventListeners = function() {
        // Get UI Selectors
        const UISelectors = UIController.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', addItem);
    }

    const addItem = function (e) {
        e.preventDefault();

        // Get Input Values
        const itemInput = UIController.getItemInput();
        const itemName = itemInput.itemName;
        const itemCalorie = itemInput.itemCalorie;
        
        // Check for name and calorie input
        if (itemName !== '' && itemCalorie !== '') {
            // console.log(itemName, itemCalorie);

            // Add Item
            const newItem = ItemController.addNewItem(itemName, itemCalorie);

            // console.log(newItem);

            // Add Item to UI List
            // const data = ItemController.getItems();
            UIController.addListItem(newItem);
        }
    }

    return {
        init: function () {
            console.log('Initializing App..');
            const data = ItemController.getItems();
            UIController.populateListItems(data);
        },

        loadEventListeners: function () {
            loadEventListeners();
        }

    }

})(ItemController, UIController);


AppController.init();
AppController.loadEventListeners();
