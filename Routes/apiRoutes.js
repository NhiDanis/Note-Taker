const fs = require('fs');
let notesData = JSON.parse(fs.writeFileSync("../db/db.json"), "utf8");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        res.json(notesData);
    });

    app.get("/api/notes/:id", (req, res) => {
        res.json(notesData[Number(req.param.id)]);
    });

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        let newId = (notesData.length).toString();
        console.log(newId);
        newNote.id = newId;
        notesData.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(notesData), function(err) {
        if(err) 
            throw(err);

    });
    res.json(notesData);

    });

    
}