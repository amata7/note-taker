const path = require('path');

const createNoteHtmlRoutes = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });
    
      app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
      });
};

module.exports = createNoteHtmlRoutes;