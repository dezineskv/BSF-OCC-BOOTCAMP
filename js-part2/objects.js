const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    hobbies: ['reading', 'coding', 'hiking'],

    greet: function () {
        console.log("Hello, my name is ", this.firstName);
    }
}

console.log(person.firstName);
console.log(person.age);
// need to call the method
person.greet();

person.lastName = 'Smith';
console.log(person.lastName);

// object doesn't use push to add rather object.propertyname = string & save to a variable.
person.nationality = 'American';
console.log(person.nationality);

// add new methods to the object
person.introduce = function () {
    console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`)
}
person.introduce();

let message = "Hello, world!";
console.log(message.toUpperCase());

// nested object-adding object to existing object-add it as a property to the existing object.

const address = {
    street: '123 Main St',
    city: 'San Francisco',
    country: 'USA'
}

person.homeAddress = address;
console.log(person.homeAddress.street);

// Object Destructuring vs. object.property
const { firstName, lastName, age } = person;
console.log(firstName);




