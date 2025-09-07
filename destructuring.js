const arr = ["Steve", "Bill"];
const [steve, bill] = arr;

console.log(steve);
console.log(bill);

let a = "steve";
let b = "bill";

[a, b] = [b, a]

console.log(a, b);



const colors = ["red", "blue", "green" , "black", "white"];

console.log(colors);

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


const [fourthColor, ...extracolors] = colors;
console.log(fourthColor)
console.log(extracolors);




// extract values from objects

const person1 = {
    firstName : "Steve",
    lastName : "Bill",
    age  : 65,
    job : "founder",
    
}
const person2 = {
    firstName2 : "Elon",
    lastName2 : "Musk",
    age2  : 55,
}
// const {firstName, lastName, age, job}=person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);
const {firstName2, lastName2, age2, job2="unemploye"} = person2;
console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);

console.log("-------------------")

// destructure in function parameters
function displayPerson({firstName, lastName, age, job}){
    console.log(`name :${firstName} ${lastName}`);
    console.log(`age : ${age}`);
    console.log(`job : ${job}`);
}

displayPerson(person1);