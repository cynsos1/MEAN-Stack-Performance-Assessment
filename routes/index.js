const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        name: "Student Name",
        title: "The MEAN Stack",
        definitions: [
            { name: "MongoDB", description: "The database server, MongoDB, stores data in JSON-like documents." },
            { name: "Express", description: "Express.js (also referred to as Express) is a backend framework for Node.js." },
            { name: "Angular", description: "Angular (also referred to as 'Angular') is a frontend web framework by Google." },
            { name: "Node.js", description: "Node.js is the application runtime environment that executes JavaScript outside the browser." }
        ]
    });
});

module.exports = router;
