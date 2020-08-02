import Knex from "../DbCon";
import { UserModel } from "../../Domain/Model/UserModel";
import { IUserRepository } from "../../Domain/Interfaces/Repository/IUserRepository";

export class UserRepository implements IUserRepository{
    private readonly table: string = "user"

    async Index(): Promise<UserModel[]> {
        return await Knex(this.table).select('*')
    }
    async Select(id: string): Promise<UserModel> {
        return await Knex(this.table).select("*").where('id', id).first();
    }

}