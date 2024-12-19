let counter = 10;

function increment(){
    counter++;
}

function decrement(){
    counter--;
}

function reset(){
    counter = 10;
}


module.exports = {increment,decrement,reset};