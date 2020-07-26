import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("scripts", table =>{
        table.increments("id").primary()
        table.string("name", 100).unique()
        table.text("content")
        table.integer("user_id")
             .unsigned()
             .references("id")
             .inTable("user")

        table.integer("project_id")
             .unsigned()
             .references("id")
             .inTable("projects")

    })
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("scripts")
}

