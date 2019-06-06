
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipesIngredientsMap').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipesIngredientsMap').insert([
        {recipes_id: 1, quantity: 1, ingredients_id: 2},
        {recipes_id: 2, quantity: 1, ingredients_id: 3},
        {recipes_id: 3, quantity: 1, ingredients_id: 4},
        {recipes_id: 1, quantity: 1, ingredients_id: 3},
        {recipes_id: 2, quantity: 1, ingredients_id: 7},
        {recipes_id: 3, quantity: 1, ingredients_id: 6},
      ]);
    });
};
