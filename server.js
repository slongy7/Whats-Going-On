const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const app = express();
const hbs = exphbs.create({});
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const env = require('dotenv');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());

app.use(passport.session());

// const models = require("./models/index.js");

sequelize.sync().then(function() {

  console.log('Works')

}).catch(function(err) {

  console.log(err, "Didn't")
});

app.get('/', function(req, res) {
 
  res.send('Welcome to Passport with Sequelize');

});


app.listen(3001, function(err) {

  if (!err)
      console.log("Site is live");
  else console.log(err)

});


// const PORT = process.env.PORT || 3001;
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());


app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/homeRoutes'));

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });