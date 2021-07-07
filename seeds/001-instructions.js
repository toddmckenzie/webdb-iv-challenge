
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipes_id: 1, step: 1, StepDescription: 'mix it together'},
        {recipes_id: 2, step: 1, StepDescription: 'eat it'},
        {recipes_id: 3, step: 1, StepDescription: 'mix and eat'},
        {recipes_id: 4, step: 1, StepDescription: 'mix it together and eat it up'},
        {recipes_id: 5, step: 1, StepDescription: 'cook and heat'},
        {recipes_id: 6, step: 1, StepDescription: 'microwave till done'}
      ]);
    });
};
