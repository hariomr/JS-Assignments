function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

let cars = ["Swift","swiftie", "Creta", "Nexon", "Scorpio-N", "Seltos", "Innova Crysta", "Venue", "Harrier", "Thar", "Baleno"];

function fetchResult(query) {

    let output = cars.filter(car => car.toLowerCase().includes(query.toLowerCase()));
    console.log("Search Results:", output);

    let resultsDiv = document.querySelector("#results");
    resultsDiv.innerHTML = output.length 
        ? output.map(car => `<div>${car}</div>`).join("")
        : "<div>No results found</div>";
}

let search = document.querySelector("#search-bar");
let count = 0;

search.addEventListener("input", debounce((event) => {
    fetchResult(event.target.value); 
}, 300));
