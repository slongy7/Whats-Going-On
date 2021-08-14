const router = require('express').Router();
const Business = require('../../models/business');
const {findRestList} = require('../homeRoutes');

router.post('/', async (req, res) => {
    // findRestList('columbus', 'bar', res);
    console.log('POST HERE', req.body);
});

module.exports = router;