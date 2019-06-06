const knex = require('knex');
const router = require('express').Router();

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);


//working
router.get('/', (req, res) => {
    db('dishes')
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Dishes Not Found.'})
        })
})

module.exports = router;