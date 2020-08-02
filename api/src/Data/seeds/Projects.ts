import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("projects").del()
        .then(() => {
            // Inserts seed entries
            return knex("projects").insert([
                { name: "Gin5", template: "GinVersion_67_", lastScript: 597 },
                { name: "Grn", template: "GRNVersion_46_", lastScript: 1941 },
            ]);
        });
};
