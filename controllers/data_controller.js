//* initialise and set up dependencies
const express = require('express');
const userData = require('../models/user_data');
const data = express.Router()

//* routes 
data.get("/", (req, res) => {
    res.send("<h1>Welcome to Data Extraction Page</h1>");
})

//? create a user data
data.post('/', (req, res) => {
    userData.create(req.body, (err, createdUserData) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(createdUserData);
    })
})


//? read one user data
data.get("/:id", (req, res) => {
    userData.findById(req.params.id, (err, foundUserData) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundUserData);
    })
})

//? update user data
data.put("/:id", (req, res) => {
    userData.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedData) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedData);
    })
})

//? delete user data
data.delete("/:id", (req, res) => {
    userData.findByIdAndRemove(req.params.id, (err, deletedData) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedData);
    })
})

//? read all user data
// data.get("/all", (req, res) => {
//     userData.find({}, (err, foundUserData) => {
//         if (err) {
//             res.status(400).json({ error: err.message })
//         }
//         res.status(200).json(foundUserData);
//     })
// })


module.exports = data