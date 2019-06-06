
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl) {
        tbl.integer('step');
        tbl
        .integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.string('StepDescription')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions')
};
