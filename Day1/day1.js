// Create a counter module that has increment, decrement, and reset methods.

const counterModule = require("./counter");

console.log(counterModule.increment());
console.log(counterModule.decrement());
console.log(counterModule.reset());



// Create a higher-order function to filter and transform data using map and filter.

const num = [1,2,3,4,5,6,7,8,9,10];

function higherOrder(num,filterfn){
    return num.filter(filterfn).map((x)=>{return x+1});
}

filterfn = (x)=>{
    return x%2==0;
}

console.log(higherOrder(num,filterfn));




