require('dotenv').config();

const express = require('express');
const sequelize = require('./config/connection');

const mainRouter = require('./controller');
require('./models');

const expressHandlebars = require('express-handlebars');
const handlebars = expressHandlebars.create();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(mainRouter);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('listening on PORT: ' + PORT);
  });
});