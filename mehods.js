const knex = require('knex');
const knewConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

module.exports = {
    getRecipe: () => {
        return db('recipes')
            .join('dishes', { "dishes.id": "recipes.dishes_id"})
            .select("recipes.id", "recipes.name as recipe", "dishes.name as dish")
    }
}