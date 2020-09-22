exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.string("cpf", 14).notNullable();
        table.string("endereco").notNullable();
        table.string("name", 120).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
