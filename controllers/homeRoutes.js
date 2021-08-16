const router = require('express').Router();
const { decodeBase64 } = require('bcryptjs');
const { Business, Post } = require('../models/index');
const { findRestList } = require('../utils/apiPull');


router.get('/', async (req, res) => {
    findRestList('columbus', 'bar');
    Business.findAll({
        attributes: [
            'id',
            'name',
            'address',
            'category',
            'phone',
            'image',
            'link',
            'isOpen'
        ]
    }).then(dbBusinessData => {
        const businesses = dbBusinessData.map(business => business.get({plain: true}));
        res.render('homepage', {businesses});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

router.get('/seePost', async (req, res) => {
    findRestList('columbus', 'bar');
    Post.findAll({
        attributes: [
            'location',
            'stars',
            'crowded',
            'masks',
            'entertainment',
            'specials',
            'quality',
            'addComment'
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain: true}));
        res.render('postpage', {posts});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

router.get('/login', async (req, res) => {
    res.render('login');
    
});

router.get('/post', async (req, res) => {
    res.render('post');
    
});

module.exports = { router, findRestList};

