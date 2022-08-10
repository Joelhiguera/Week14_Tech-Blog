const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


// const routes = require('./routes');
// const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// deconstruct helpers from express-handlebar library and save it into variable hbs
const hbs = exphbs.create({ helpers })

app.get('/', (req, res) => res.send ('hello world'))

// // turn on routes
// app.use(routes);

// turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}`)
})