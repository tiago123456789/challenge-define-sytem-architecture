exports.up = function(knex) {
    return knex.schema.createTable("persons", table => {
        table.increments("id").primary();
        table.string("cpf", 14).notNullable();
        table.integer("age").notNullable();
        table.string("source_rent").notNullable();
        table.string("address").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("persons");
};
