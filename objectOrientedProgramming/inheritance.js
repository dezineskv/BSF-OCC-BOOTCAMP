// inheritance
//Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}
// use extends keyword to inherit
class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meow");
    }
}
// dog.eat is inherited and doesn't need params cause they were already defined.
const myDog = new Dog("Fido");
myDog.bark();
myDog.eat();
const myCat = new Cat("Tabby");
myCat.meow();
myCat.eat();
