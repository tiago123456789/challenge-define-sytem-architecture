exports.up = function(knex) {

    return knex.schema.createTable("financial_assets", table => {
        table.increments("id").primary();
        table.string("description").notNullable();
        table.float("value", 20, 2).notNullable();
        table.integer('person_id')
            .unsigned()
            .notNullable();
        table
            .foreign('person_id')
            .references("id")
            .inTable("persons");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("financial_assets");
};
