import path from 'path'

module.exports = {
    client: 'mysql2',
    connection: {
        host: 'demodaypalomadb.mysql.database.azure.com',
        port: '3306',
        database: 'ScriptControl',
        user:     'Pfiap@demodaypalomadb',
        password: 'Paloma!@#$'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './src/Data/Migrations'
    }   
};
