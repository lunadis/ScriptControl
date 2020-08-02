import { IUserRepository } from "../Domain/Interfaces/Repository/IUserRepository";
import { IUserServices } from "../Domain/Interfaces/Services/IUserServices";
import { UserModel } from "../Domain/Model/UserModel";

export class UserServices implements IUserServices{
    constructor(
        private UserRepo: IUserRepository
    ){}

    async Index(): Promise<UserModel[]> {
        return await this.UserRepo.Index();
    }
    async Select(id: string): Promise<UserModel> {
        return await this.UserRepo.Select(id);
    }

}