const form = document.getElementById("auto-save-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");


document.addEventListener("DOMContentLoaded",loadContent);

function handleSubmit(event) {
    event.preventDefault();
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
      };
      localStorage.setItem("formData", JSON.stringify(formData));

}

function loadContent(){
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      nameInput.value = savedData.name || "";
      emailInput.value = savedData.email || "";
    }
}

