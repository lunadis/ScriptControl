import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("projects", table =>{
        table.increments("id").primary()
        table.string("name", 100).notNullable()
        table.string("template", 100).notNullable()
        table.integer("lastScript").unsigned()
    })
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("Projects")
}

