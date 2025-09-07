let numbers = [1,2,3,4,5,6,7,8,9];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);


// ---

let userName = "steve bill";
let letters = [...userName];

console.log(letters);

//------

let fruits = ["Apple", "Orange", "Mango"];
let vegetables = ["potato", "onion", "Garlic"];
let foods = [...fruits, ...vegetables, "eggs"];
console.log(foods);
