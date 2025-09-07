const person1 = {
    firstName : "Steve",
    lastName : "Bill",
    age : 30,
    isOwner : true
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isOwner);


const person2 = {
    firstName : "Elon",
    lastName : "Musk",
    age : 60,
    sayHi : function(){
        console.log("Hi, I am Elon");
    }
}
person2.sayHi();

const person3 ={
    eat : () => console.log("I am fine. How about you?")
}
person3.eat();