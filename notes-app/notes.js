const chalk = require('chalk');
const fs = require('fs');

const getNotes = function() {
    return "Your notes...";
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e) {
        return [];
    }
};

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) =>note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.inverse.green('New note added!'));
    } // end if
    else {
        console.log(chalk.inverse.red('Error: Note title taken!'));
    } // end else
};

const removeNote = (title) => {

    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    });

    if(notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.inverse.green('Note removed!'));
    }
    else {
        console.log(chalk.inverse.red('No note found!'));
    }

};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};