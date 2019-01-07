// v1 Requirements:
// 1. It should have a place to store todos - store in array
// 2. It should have a way to display todos - console.log
// 3. It should have a way to add new todos - push
// 4. It should have a way to change existing todos - todo[index] = 'new value'
// 5. It should have a way to delete todos - todos.splice(starting index, # items to delete)

// 1. It should have a place to store todos - store in array
let todos = ['item1', 'item2', 'item3'];

// 2. It should have a way to display todos - console.log
console.log('My todos:', todos);

// 3. It should have a way to add new todos - push
todos.push('item4');
todos.push('item5');

// 4. It should have a way to change existing todos - todo[index] = 'new value'
todos[0] = 'item 1 updated'

// 5. It should have a way to delete todos - todos.splice(starting index, # items to delete)
// todos.splice(index to start deleting at, how many items to delete)
// code below deletes first item.
// Aside: is runtime complexity of deleting from the beginning of an array O(n)?
todos.splice(0, 1); 


// Functions in js like a recipe:

// function makeTurkeySandwich() {
// 	Get one slice of bread;
// 	Add turkey;
// 	Put a slice of bread on top;
// }

// makeTurkeySandwich() to run the function.

// Customizing functions:
// function makeSandwichWith(filling) {
// 	Get one slice of bread;
// 	Add filling;
// 	Put a slice of bread on top;
// }

// makeSandwichWith('Ham');
// makeSandwichWith('Turkey');

// V2 Requirements
// 1. It should have a function to display todos.
// 2. It should have a function to add todos.
// 3. It should have a function to change a todo.
// 4. It should have a function to delete a todo.

let todos = ['item 1', 'item 2', 'item 3'];

// 1. It should have a function to display todos
function displayTodos() {
	console.log('My todos:', todos);
}

// 2. It should have a function to add todos.
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// 3. It should have a function to change a todo.
function changeTodo(index, newValue) {
	// need to search for the todo first to find the index
	todos[index] = newValue;
	displayTodos();
}

// 4. It should have a function to delete a todo.
function deleteTodo(index) {
	todos.splice(index);
	displayTodos();
}

// If you're inside a function, you can look outside and see data.
// if youre OUTSIDE a function, you CANNOT look inside and see data.

//////////////////////////////////////////////
// Use objects to group related data and functions together.
// Data related to computer object:
// Below are properties of the computer object.
// This is how you make an object in js:
const myComputer = {
  operatingSystem: 'mac',
  screensize: '15 inches',
  purchaseYear: 2018
};

// This is how you access the properties of the myComputer object
myComputer.operatingSystem

// You can place functions on objects.
// When you use 'this' inside a function that is on an object, 'this refers'
// to the object you're on.
const Kristi = {
  name: 'Kristi',
  sayName: function() { // reference object that you're on by using "this".
  	console.log(this.name);
  }
}

Kristi.sayName();

//////////////////////////
// V3 requirements
// 1. It should store the todos array on an object.
// 2. It should have a display todos method.
// 3. It should have an addTodo method.
// 4. It should have a changeTodo method.
// 5. It should have a deleteTodo method.

// Organize our code so everything that's related to a todo list is on a 
// todo list object.

const todoList = {
  todos: ['item 1', 'item 2', 'item 3' ], // NO ; when setting a value of a property.
  displayTodos: function() { // anonymous funct b/c access via todoList.displayTodos
  	console.log('My todos:', this.todos);
  },
  addTodo: function(newTodo) {
  	this.todos.push(newTodo);
  	this.displayTodos();
  },
  changeTodo: function(index, newValue) {
  	this.todos[index] = newValue;
  	this.displayTodos();
  },
  deleteTodo: function(index) {
  	this.todos.splice(index, 1);
  	this.displayTodos();
  } 
};

////////////////////////
// V4 requirements
// 1. todoList.addTodo should add objects.
// 2. todoList.changeTodo should change the todo Text property
// 3. todoList.toggleCompleted should change the completed property.
// Each to do will be an object with properties

const todoList = {
  todos: [], // NO ; when setting a value of a property.


  displayTodos: function() { // anonymous funct b/c access via todoList.displayTodos
    console.log('My todos:', this.todos);
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    const todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  } 
};


//////// for loops in js

i=0                 // Initialization
say "hey" if i < 3  // Condition
increase i by 1     // final-expression

for (let i = 0; i < 3; i++) {
  console.log("hey");
}

//////// loop over an array

const testArray = ['item 1', 'item 2', 'itme 3'];

for (let i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}

/////// if statements
if (condition) {
  // code that runs if condition is true
} else {
  // code that runs if condition is false
}

//////// V5 Requirements
// 1. .displayTodos should show .todoText
// 2. .displayTodos should tell you if .todos is empty
// 3. .displayTodos should show .completed

const todoList = {
  todos: [], // NO ; when setting a value of a property.


  displayTodos: function() { // anonymous funct b/c access via todoList.displayTodos
    if (this.todos.length === 0) {
      console.log('Your todo list is empty');
    } else {
      console.log('My todos:');
      for (let i = 0, i < this.todos.length, i++) {

        if (this.todos[i].completed === true) {
          console.log('[x]', this.todos[i].todoText);
        } else {
          console.log('[ ]', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    const todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  } 
};


//////////// Version 6 Requirements
//1. .toggleAll: If everything true, make everything false.
//2. .toggleAll: Otherwise make everything true.

const todoList = {
  todos: [], // NO ; when setting a value of a property.


  displayTodos: function() { // anonymous funct b/c access via todoList.displayTodos
    if (this.todos.length === 0) {
      console.log('Your todo list is empty');
    } else {
      console.log('My todos:');
      for (let i = 0, i < this.todos.length, i++) {

        if (this.todos[i].completed === true) {
          console.log('[x]', this.todos[i].todoText);
        } else {
          console.log('[ ]', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    const todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },

  toggleAll: function() {
    const totalTodos = this.todos.length;
    const completedTodos = 0;
    //Get number of completed todos
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    //If everything's true, make everything false
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Otherwise, make everything true.
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  } 
};


///////// Version 7 Requirements
// 1. There should be a "Display todos" button and a "Toggle all" button in the app.
// 2. Clicking "Display todos" should run todoList.displayTodos.
// 3. Clicking "Toggle all" should run todoList.toggleAll.


