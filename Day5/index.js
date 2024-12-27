// callBack

// call stack  :- JavaScript uses a callBack to keep track of the currently executing fucntion 

// callback Queue:- Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime, are comes in the callback queue after they handled by the browser and then eventloop checks if the the callback stack is empty then it pushes the first function from the callback queue to callback stack

// eventLoop :- The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.



// Microtasks are the tasks that are queued in microtask queue. they have higher priority than macrotasks and are executed just after the synchronous task finshed or call stack gets clear but before the macrotasks


// example :_ .then, .catch, .finally

//  Macrotasks are tasks that are queued in the macrotask queue and executed after the microtask queue has been emptied.

// Examples of Macrotasks:

// setTimeout
// setInterval
// setImmediate (Node.js)
// I/O operations
// requestAnimationFrame


// Asynchronous programming in JavaScript allows you to execute tasks without blocking the main thread, enabling smoother and more responsive applications. It is essential for handling tasks like fetching data from an API, reading files, or processing timers, where operations may take varying amounts of time to complete.



// Both localStorage and sessionStorage are part of the Web Storage API in JavaScript. They allow developers to store data in the browser for client-side use. The key difference lies in their lifetime and scope.

// Local Storage : - : localStorage stores data with no expiration time. The data persists even if the browser is closed and reopened. data is not deleted until explicitly deleted. 

// example:- localStorage.setItem('username', 'Hariom');

// Get an item from localStorage
console.log(localStorage.getItem('username')); // Output: Hariom

// Remove an item from localStorage
localStorage.removeItem('username');

// Clear all items from localStorage
localStorage.clear();


// Session Storage :- sessionStorage stores data for the duration of the page session. The data is cleared when the browser tab or window is closed.

// Set an item in sessionStorage
sessionStorage.setItem('cartItems', '5');

// Get an item from sessionStorage
console.log(sessionStorage.getItem('cartItems')); // Output: 5

// Remove an item from sessionStorage
sessionStorage.removeItem('cartItems');

// Clear all items from sessionStorage
sessionStorage.clear();




