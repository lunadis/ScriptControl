import * as Config from "../../knexfile";
import knex from 'knex'

const db = knex(Config)

export default db