const router = require('express').Router();

const businessRoutes = require('./businessRoutes');
const userRoutes = require('./userRoutes');

router.use('/', businessRoutes);

module.exports = router;