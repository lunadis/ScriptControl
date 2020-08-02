import path from 'path'

module.exports = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: '3306',
        database: 'ScriptControl',
        user:     'root',
        password: '862411'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './src/Data/Migrations'
    },
    seeds: {
        directory: './src/Data/seeds'
    }  
};
