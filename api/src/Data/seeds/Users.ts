import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("user").del()
        .then(() => {
            // Inserts seed entries
            return knex("user").insert([
                {Username: "luis.lopes" },
                {Username: "luiz.paulo" },
                {Username: "wallace.santos" },
                {Username: "eduardo.serra" },
                {Username: "mauricio.henrique" },
                {Username: "amanda.oliveira" },
                {Username: "davi.reis" },
                {Username: "caroline.raquel" },
                {Username: "wagner.moreira" }
            ]);
        });
};
