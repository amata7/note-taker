const express = require('express');
const path = require('path');
const db = require('./db');




app.use (
    express.static(path.join(__dirname, './public'), { extensions: ['.html'] } )
);

app.get('/api/movies', (req,res) => {
    db.readMovies().then((movies) => res.json(movies))
    });

app.listen(PORT, () => console.log(`App Listening on PORT ${PORT}`));