const express = require('express');
const UserData = require('../models/user_data');
const seed = express.Router();

const manyData = [{
    name: "Peter Lim",
    dob: "1990-01-11",
    address: "18 Aljunied Rd S987654",
    description: "Where you ryde-ing to?",
}, {
    name: "James Bond",
    dob: "1969-10-20",
    address: "18 Ah Soo Lane",
    description: "Where you ryde-ing to?",
}, {
    name: "Lim Ah Lim",
    dob: "1992-11-12",
    address: "1 Orchard Rd S987654",
    description: "Where you ryde-ing to?",
}, {
    name: "Richard Barnes",
    dob: "1993-02-30",
    address: "3 Tekong Rd S987654",
    description: "Where you ryde-ing to?",
}, {
    name: "Towkay Lim",
    dob: "1974-04-20",
    address: "5 City Rd S987654",
    description: "Where you ryde-ing to?",
}, {
    name: "Peter Lim",
    dob: "1989-08-09",
    address: "18 Bendemeer Rd S987654",
    description: "Where you ryde-ing to?",
}]

seed.get("/", (req, res) => {
    UserData.create(manyData, (err, data) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).redirect("/data");
    })
})

module.exports = seed