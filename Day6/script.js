const weather_info = document.querySelector("#weather-info");
const location_val = document.getElementById("location");




document.addEventListener("DOMContentLoaded",autoLoad);
let debounceTimer;
let locationInput;

function debounce() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(async () => {
    const locationInput = location_val.value;
    if (locationInput) {
      await apiCall(locationInput);
    }else{
      alert("Enter a location");
    }
  }, 300);
}

async function apiCall(locationInput) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0be6342a571b4a06a2861239242712&q=${locationInput}`
    );
    console.log(response);
    const data = await response.json();
    if (!response.ok) {
      alert("Enter a Valid Location");
    }

    const { name, region, country } = data.location;
    const { temp_c, feelslike_c } = data.current;
    const condition = data.current.condition.text;

    weather_info.innerHTML = `<h3>Weather in ${name}, ${region}, ${country}</h3>
    <p>Temperature: ${temp_c}°C</p>
    <p>Feels Like: ${feelslike_c}°C</p>
    <p>Condition: ${condition}</p>`;

    localStorage.setItem("location", name);
  } catch (err) {
    console.log(err);
  }
}

function autoLoad(){
  const data = localStorage.getItem("location");
  if(data!==null){
    apiCall(data);
  }
  location_val.value = data;
}
function submitHandler(event) {
  event.preventDefault();
  debounce();
}
