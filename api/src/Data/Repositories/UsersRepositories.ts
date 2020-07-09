import RepositorioBase from "./RepositorioBase";
import { Users } from "../../Domain/models/Users";
import Knex from "knex";
import IUserRepositories from "../../Domain/Repositories/IUserRepositories";

class UserRepositories extends RepositorioBase<Users> implements IUserRepositories{
    
    constructor(db: Knex){
        super(db, 'Users')
    }

}


export default UserRepositories