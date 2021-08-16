const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  // console.log(req.body);  
  // console.log(User.create(req.body));
  try {
      const userData = await User.create(req.body)
      // .then(dbUserData => {
      //   req.session.save(() => {
      //   req.session.user_id = dbUserData.id;
       
      //   req.session.logged_in = true;
      //   });
      //   console.log('USER!!'+ req.session.user_id);
      
      // });
      // // console.log(userData);
      //  res.status(200).json(userData);
    } catch (err) {
      console.log('ISSUES!')
      res.status(400).json(err);
    }
  });

  module.exports = router