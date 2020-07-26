import Knex from '../DbCon'
import { Users } from '../../Domain/models/Users';
import { Scripts } from '../../Domain/models/Scripts';


class UserRepository {

    table:string = 'user'

    async index(): Promise<Users[]> {
        return await Knex<Users>(this.table).select("*")
    }

    async GetById(id: number): Promise<Users>{
        const user =  await Knex<Users>(this.table).select('*').where('id', '=', id).first().timeout(15);

        if(!user){
            const userNull: Users =  new Users()
            return userNull;
        }

        return user
    }

}


export default UserRepository