const router = require('express').router();

router.get('/', async (req, res) => {
    res.render('homepage');
});

module.exports = router;