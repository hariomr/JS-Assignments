const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("grandparent");
})

parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("parent");
})

child.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child");
})



// bubbling 


// Event bubbling is a mechanism in the DOM (Document Object Model) where an event starts from the element that triggered it (the target) and propagates upwards through its ancestors in the DOM tree. This allows parent elements to respond to events that occur on their child elements.

// Event capturing, also known as trickling, is the opposite of event bubbling. It is a mechanism where an event starts at the top of the DOM tree and propagates down to the target element before triggering any event listeners on the target itself.

// to stop the bubbling and capturing. use stop propogation()


