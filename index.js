//3. Create a variable getCube and use the exponent operator to compute for the cube of a number. (A cube is any number raised to 3)
//4. Using Template Literals, print out the value of the getCube variable with a message of The cube of <num> is…

num = 2;
let getCube = Math.pow(num, 3);
console.log(`The cube of ${num} is ${getCube}`);

//5. Create a variable address with a value of an array containing details of an address.
//6. Destructure the array and print out a message with the full address using Template Literals.

const address = ['258', 'Washington Ave', 'NW, California', '90011'];
const [houseNumber, street, city, postalCode] = address;
console.log(`I live at ${houseNumber} ${street} ${city} ${postalCode}`);

//7. Create a variable animal with a value of an object data type with different animal details as it’s properties.
//8. Destructure the object and print out a message with the details of the animal using Template Literals.

const animal = {
		name: 'Lolong',
		species: 'saltwater crocodile',
		weight: '1075',
		bodyLength: '20 ft 3 in'
}
const {name, species, weight, bodyLength} = animal;
console.log(`${name} is a ${species}.
He weighed at ${weight} kgs with a measurement of ${bodyLength}.`);

//9. Create a class of a Dog and a constructor that will accept a name, age and breed as it’s properties.
class Dog{
	constructor(name, age, breed){
		this.name = name;
		this.age = age;
		this.breed = breed;
	}
}
//10. Create/instantiate a new object from the class Dog and console log the object.
const myDog = new Dog("Choco", "5", "Mixed Breed");
console.log(myDog);
