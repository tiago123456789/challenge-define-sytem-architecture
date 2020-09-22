exports.up = function(knex) {
    return knex.schema.createTable("debts", table => {
        table.increments("id").primary();
        table.string("description").notNullable();
        table.float("value", 10, 2).notNullable();
        table.integer('user_id')
            .unsigned()
            .notNullable();
        table
            .foreign('user_id')
            .references("id")
            .inTable("users");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("debts");
};
