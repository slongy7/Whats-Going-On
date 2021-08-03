const router = requires('express').router();

router.get('/', async (req, res) => {
    res.render('homepage');
});

module.exports = router;