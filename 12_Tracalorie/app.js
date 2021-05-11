// Storage Controller
const StorageController = (function () {

})();

// Item Controller
const ItemController = (function () {
    // Item constructor that initializes new Item
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure that stores all the items
    const data = {
        items: [
        //     { id: 0, name: 'Steak Dinner', calories: 1200 },
        //     { id: 1, name: 'Cookie', calories: 900 },
        //     { id: 2, name: 'Eggs', calories: 300 }
        ],

        // Item points to the current item that appears on the text input
        currentItem: null,

        // Calculates the total calories
        totalCalories: 0
    };

    // Adds new item to the data structure and item object
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

        // Initialize new item
        const newItem = new Item(id, itemName, calories);

        // Add to items array
        data.items.push(newItem);

        return newItem;
    }

    return {
        // Prints data
        logData: function() {
            return data;
        },

        // Returns all data items
        getItems: function () {
            return data.items;
        },

        // Calls to add new item
        addNewItem: function (itemName, itemCalorie) {
            return addNewItem(itemName, itemCalorie);
        }
    }
})();

// UI Controller
const UIController = (function () {
    // All selectors to select UI Elements in HTML
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        backBtn: '.back-btn',
        itemNameInput: '#item-name',
        itemCalorieInput: '#item-calories'
    };

    // Load items on to the list
    loadItems = function (items) {
        const ul = document.querySelector(UISelectors.itemList);
        let html = ``;

        items.forEach((item) => {
            // Create li
            const li = document.createElement('li');

            // Add class name and ID
            li.className = 'collection-item'
            li.id = `item-${item.id}`;

            // Add the name and calories of the item
            html= `<strong>${item.name}: </strong> <em>${item.calories} calories</em>`;
            li.innerHTML = html;

            // Create link which stores the pencil icon
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.className = "secondary-content";
            a.innerHTML = `<i class="edit-item fas fa-pencil-alt"></i>`;

            // Append the link to li
            li.appendChild(a);

            // Append li to the list
            ul.appendChild(li);
        });
        
    }


    return {
        // Calls to load items 
        populateListItems: function (items) {
            loadItems(items);
        },

        // Returns selectors
        getSelectors: function () {
            return UISelectors;
        },

        // Returns value of input from user
        getItemInput: function () {
            return {
                itemName: document.querySelector(UISelectors.itemNameInput).value,
                itemCalorie: document.querySelector(UISelectors.itemCalorieInput).value
            }
        },

        // Adds the user input to the list
        addListItem: function (item) {
            // Show List Item
            document.querySelector(UISelectors.itemList).style.display = 'block';

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
            
            // Adds the li before the end of ul
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },

        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCalorieInput).value = '';
        },

        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
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
        
        // Check for name and calorie input if they are empty
        if (itemName !== '' && itemCalorie !== '') {
            // Add Item
            const newItem = ItemController.addNewItem(itemName, itemCalorie);

            // Add Item to UI List
            // const data = ItemController.getItems();
            UIController.addListItem(newItem);

            // Clear the input
            UIController.clearInput();
        }
    }

    return {
        // Initialize the App Module
        init: function () {
            console.log('Initializing App..');
            
            // Get all items from the data structure
            const data = ItemController.getItems();

            // Hide the List if no items
            if (data.length === 0) {
                UIController.hideList();
            }
            else {
                // Add the retrieved items on to the list
                UIController.populateListItems(data);
            }
        },

        loadEventListeners: function () {
            loadEventListeners();
        }

    }
})(ItemController, UIController);

AppController.init();
AppController.loadEventListeners();
