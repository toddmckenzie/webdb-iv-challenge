
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'noraml tacos', dishes_id: 1},
        {name: 'spicy tacos', dishes_id: 1},
        {name: 'white sauce sphaghetti', dishes_id: 2},
        {name: 'crispy chicken nuggets', dishes_id: 3},
        {name: 'standard chicken nuggets', dishes_id: 3}

      ]);
    });
};
