const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const readNotes = () =>
  fs
    .readFile(path.join(__dirname, "./db.json"), "utf-8")
    .then((data) => JSON.parse(data));

const createNote = (title, text) => {
  if (!title || !text) {
    return Promise.reject(new Error("Must have a title and text"));
  }

  return readNotes().then((notes) => {
    const note = {
      id: nanoid(),
      title,
      text,
    };
    notes.push(note);
    return fs
      .writeFile(
        path.join(__dirname, "./db.json"),
        JSON.stringify(notes),
        "utf-8"
      )
      .then(() => note);
  });
};

const deleteNote = (url) => {
  const id = url.split("/").pop();
  console.log(id);
  // return readNotes().then((notes) => {
  //   console.log(notes);
  //   for (let i = 0; i < notes.length; i++) {
  //     console.log(notes[i].id);
  //   }
  // });
};

module.exports = { readNotes, createNote, deleteNote };
