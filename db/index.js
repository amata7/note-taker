const fs = require('fs').promises;
const path = require('path');

const readNotes = () => 
    fs
        .readFile(path.join(__dirname, './db.json'), 'utf-8')
        .then((data) => JSON.parse(data));

module.exports = { readNotes };