import Knex from '../DbCon'
import { Users } from '../../Domain/models/Users';
import { Scripts } from '../../Domain/models/Scripts';


class UserRepository {

    table:string = 'user'

    async index(): Promise<Users[] | any> {
        await Knex<Users>(this.table).select("*")
    }

    async GetById(id: number): Promise<Users | undefined>{
        return await Knex<Users>(this.table).select('*').where('id', '=', id).first();
    }

    async Create(script: Scripts): Promise<Scripts | undefined>{
        const trx = await Knex.transaction()
        const persistedIds = await trx(this.table).insert(script);
        trx.commit();
        const idInserted = persistedIds[0]
        return await Knex<Scripts>(this.table).select('*').where('id', '=', idInserted).first();
    }


}