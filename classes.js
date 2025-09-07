class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : $${this.price}`);

    }
}
const product1 = new Product("shirt", 19.99);
const product2 = new Product("pant", 28.28);
const product3 = new Product("cap", 55.55);
const product4 = new Product("t-shirt", 65.65);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
product4.displayProduct();