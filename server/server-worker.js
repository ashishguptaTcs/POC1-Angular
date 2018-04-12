const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const apiProxyRouter = require('./api-proxy-router');

app.use(cookieParser());

app.use(expressSession({
    secret: 'its a secret',
    resave: false,
    saveUninitialized: false
  }));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', apiProxyRouter);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(8081, function() {
    console.log('Server listening on port 8081');
})