const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const server = express();

server.use(helmet());
server.use(express.json());



module.exports = server;