const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users' });
});