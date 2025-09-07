

function hi1(){
    console.log("Hi i am steve bill");
}
hi1();

const hi2 = () => console.log("Hi i am Elon Musk");
hi2();

const hi3 = (personName) => {
    console.log(`hi ${personName}`);
}

hi3('steve');

setTimeout(()=> console.log("hi"),4000);

const numbers = [1,2,3,4,5,6,7, 8,9];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const oddNumbers = numbers.filter((element) => element % 2 === 0);
console.log(oddNumbers);

const total = numbers.reduce((accumulator, element)=> accumulator + element);
console.log(total);