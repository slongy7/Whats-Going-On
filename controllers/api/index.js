const router = require('express').Router();

const businessRoutes = require('./businessRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/business', businessRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;