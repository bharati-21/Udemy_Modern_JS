// Storage Controller
const StorageController = (function () {
    return {
        storeItem: function (newItem) {
            let items = [];
            
            // Check if local storage already has an 'items' object

            if (JSON.parse(localStorage.getItem('items')) === null) {
                items = [];
                items.push(newItem);

                // Add to local storage
                localStorage.setItem('items', JSON.stringify(items));
            }
            else {
                // Get the items from local storage
                items = JSON.parse(localStorage.getItem('items'));
                
                // Push new item
                items.push(newItem);

                console.log(items);

                // Add the items to local storage
                localStorage.setItem('items', JSON.stringify(items));
            }
        },

        getItemsFromStorage: function () {
            let items;
            if (JSON.parse(localStorage.getItem('items')) === null) {
                items = [];
            }
            else {
                // Get the items from local storage
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },

        updateItemStorage: function (updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach((item, index) => {
                if (updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem);
                }
            });

            // console.log(items);
            localStorage.setItem('items', JSON.stringify(items));
        },

        deleteItemFromStorage: function (itemID) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach((item, index) => {
                if (itemID === item.id) {
                    items.splice(index, 1);
                }
            });

            console.log(items);
            localStorage.setItem('items', JSON.stringify(items));
        },

        clearFromLocalStorage: function () {
            localStorage.removeItem('items');
        }
    }
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
        // items: [
        //     { id: 0, name: 'Steak Dinner', calories: 1200 },
        //     { id: 1, name: 'Cookie', calories: 900 },
        //     { id: 2, name: 'Eggs', calories: 300 }
        // ],

        items: StorageController.getItemsFromStorage(),

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
            id = data.items.length;
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
        },

        getTotalCalories: function () {
            let total = 0;
            data.items.forEach((item) => {
                total += item.calories;
            });
            data.totalCalories = total;
            return data.totalCalories;
        },
        getItemById: function (id) {
            let found = null;

            data.items.forEach((item) => {
                if (item.id === id) {
                    found = item;
                }
            });

            return found;
        },

        setCurrentItem: function (currentItem) {
            data.currentItem = currentItem;
        },

        getCurrentItem: function() {
            return data.currentItem;
        },

        updateItem: function (input) {
            const updatedName = input.itemName;
            const updatedCalorie = parseInt(input.itemCalorie);

            let found = null;
            data.items.forEach((item) => {
                if (item.id === data.currentItem.id) {
                    item.name = updatedName;
                    item.calories = updatedCalorie;
                    found = item;
                }
            });
            return found;
        },

        deleteItem: function (id) {
            ids = data.items.map((item) => {
                return item.id;
            });

            // Get index
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index, 1);
        },

        deleteAllItems: function() {
            data.items = [];
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
        itemCalorieInput: '#item-calories',
        totalCalories: '.total-calories',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        listItems: '#item-list li',
        editItem: '.edit-item',
        clearBtn: '.clear-btn'
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

        // Clearing input from the text input
        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCalorieInput).value = '';
        },

        // Hiding list if the list is empty (no items)
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },

        // Adds total calories to the UI
        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        
        clearEditState: function () {
            UIController.clearInput();
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
        },

        addEditSate: function () {
            UIController.clearInput();
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
        },

        addEditItemToForm: function () {
            document.querySelector(UISelectors.itemNameInput).value = ItemController.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalorieInput).value = ItemController.getCurrentItem().calories;
        },

        updateListItem: function (updatedItem) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // console.log(listItems);

            
            // Turn Node List to array
            listItems = Array.from(listItems);
            listItems.forEach((item) => {
                if (item.getAttribute('id') === `item-${updatedItem.id}`) {
                    document.querySelector(`#${item.id}`).innerHTML = `
                        <strong>${updatedItem.name}: </strong> <em>${updatedItem.calories} calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fas fa-pencil-alt"></i>
                        </a>
                    `;
                }
            });
        },

        removeListItem: function (id) {
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },

        removeAllListItems: function () {
            // document.querySelector(UISelectors.itemList).innerHTML = '';

            const items = document.querySelectorAll(UISelectors.listItems);

            items.forEach((item) => {
                item.remove();
            });
        }
    }
})();

// App Controller
const AppController = (function (ItemController, UIController, StorageController) {
    // Load Event Listeners
    const loadEventListeners = function() {
        // Get UI Selectors
        const UISelectors = UIController.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', addItem);

        // Disable submit on enter
        document.addEventListener('keypress', function (e) {
            if (e.code === "Enter") {
                e.preventDefault();
                return false;
            }
        })

        // Update items (edit state) when pencil clicked
        document.querySelector(UISelectors.itemList).addEventListener('click', updateItemClick);

        // Update item submit
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // Back button submit
        document.querySelector(UISelectors.backBtn).addEventListener('click', function (e) {
            e.preventDefault();
            UIController.clearEditState();
        });

        // Delete button submit
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // Clear All Button
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllSubmit);
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
            
            const totalCalories = ItemController.getTotalCalories();
            UIController.showTotalCalories(totalCalories);

            // Clear the input
            UIController.clearInput();

            // Store to LocalStorage
            StorageController.storeItem(newItem);

        }
    }

    const updateItemClick = function (e) {
        e.preventDefault();
        const UISelectors = UIController.getSelectors();

        if (e.target.classList.contains('edit-item')) {
            console.log('Test');

            let id = e.target.parentNode.parentNode.id;
            idArr = id.split('-');
            id = parseInt(idArr[1]);
            
            const itemToEdit = ItemController.getItemById(id);
            console.log(itemToEdit);

            if (itemToEdit !== null) {
                ItemController.setCurrentItem(itemToEdit);
                UIController.addEditSate();
                UIController.addEditItemToForm();
                
                
            }
        }
    }

    const itemUpdateSubmit = function (e) {
        e.preventDefault();
        // console.log('Update submit');

        const input = UIController.getItemInput();
        const updatedItem = ItemController.updateItem(input);
        // UIController.setCurrentItem(updatedItem);

        UIController.updateListItem(updatedItem);
        
        const totalCalories = ItemController.getTotalCalories();
        UIController.showTotalCalories(totalCalories);

        // Update Local Storage
        StorageController.updateItemStorage(updatedItem);

        UIController.clearEditState();
    }

    const itemDeleteSubmit = function (e) {
        e.preventDefault();

        const currItem = ItemController.getCurrentItem();
        const currItemId = currItem.id;

        ItemController.deleteItem(currItemId);
        // console.log(currItemId);
        UIController.removeListItem(currItemId);

        const totalCalories = ItemController.getTotalCalories();
        UIController.showTotalCalories(totalCalories);

        StorageController.deleteItemFromStorage(currItemId);

        UIController.clearEditState();
    }

    const clearAllSubmit = function(e) {
        ItemController.deleteAllItems();
        UIController.removeAllListItems();

        const totalCalories = ItemController.getTotalCalories();
        UIController.showTotalCalories(totalCalories);

        // Clear the input
        UIController.clearInput();
        
        UIController.hideList();

        StorageController.clearFromLocalStorage();
    }

    return {
        // Initialize the App Module
        init: function () {
            console.log('Initializing App..');
            
            // Clear edit state
            UIController.clearEditState();

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

            const totalCalories = ItemController.getTotalCalories();
            UIController.showTotalCalories(totalCalories);
        },

        loadEventListeners: function () {
            loadEventListeners();
        }

    }
})(ItemController, UIController, StorageController);

AppController.init();
AppController.loadEventListeners();
