const db = require('../db');

module.exports = (app) => {
    app.get('/api/notes', (req,res) => 
        db.readNotes().then((notes) => res.json(notes))
        );

    app.post("/api/notes", (req, res) => {
        const { title, text } = req.body;
        db.createNote(title, text)
          .then(() => res.redirect("/"))
          .catch((err) => {
            console.log(err);
            res.sendStatus(400);
          });
      }); 
}