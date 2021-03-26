// const fs = require('fs');

// fs.writeFileSync('ex-notes.txt', 'My name is Andrea.\n');


/*
Challenge: Append a message to notes.txt

1. Use appendFileSync to append the file
2. Run the script
3. Check your work by opening the file and viewing the appended text
*/

// fs.appendFileSync('ex-notes.txt', '\nHello There!');

// fs.appendFileSync('ex-notes.txt', '\nGeneral Kenobi!');


// ---------- AFTER 3.10: IMPORTING YOUR OWN FILES ----------


// console.log('----------------------------------------');

// console.log('ex-app.js');


// const utils = require('./ex-utils');

// console.log('----------------------------------------');

// const firstName = 'Andrea';
// console.log(firstName + " " + utils.lastName);

// console.log('----------------------------------------');

/* OG From Video
const add = require('./utils');
const sum = add(4, -2);
console.log(sum);
*/
// Extra From Me
// const x = 4;
// const y = -2;
// const sum = utils.add(x, y);
// console.log('The sum of ' + x + ' and ' + y + ' is: ' + sum);

// console.log('----------------------------------------');


/*
Challenge: Define and use a function in a new file

1. Create a new file called notes.js
2. Create getNotes function that returns "Your notes..."
3. Export getNotes function
4. From app.js, load in and call the function printing message to console
*/

// const getNotes = require('./ex-notes');
// const message = getNotes();
// console.log(message);


// ---------- BEFORE 3.12: PRINTING IN COLOR ----------

// const validator = require('validator');
// const getNotes = require('./ex-notes');

// const message = getNotes();
// console.log(message);

// console.log(validator.isEmail('hellothere'));
// console.log(validator.isEmail('hello@there.jedi'));

// console.log(validator.isURL('https://castiyeaux.dev'));


// ---------- 3.12: CHALLENGE ----------

/*
Challenge: Use the chalk library in your project

1. Install version 2.4.1 of chalk
2. Load chalk into ex-app.js
3. Use it to print the string "Success!" to the console in green
4. Test your work

Bonus: Use the docs to mess around with other styles. Make text bold and inversed.
*/

// const chalk = require('chalk');

// console.log(chalk.green('Success!'));
// console.log(chalk.inverse.bold("I keep forgetting that my custom theme in VS Code messes with the colors of the Integrated Terminal. So my green 'Success!' actually shows blue. But it's green in the Windows Terminal app! So yay at that!"));


// console.log(process.argv[2]); // Type anything after node ex-app.js

// const command = process.argv[2]; // To display only index 2

// console.log(process.argv); // To display everything

// if(command === 'add') {
//     console.log('Adding new note!');
// } // end if
// else if(command === "remove") {
//     console.log('Removing note!');
// } // end else if


// ---------- AFTER 4.17: YARGS ----------

const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list

/*
Challenge 2: Add an option to yargs

1. Setup a body option for the add command
2. Configure a description, make it required, and for it to be a string
3. Log the body value in the handler function
4. Test your work!
*/

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Note Title: ' + argv.title);
        console.log('Note Body: ' + argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('Removing a note!');
    }
});


/*
Challenge 1: Add two new commands

1. Setup command to support "list" command (print placeholder message for now)
2. Setup command to support "read" command (print placeholder message for now)
3. Test your work by running both commands and ensure correct output
*/

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!');
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing all notes!');
    }
});

yargs.parse();


// ---------- AFTER 4.18: STORING DATA WITH JSON -----------

