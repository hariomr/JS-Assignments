async function fetchApi(id){
    const Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    try{
        if(Response.ok){
            const data = await Response.json();
            console.log(`Title: ${data.title}`);
            console.log(`User ID: ${data.userId}`);
        }
    }catch(e){
        console.log(e);
    }
}

fetchApi(1);
