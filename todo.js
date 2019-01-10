// // v1 Requirements:
// // 1. It should have a place to store todos - store in array
// // 2. It should have a way to display todos - console.log
// // 3. It should have a way to add new todos - push
// // 4. It should have a way to change existing todos - todo[index] = 'new value'
// // 5. It should have a way to delete todos - todos.splice(starting index, # items to delete)

// // 1. It should have a place to store todos - store in array
// let todos = ['item1', 'item2', 'item3'];

// // 2. It should have a way to display todos - console.log
// console.log('My todos:', todos);

// // 3. It should have a way to add new todos - push
// todos.push('item4');
// todos.push('item5');

// // 4. It should have a way to change existing todos - todo[index] = 'new value'
// todos[0] = 'item 1 updated'

// // 5. It should have a way to delete todos - todos.splice(starting index, # items to delete)
// // todos.splice(index to start deleting at, how many items to delete)
// // code below deletes first item.
// // Aside: is runtime complexity of deleting from the beginning of an array O(n)?
// todos.splice(0, 1); 


// // Functions in js like a recipe:

// // function makeTurkeySandwich() {
// // 	Get one slice of bread;
// // 	Add turkey;
// // 	Put a slice of bread on top;
// // }

// // makeTurkeySandwich() to run the function.

// // Customizing functions:
// // function makeSandwichWith(filling) {
// // 	Get one slice of bread;
// // 	Add filling;
// // 	Put a slice of bread on top;
// // }

// // makeSandwichWith('Ham');
// // makeSandwichWith('Turkey');

// // V2 Requirements
// // 1. It should have a function to display todos.
// // 2. It should have a function to add todos.
// // 3. It should have a function to change a todo.
// // 4. It should have a function to delete a todo.

// let todos = ['item 1', 'item 2', 'item 3'];

// // 1. It should have a function to display todos
// function displayTodos() {
// 	console.log('My todos:', todos);
// }

// // 2. It should have a function to add todos.
// function addTodo(todo) {
// 	todos.push(todo);
// 	displayTodos();
// }

// // 3. It should have a function to change a todo.
// function changeTodo(index, newValue) {
// 	// need to search for the todo first to find the index
// 	todos[index] = newValue;
// 	displayTodos();
// }

// // 4. It should have a function to delete a todo.
// function deleteTodo(index) {
// 	todos.splice(index);
// 	displayTodos();
// }

// // If you're inside a function, you can look outside and see data.
// // if youre OUTSIDE a function, you CANNOT look inside and see data.

// //////////////////////////////////////////////
// // Use objects to group related data and functions together.
// // Data related to computer object:
// // Below are properties of the computer object.
// // This is how you make an object in js:
// const myComputer = {
//   operatingSystem: 'mac',
//   screensize: '15 inches',
//   purchaseYear: 2018
// };

// // This is how you access the properties of the myComputer object
// myComputer.operatingSystem

// // You can place functions on objects.
// // When you use 'this' inside a function that is on an object, 'this refers'
// // to the object you're on.
// const Kristi = {
//   name: 'Kristi',
//   sayName: function() { // reference object that you're on by using "this".
//   	console.log(this.name);
//   }
// }

// Kristi.sayName();

// //////////////////////////
// // V3 requirements
// // 1. It should store the todos array on an object.
// // 2. It should have a display todos method.
// // 3. It should have an addTodo method.
// // 4. It should have a changeTodo method.
// // 5. It should have a deleteTodo method.

// // Organize our code so everything that's related to a todo list is on a 
// // todo list object.

// const todoList = {
//   todos: ['item 1', 'item 2', 'item 3' ], // NO ; when setting a value of a property.
//   displayTodos: function() { // anonymous funct b/c access via todoList.displayTodos
//   	console.log('My todos:', this.todos);
//   },
//   addTodo: function(newTodo) {
//   	this.todos.push(newTodo);
//   	this.displayTodos();
//   },
//   changeTodo: function(index, newValue) {
//   	this.todos[index] = newValue;
//   	this.displayTodos();
//   },
//   deleteTodo: function(index) {
//   	this.todos.splice(index, 1);
//   	this.displayTodos();
//   } 
// };

// ////////////////////////
// // V4 requirements
// // 1. todoList.addTodo should add objects.
// // 2. todoList.changeTodo should change the todo Text property
// // 3. todoList.toggleCompleted should change the completed property.
// // Each to do will be an object with properties

// const todoList = {
//   todos: [], // NO ; when setting a value of a property.


//   displayTodos: function() { // anonymous funct b/c access via todoList.displayTodos
//     console.log('My todos:', this.todos);
//   },

//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },

//   changeTodo: function(index, todoText) {
//     this.todos[index].todoText = todoText;
//     this.displayTodos();
//   },

//   toggleCompleted: function(position) {
//     const todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   },

//   deleteTodo: function(index) {
//     this.todos.splice(index, 1);
//     this.displayTodos();
//   } 
// };


// //////// for loops in js

// i=0                 // Initialization
// say "hey" if i < 3  // Condition
// increase i by 1     // final-expression

// for (let i = 0; i < 3; i++) {
//   console.log("hey");
// }

// //////// loop over an array

// const testArray = ['item 1', 'item 2', 'itme 3'];

// for (let i = 0; i < testArray.length; i++) {
//   console.log(testArray[i]);
// }

// /////// if statements
// if (condition) {
//   // code that runs if condition is true
// } else {
//   // code that runs if condition is false
// }

// //////// V5 Requirements
// // 1. .displayTodos should show .todoText
// // 2. .displayTodos should tell you if .todos is empty
// // 3. .displayTodos should show .completed

// const todoList = {
//   todos: [], // NO ; when setting a value of a property.


//   displayTodos: function() { // anonymous funct b/c access via todoList.displayTodos
//     if (this.todos.length === 0) {
//       console.log('Your todo list is empty');
//     } else {
//       console.log('My todos:');
//       for (let i = 0, i < this.todos.length, i++) {

//         if (this.todos[i].completed === true) {
//           console.log('[x]', this.todos[i].todoText);
//         } else {
//           console.log('[ ]', this.todos[i].todoText);
//         }
//       }
//     }
//   },

//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },

//   changeTodo: function(index, todoText) {
//     this.todos[index].todoText = todoText;
//     this.displayTodos();
//   },

//   toggleCompleted: function(position) {
//     const todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   },

//   deleteTodo: function(index) {
//     this.todos.splice(index, 1);
//     this.displayTodos();
//   } 
// };


//////////// Version 6 Requirements
//1. .toggleAll: If everything true, make everything false.
//2. .toggleAll: Otherwise make everything true.

const todoList = {
  todos: [], // NO ; when setting a value of a property.
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
  },

  toggleCompleted: function(position) {
    const todo = this.todos[position];
    todo.completed = !todo.completed;
    
  },

  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    
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
    
  } 
};


///////// Version 7 Requirements
// 1. There should be a "Display todos" button and a "Toggle all" button in the app.
// 2. Clicking "Display todos" should run todoList.displayTodos.
// 3. Clicking "Toggle all" should run todoList.toggleAll.

// We want to get access to display todos and toggle all buttons
// Code below removed because added onclick attribute to the button DOM element
// const displayTodosButton = document.getElementById('displayTodosButton');
// const toggleAllButton = document.getElementById('toggleAllButton');

// We want to run the display todos method, when someone clicks on button
// displayTodosButton.addEventListener('click', function() {
//   todoList.displayTodos();
// });

// // We want to toggle all when someone clicks the button
// toggleAllButton.addEventListener('click', function() {
//   todoList.toggleAll();
// });

// Create a new handlers object to access the event listeners in the html:
// <button onclick="handlers.displayTodos()">Display Todos</button>
// <button onclick="handlers.toggleAll()">Toggle All</button>
let handlers = {
  addTodo: function() {
    // Get input from html input element first
    const addTodoTextInput = document.getElementById('addTodoTextInput');
    // use value from DOM element above to call the method
    todoList.addTodo(addTodoTextInput.value);
    // Once todo added, set the input to an empty string indicating it's 
    // ready for a new todo
    addTodoTextInput.value = '';
    view.displayTodos();
  },

  changeTodo: function() {
    const changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    const changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },

  deleteTodo: function() {
    const deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },

  toggleCompleted: function() {
    const toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};


//////// Version 8 requirements - completed in code above
// Note all methods below require arguements.
// 1. It should have working controls for .addTodo
// 2. It should have working controls for .changeTodo
// 3. It should have working controls for .deleteTodo
// 4. It should have working controls for .toggleCompleted


///////// Version 9 requirements
// 1. There should be an li element for every todo.
// 2. Each li element should contain .todoText.
// 3. Each li element should show .completed.

////////////////// THIS IS COOL (BELOW) ///////////////////////////////////////////
// create list elements in the DOM using the document object's
// createElement method
const todoLi = document.createElement('li');

// Add a query searching for CSS selectors #id, .class, element
const todosUl = document.querySelector('ul');

// Select ul element in DOM.append a child element(newly created element)
todosUl.appendChild(todoLi);
////////////////// THIS IS COOL (ABOVE)//////////////////////////////////////////

// responsible for what the user sees
let view = {
  displayTodos: function() {
    // get the element to work on in the DOM
    const todosUl = document.querySelector('ul');
    // clear out ul before adding more.
    todosUl.innerHTML = '';
    for (let i = 0; i < todoList.todos.length; i++) {

      const todoLi = document.createElement('li');
      const todo = todoList.todos[i];
      const todoTextWithCompleted = '';

      if (todo.completed === true) {
        todoTextWithCompleted = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompleted = '( ) ' + todo.todoText;
      }

      // textContent is a built in attribute of li element
      // access the todoLi object and set the textContent attribute
      // to todoTextWithCompleted
      todoLi.textContent = todoTextWithCompleted;
      todosUl.appendChild(todoLi);      
    }
  }
};

//////// Functions that enhance other functions////////

// This is a helper function that enhances other functions
function runWithDebugger(myFuncion) {
  debugger;
  runWithDebugger(myFuncion);
}

// setTimeout builtin js function. 
// take a function as an argument and time in milliseconds to delay
// the calling of the function in the first argument
setTimeout(function () {
  console.log('Wake up, Kristi!');
}, 5000);


/////// For Each /////
// run a function for each item in an array

const students = ['Kristi', 'Steve', 'Eloise'];

function logName(name) {
  console.log(name);
}

// Prints name for each student
for (let i = 0; i < students.length; i++) {
  logName(students[i]);
}

// students, as an array, has built in functions. forEach is one.
// it will run the function passed to it for each item in the array.
students.forEach(logName);
// OR define the function inside the argument
students.forEach(function logName(name) {
  console.log(name);
});
// OR don't need to name the function
students.forEach(function(name) {
  console.log(name);
});

// Create our own forEach which does same as built in
function forEach(myArray, myFunction) {
  for (let i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}

/////////// How to return a value
function multiplyTwoNumbers(a, b) {
  const result = a * b;
  return result;
}
const theProductOf2And10 = multiplyTwoNumbers(2, 10);


// /////////// Version 10 requirements
// 1.  There should be a way to create delete buttons.
// 2.  There should be a delete button for each todo.
// 3.  Each li should have an id that has the todo position.
// 4.  Delete buttons should have access to the todo id.
// 5.  Clicking delete should update todoList.todos and the DOM.
















