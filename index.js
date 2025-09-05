const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome, Parth\'s App Is Running on AWS App Runner Service !');
});

app.get('/healthz', (req, res) => {
    res.send('OK');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});