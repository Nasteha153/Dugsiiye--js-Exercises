// Exercise 27:Promises
function fetchDataUserPromise() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve("process completed sucessfully");
            } else {
                reject("Error fetching user data.");
            }
}, 2000);
    });
}
fetchDataUserPromise()
.then(data=>console.log("User Data:",data))
.catch(error=>console.log("Error:",error));
