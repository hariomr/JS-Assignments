function apiCall(url,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(async()=>{{
            const response  = await fetch(url,{
                method:"GET"
            });

            if(response.ok){
                const data = await response.json();
                resolve(data);
            }else{
                reject();
            }
        }},delay)
    })
}

apiCall("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",2000).then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})



