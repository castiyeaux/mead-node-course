// Section 4, Video 18: Storing Data with JSON

const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);


/*
Challenge: Work with JSON and the file system

1. Load and parse the JSON data
2. Change the name and age property using your info
3. Stringify the changed object and overwrite the original data
4. Test your work by viewing data in the JSON file
*/

/* Andrew's OG Data
{
    "name": "Andrew",
    "planet": "Earth",
    "age": 27
}
*/

/*
// Mine
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
console.log("Name: " + data.name);
console.log("Planet: " + data.planet);
console.log("Age: " + data.age);

console.log('-----------');

// Creating the new data to overwrite existing data
const myData = {
    name: 'Andrea',
    planet: 'Mustafar',
    age: 28
};
const myJSON = JSON.stringify(myData);
const myParsed = JSON.parse(myJSON);
console.log(myParsed);
console.log("Name: " + myParsed.name);
console.log("Planet: " + myParsed.planet);
console.log("Age: " + myParsed.age);

console.log('-----------');

// Overwriting the data in 1-json
fs.writeFileSync('1-json.json', myJSON);
*/

// Instructor
// Step 1
const dataBuffer = fs.readFileSync('1-json.json'); // To load the JSON data
const dataJSON = dataBuffer.toString(); // To convert it into a string
const user = JSON.parse(dataJSON); // To parse it into an object
// Step 2
user.name = 'Anakin';
user.planet = 'Tatooine';
user.age = 28;
// Step 3
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
// Step 4
console.log(userJSON);