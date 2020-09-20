
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.string("name", 120).notNullable();
        table.string("email", 120).notNullable();
        table.string("password", 255).notNullable();
        table.string("requestId");
        table.string("hash_step_2_authentication")
        table.integer("tries_login_failed", 1).defaultTo(0);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
