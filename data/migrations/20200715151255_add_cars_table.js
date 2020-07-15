
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN', 128).unique().notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.integer('mileage').unsigned().notNullable();
        tbl.string('transmission');
        tbl.string('title');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
