const items = [
  { name: "Bike", price: 100 },
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 600 },
  { name: "Headphones", price: 120 },
  { name: "Smartwatch", price: 200 },
  { name: "Tablet", price: 350 },
  { name: "Camera", price: 500 },
  { name: "Keyboard", price: 70 },
  { name: "Backpack", price: 600 },
  { name: "Shoes", price: 900 },
  { name: "Chair", price: 130 }
];

// filter
const filterItems = items.filter((item) => {
    return item.price <= 200;
});
console.log(filterItems);

// map
const itemsNames = items.map((item) => {
    return item.name;
});
console.log(itemsNames);

// find
const foundItem = items.find((item)=>{
    return item.name === "Tablet";
});
console.log(foundItem);

// forEach
items.forEach((item)=> {
    console.log(item.name);
});

// some
const hasInExpensiveItems = items.some((item)=>{
    return item.price <= 200;
});
console.log(hasInExpensiveItems);


// every 
const hasInexpensiveItems2 = items.every((item)=>{
    return item.price <= 200;
});
console.log(hasInexpensiveItems2);

// reduce 
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
},0);
console.log(total);

// includes 
const numbers = [1,2,3,4,5,6,7];
const includesTwo = numbers.includes(8);
console.log(includesTwo);


const array = [
    ['a','b','c'],
    ['p','q','r']
]
console.log(array[1][1]);
//output be q