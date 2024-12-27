const form = document.getElementById("auto-save-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");


document.addEventListener("DOMContentLoaded",loadContent);

let debounceTimer;

function saveDataDebounced(event) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  }, 300); 
}

function loadContent(){
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      nameInput.value = savedData.name || "";
      emailInput.value = savedData.email || "";
    }
}

nameInput.addEventListener("input",saveDataDebounced);
emailInput.addEventListener("input",saveDataDebounced);

