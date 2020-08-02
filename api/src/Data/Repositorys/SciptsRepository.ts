import Knex from '../DbCon'
import { Scripts, ScriptModel } from '../../Domain/models/Scripts';


class ScriptRepository {

    table:string = 'scripts'

    async index(): Promise<Scripts[] | any> {
        await Knex<Scripts>(this.table).select("*")
    }

    async GetById(id: number): Promise<Scripts | undefined>{
        return await Knex<Scripts>(this.table).select('*').where('id', '=', id).first();
    }

    async Create(script: ScriptModel): Promise<Scripts | undefined>{

        const trx = await Knex.transaction()
        const persistedID = await trx(this.table).insert(script)
        await trx.commit()
        const idInserted = persistedID[0]
        return await Knex<Scripts>(this.table).select('*').where('id', '=', idInserted).first();
    }


}

export default ScriptRepository