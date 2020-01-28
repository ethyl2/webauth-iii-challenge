const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./users-model.js');
//const restricted = require('../auth/restricted-middleware.js');

const router = express.Router();

//TODO: make and add restricted middleware
router.get('/users',  (req, res) => {
    Users.findUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({error: err, message: 'Failure to retrieve users'})
        });
});  
    

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    Users.addUser(user)
        .then(saved => res.status(201).json(saved))
        .catch(err => {
            res.status(500).json({error: err, message: 'Failure to add user'})
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findUserByUsername(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.user = user;  
                res.status(200).json({message: 'Logged in successfully', user_id: user.id})
            } else {
                res.status(401).json({message: 'Invalid credentials. You shall not pass!'})
            }
        })
        .catch(err => {
            res.status(500).json({error: err, message: 'Failure to log in'})
        });
});

//TODO: logout functionality
/*
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.json({error: err, message: "Logout error"})
            } else {
                res.status(200).json({message: "Successful logout"});
            }
        })
    } else {
        res.status(200).json({message: "No session found"})
    }
});
*/

module.exports = router;