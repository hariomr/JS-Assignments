let fetch = document.getElementById("fetch-btn");
fetch.addEventListener('click',buttonclickHandler);

function buttonclickHandler(){
    const xhr = new XMLHttpRequest();

    xhr.open("Get","https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    xhr.onprogress = function (){
        console.log("on progress");
    }


    // what to do when the response is ready
    xhr.onload = function (){
        console.log(this.responseText);
    }
    
    // send the request 
    xhr.send();
}
