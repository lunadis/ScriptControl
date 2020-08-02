import { UserModel } from "../../Model/UserModel";

export interface IUserRepository{
    Index(): Promise<UserModel[]>;
    Select(id: string): Promise<UserModel>;
}