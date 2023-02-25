require('dotenv').config();
const express = require('express');
const mainRouter = require('./controller');
require('./models');
const expressHandlebars = require('express-handlebars');
const sequelize = require('sequelize');

const handlebars = expressHandlebars.create();


const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(mainRouter);

sequelize.sync(() => {
  app.listen(PORT,() => {
    console.log('listening on PORT: ' + PORT);
  });
});