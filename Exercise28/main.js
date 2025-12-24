// Exercise 28:Promises With async/Await
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
async function getUserData() {
    try{
        const user=await fetchDataUserPromise();
        console.log("User Data:",user);
    }
    catch(error){
        console.log("Error:",error);
    }
}
getUserData();