// Exercise 29: Fetching and Logging JSON Data

async function fetchData() {
    console.log("Start fetching data...");
    const response=await fetch('./data.json');
    console.log("Response",response);
    const data=await response.json();
    console.log("Data",data);
}
fetchData();