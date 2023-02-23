require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const sequelize = require('sequelize');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT,() => {
  console.log('listening on PORT: ' + PORT);
});