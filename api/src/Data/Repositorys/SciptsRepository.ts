import Knex from '../DbCon'
import { Scripts } from '../../Domain/models/Scripts';


class ScriptRepository {

    table:string = 'projects'

    async index(): Promise<Scripts[] | any> {
        await Knex<Scripts>(this.table).select("*")
    }

    async GetById(id: number): Promise<Scripts | undefined>{
        return await Knex<Scripts>(this.table).select('*').where('id', '=', id).first();
    }


}