// Exercise 26: Synchronous Data Fetching Simulation,blocking delay
function fetchDataUser() {
    alert("Fetching data for user...");
    return  { id: 1, name: "Aisha",city: "Cairo" };
}
console.log("Beginning data fetch process.");
const userData = fetchDataUser();
console.log("User Data:", userData);
console.log("Data fetch process is blocked until data is fetched.");


// Non-blocking using setTimeout
function fetchDataUserAsync(callback) {
    setTimeout(() => {
        callback({ id: 1, name: "Aisha", city: "Cairo" });
    }, 2000);
}

console.log("Beginning asynchronous data fetch process.");
fetchDataUserAsync(function(userData) {
    console.log("User Data:", userData);
});
console.log("Asynchronous data fetch process initiated, but not blocked.");