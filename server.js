const express = require('express');
const path = require('path');
const db = require('./db');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.use (
    express.static(path.join(__dirname, './public'), { extensions: ['.html'] } )
);

app.get('/api/notes', (req,res) => {
    db.readNotes().then((notes) => res.json([{title: 'Not Noice' , text: 'Big OOF'}]))
    });

app.listen(PORT, () => console.log(`App Listening on PORT ${PORT}`));