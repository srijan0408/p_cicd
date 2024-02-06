const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    // Use path.join to concatenate __dirname and 'public'
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});
