const express = require('express');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(8081, function() {
    console.log('Server listening on port 8081');
})