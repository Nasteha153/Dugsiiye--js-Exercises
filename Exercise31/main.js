// Exercise 31:http request 
 async function fetchData(){
    try{
        console.log("Fetching data...");
        const response =await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Response received", response);
        const data = await response.json();
        console.log("Data parsed", data);

    }catch(error){
        console.error("An error occurred while fetching data:", error);
}
}
fetchData();