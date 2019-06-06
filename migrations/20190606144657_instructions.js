
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl) {
        tbl.integer('step').notNullable();
        tbl
        .integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.string('Step Description',)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions')
};
