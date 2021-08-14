const router = require('express').Router();
const { Business } = require('../models/index');
const { findRestList } = require('../utils/apiPull');


router.get('/', async (req, res) => {
    findRestList('columbus', 'bar');
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    res.render('login');
    
});

router.get('/post', async (req, res) => {
    res.render('post');
    
});

module.exports = { router, findRestList};

