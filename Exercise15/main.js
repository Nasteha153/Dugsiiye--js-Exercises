const people =[
     { name:"Ali" ,age:30 ,city:"muqdisho"},
       { name:"Ahmed" ,age:25 ,city:"dubai"},
       { name:"Mohamed" ,age:35 ,city:"london"}
];
 console.log("properties and values of each person");
for (const person of people) {
    for (const key in person) {
        console.log(key+": "+person[key]);
    }
    console.log("-----");
}
 