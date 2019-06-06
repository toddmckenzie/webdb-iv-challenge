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

//working
router.post('/', (req, res) => {
    db('dishes')
        .insert(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
        })
})

//working
router.get('/:id', (req, res) => {
    db('dishes')
        .where({ id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
        })
})

router.get('/recipes', (req, res) => {
    db('recipes')
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
        })
})

module.exports = router;