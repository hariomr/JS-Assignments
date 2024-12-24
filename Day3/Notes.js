// // Callbacks are the functions in js which are passed as the arguments in another fucntion 

// function greet(name,callback){
//     greet = callback() + " " +`${name}`;
//     console.log(greet);
// }


// function callback(){
//     return "Hello";
// }

// greet("Hariom",callback);


// // Promises are just a way of handling asynchronus operations, it have two arguments (reject and resolve)

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise is rejected");
//         // resolve("Promise is resolved");
//     },1000);
// })

// promise
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// // then is used to handle the fullfillment of a promise
// // catch is used to handle the any error in promise chaining

// // Promise Chaining 

// function time(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("first promise")
//         },1000)
//     })
// }

// time().then(()=>{
//     console.log("First Promise");
// }).then(()=>{
//     console.log("Second Promise");
// })
// .then(()=>{
//     console.log("Third Promise");
// })

// // Web Worker is a javascript that runs in background, independently of other scripts without affecting the performance of the page.
// // Web workers are giving us the possibility to write multi-threaded Javascript, which does not block the DOM. Even the Asynchronous operations block the DOM to some extent. On the other side, web workers help us solve this problem, escaping the single-threaded environment and reaching a higher performance of our web pages.

// const { Worker } = require('worker_threads');
// const worker = new Worker('./Day3/worker.js');

// // Listen for messages from the worker
// worker.onmessage = (event) => {
//     console.log('Received from worker:', event.data);
// };

// // Send a message to the worker
// worker.postMessage(10);




// // Using setTimeOut


// console.log("Before TimeOut");

// setTimeout(()=>{
//     console.log("Logged after 5 seconds")
// },5000);

// console.log("After TimeOut");


// // Using setIntervals

// let count = 0;

// const intervalId = setInterval(()=>{
//     count++;
//     console.log(`Count ${count}`);

//     if(count===5){
//         clearInterval(intervalId);
//     }
// },1000)


// const delay = (ms) => {
//     return new Promise(resolve => setTimeout(resolve,ms));
// }


// async function example() {
//     console.log("Before TimeOut");
//     await delay(1000);
//     console.log("Done!!!");
// }

// example();

// // Async/Await

// // the async keyword allows you to write the async code that's behave like sync code

// async function fetchProducts(){
//     try{
//         const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
//         if(response){
//             const data = await response.json();
//             console.log(data.forEach(p => console.log(p.name)));
//         }
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// fetchProducts();




// // Promise combinators : they're are of 4 types 

// // 1. promise.all() :- waits for all the promises to resolve or for one to reject 
// // example :- 
// const promise1 = Promise.resolve(10);
// const promise2 = Promise.resolve(20);
// const promise3 = Promise.resolve(30);

// Promise.all([promise1, promise2, promise3])
//   .then(results => console.log(results)) // [10, 20, 30]
//   .catch(error => console.error(error));

//   2.promise.allSettled() :- waits for all the promises to settled(either resolve or reject)

// 3. promise.race() :- return the first promise to settle (either resolve or reject)

//4. promise.any() :- return the first promise that resolve successfully (only resolve)



// the sequential and parallel processing refer to the ways asynchronous tasks are handled, particularly when using promises or asynchronous functions. 



// The task in sequential processing are executed one after another, waiting for each to complete beforee starting the next.


// const task1 = () => new Promise(resolve =>
//     setTimeout(()=>
//         resolve("Task1 completed"),1000)
// )

// const task2 = () => new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Task2 completed");
//     });
// })

// async function sequential(){
//     console.log(await task1());
//     console.log(await task2());
// }

// sequential();

// In parallel processing  Tasks are executed simultaneously without waiting for one to complete before starting the others.

async function parallel(){
    const task1 = () => new Promise(resolve =>
        setTimeout(()=>
            resolve("Task1 completed"),2000)
    )
    
    const task2 = () => new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task2 completed");
        },1000);
    })

    const result = await Promise.all([task1(),task2()]);
    console.log(result);
}

parallel();
