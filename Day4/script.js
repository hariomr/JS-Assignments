// const btn = document.getElementById("btn");
// btn.innerText = "hello";
// btn.style.backgroundColor = "#895675";
// btn.style.margin = "10px";

// const value = document.getElementById("name");
// const val = value.getAttribute("value");
// console.log(val);


// const form = document.querySelector("form");
// const formDiv = document.createElement("div");
// const label = document.createElement("label");
// label.innerText = "ID";
// const inp = document.createElement("input");
// formDiv.appendChild(label);
// formDiv.appendChild(inp);
// form.appendChild(formDiv);
// // formDiv.removeChild(label);
// // form.removeChild(formDiv);

const body = document.querySelector("body");
const submit = document.querySelector("#submit-btn");

submit.addEventListener("click",()=>{
    body.style.background = "green";
})

submit.removeEventListener("click",()=>{
    body.style.background = "green";
})

const customEvent = new CustomEvent("myCustomEvent", {
    detail: { message: "Hello, this is a custom event!" },
});

const element = document.querySelector("#myElement");
element.dispatchEvent(customEvent);


element.addEventListener("myCustomEvent", (event) => {
    console.log("Custom event triggered:", event.detail.message);
});



// Debouncing and throttling


// debouncing ensures that a function is executed only after a specified period of time has passed since the last time it invoked 

// throttle 

// Throttling ensures that a function is executed at most once in a specified time interval, regardless of how many times the event is triggered within that interval.