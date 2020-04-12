const express = require('express');

const accountsRouter = require('./router.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: "You've activated my trap card!" });
});

module.exports = server;