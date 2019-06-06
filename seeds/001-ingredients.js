
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'hamburger'},
        {name: 'flour'},
        {name: 'chicken'},
        {name: 'buns'},
        {name: 'oil'},
        {name: 'pepper'},
        {name: 'noodles'},
        {name: 'sauce'},
      ]);
    });
};
