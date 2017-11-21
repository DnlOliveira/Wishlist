var express = require('express');
var router = express.Router();
var path = require('path');

var People = require('../models/People');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/index.html');
});

router.post('/api/newuser', (req, res) => {
    
    People.create({
        firstName: "Daniel",
        lastName: "Oliveira",
        credentials: {
            username: "dolive",
            password: "123"
        },
        wishlist: []
    })
})

router.post('/api/newitem', (req, res) => {
    People.update(
        { firstName : "Daniel" },
        { $push: { wishlist: { item : "book" } } },
        (err, res) => {
            if (err) {
                console.log(err)
            }
            console.log(res)
        }
    )
})

router.get('/api/checkCred', (req, res) => {
    var user = req.query.user;

    var value;

    People.findOne({
        "credentials.username" : user
    },
    (err, response) => {
        res.send(response);      
    })
    
})

router.get('/api/getall', (req, res) => {
    People.find({}, (err, response) => {
        res.send(response);
    })
})

module.exports = router;