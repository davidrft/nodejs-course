const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const usersData = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(usersData.routes)

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
  
app.listen(3000);