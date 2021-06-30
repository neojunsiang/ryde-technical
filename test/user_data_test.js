//* initialising and setup dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const data = require('../controllers/data_controller');
const should = chai.should();
const expect = chai.expect();

const manyData = [
    {
        "_id": "60dc733955d0c708452a2377",
        "name": "Peter Lim",
        "dob": "1990-01-11T00:00:00.000Z",
        "address": "18 Aljunied Rd S987654",
        "description": "Where you ryde-ing to?",
        "createdAt": "2021-06-30T13:35:53.740Z",
        "__v": 0
    },
    {
        "_id": "60dc733955d0c708452a2378",
        "name": "James Bond",
        "dob": "1969-10-20T00:00:00.000Z",
        "address": "18 Ah Soo Lane",
        "description": "Where you ryde-ing to?",
        "createdAt": "2021-06-30T13:35:53.744Z",
        "__v": 0
    },
    {
        "_id": "60dc733955d0c708452a2379",
        "name": "Lim Ah Lim",
        "dob": "1992-11-12T00:00:00.000Z",
        "address": "1 Orchard Rd S987654",
        "description": "Where you ryde-ing to?",
        "createdAt": "2021-06-30T13:35:53.745Z",
        "__v": 0
    },
    {
        "_id": "60dc733955d0c708452a237a",
        "name": "Richard Barnes",
        "dob": "1993-03-02T00:00:00.000Z",
        "address": "3 Tekong Rd S987654",
        "description": "Where you ryde-ing to?",
        "createdAt": "2021-06-30T13:35:53.745Z",
        "__v": 0
    },
    {
        "_id": "60dc733955d0c708452a237b",
        "name": "Towkay Lim",
        "dob": "1974-04-20T00:00:00.000Z",
        "address": "5 City Rd S987654",
        "description": "Where you ryde-ing to?",
        "createdAt": "2021-06-30T13:35:53.746Z",
        "__v": 0
    },
    {
        "_id": "60dc733955d0c708452a237c",
        "name": "Peter Lim",
        "dob": "1989-08-09T00:00:00.000Z",
        "address": "18 Bendemeer Rd S987654",
        "description": "Where you ryde-ing to?",
        "createdAt": "2021-06-30T13:35:53.746Z",
        "__v": 0
    }
]

const oneData = [{
    "_id": "60dc733955d0c708452a237b",
    "name": "Towkay Lim",
    "dob": "1974-04-20T00:00:00.000Z",
    "address": "5 City Rd S987654",
    "description": "Where you ryde-ing to?",
    "createdAt": "2021-06-30T13:35:53.746Z",
    "__v": 0
}]

describe('GET /data/all', () => {
    it('should return the data of all in the database', done => {
        chai
            .request(data)
            .get('/data/all')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.deep.equal(manyData)
            })
    })
})

describe('GET /data/:id', () => {
    it('should return the data of a person based on the :id', done => {
        chai
            .request(data)
            .get('/data/60dc733955d0c708452a237b')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.deep.equal(oneData)
            })
    })
})