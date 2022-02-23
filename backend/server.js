const {server} = require('./api/api');
const express = require('express');
const path = require('path');
const joy = require('joy');

const app = express();
app.use(express.json());
app.use('/api', server);

app.get('/', (req, res) => {
    res.send('Servidor Funcionando');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
