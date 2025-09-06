let fruits = ['apple', 'banana','coconut']

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


fruits[0] = 'mango';
console.log(fruits);


fruits[3] = 'orange';
console.log(fruits);

fruits.push("lime","lemon",'guava','fig',"cherry",'plum');
console.log(fruits);

fruits.pop();
console.log(fruits);


fruits.unshift("Strawberry");
console.log(fruits);


fruits.shift();
console.log(fruits);

let numOffFruits = fruits.length;
console.log(numOffFruits);


let index = fruits.indexOf("orange");
console.log(index);


for(let i = 0; i<fruits.length; i++){
    // console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

const fruitsSort = fruits.sort();
console.log(fruitsSort);

const reversort = fruits.sort().reverse();
console.log(reversort);
