const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('pages/index.html'));
})

app.listen(3002, () => {
    console.log('Server running on port 3002');
})