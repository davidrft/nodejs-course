const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

router.get('/users', (req, res) => {
    res.render('users', { pageTitle: 'Users', users: users });
});

router.post('/users', (req, res) => {
    users.push(req.body.name);
    res.redirect('/users')
});

exports.routes = router;