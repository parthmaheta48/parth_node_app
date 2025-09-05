const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.json({
    name: 'apprunner-demo',
    env: 'parth-prod',
   });
});

app.get('/healthz', (req, res) => {
    res.send('OK');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});