const fs = require('fs');

fs.writeFileSync('ex-notes.txt', 'My name is Andrea.\n');


/*
Challenge: Append a message to notes.txt

1. Use appendFileSync to append the file
2. Run the script
3. Check your work by opening the file and viewing the appended text
*/

fs.appendFileSync('ex-notes.txt', '\nHello There!');

fs.appendFileSync('ex-notes.txt', '\nGeneral Kenobi!');


// ---------- AFTER 3.10: IMPORTING YOUR OWN FILES ----------


console.log('----------------------------------------');

console.log('ex-app.js');


const utils = require('./ex-utils');

console.log('----------------------------------------');

const firstName = 'Andrea';
console.log(firstName + " " + utils.lastName);

console.log('----------------------------------------');

/* OG From Video
const add = require('./utils');
const sum = add(4, -2);
console.log(sum);
*/
// Extra From Me
const x = 4;
const y = -2;
const sum = utils.add(x, y);
console.log('The sum of ' + x + ' and ' + y + ' is: ' + sum);

console.log('----------------------------------------');


/*
Challenge: Define and use a function in a new file

1. Create a new file called notes.js
2. Create getNotes function that returns "Your notes..."
3. Export getNotes function
4. From app.js, load in and call the function printing message to console
*/

const getNotes = require('./ex-notes');
const message = getNotes();
console.log(message);



