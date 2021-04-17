const db = require('../db');

const createNoteApiRoutes = (app) => {
    app.get('/api/notes', (req,res) => 
        db.readNotes().then((notes) => res.json(notes))
        );
};

module.exports = createNoteApiRoutes;