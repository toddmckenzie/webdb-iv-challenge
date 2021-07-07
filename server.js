const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

const dishesRouter = require('./dishes/dishesRouter')

server.use('/api/dishes', dishesRouter)


module.exports = server;