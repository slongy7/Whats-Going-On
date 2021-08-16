const router = require('express').Router();
const Business = require('../../models/business');
const {findRestList} = require('../homeRoutes');

router.get('/', async (req, res) => {
    // findRestList('columbus', 'bar', res);
    Business.findAll({
        attributes: [
            'id',
            'name',
            'address',
            'category'
        ]
    }).then(dbBusinessData => res.json(dbBusinessData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    console.log('POST HERE', req.body);
});

module.exports = router;