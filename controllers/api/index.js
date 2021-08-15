const router = require('express').Router();

const businessRoutes = require('./businessRoutes');
const userRoutes = require('./userRoutes');

router.use('/business', businessRoutes);
router.use('/users', userRoutes);

module.exports = router;