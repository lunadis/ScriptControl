import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("user", table =>{
        table.increments("id").primary()
        table.string("Username", 100).notNullable()
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("User")
}

