import path from 'path'

module.exports = {
    client: 'mysql2',
    connection: {
        
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
