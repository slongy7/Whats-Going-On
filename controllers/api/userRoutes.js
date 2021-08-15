const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  // console.log(req.body);  
  // console.log(User.create(req.body));
  try {
      const userData = await User.create(req.body);
      // console.log(userData);
  
      // req.session.save(() => {
      //   req.session.user_id = userData.id;
      //   req.session.logged_in = true;
  
      //   res.status(200).json(userData);
      // });
    } catch (err) {
      console.log('ISSUES!')
      res.status(400).json(err);
    }
  });

  module.exports = router