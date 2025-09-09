const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
   res.json({
    name: 'apprunner-demo-v2',
    env: process.env.ENV||'local',
   });
});

app.get('/healthz', (req, res) => {
    res.send('OK');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});