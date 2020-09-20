const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "..", ".env" ) });

module.exports = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, "database", "seeds")
    }
}