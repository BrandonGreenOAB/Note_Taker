const uuid = require("uuid");
const fs = require("fs");
const util = require("util");
const { stringify } = require("querystring");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
// class for your notes
class Store {
  //this will read from the db.json and return a readfile and return the data.
  read() {
    return readFileAsync("db/db.json", "utf-8");
  }
  //write will stringify the note and send it to the db.json file. use the constructor inside this this.write function.
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  // this reading the file db.json reading all the notes in the array, adding the single note to that array, then we're writing updated notes.
  addnote(note) {
    return this.read()
      .then((notes) => {
        console.log(`${notes}, "read notes"`);
        [...notes, note];
      })
      .then((newNotes) => {
        console.log(`${newNotes}, "read"`);
        // this.write(updatedNotes);
      });
  }

  //del will delete the files. get notes and use filter method for ids.
  del(id) {
    return this.getnotes().then((notes) => {
      notes
        .filter((note) => {
          note.id !== id;
        })
        .then((filteredNotes) => {
          this.write(filteredNotes);
        });
    });
  }
}

module.exports = new Store();
