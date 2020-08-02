import { UserModel } from "../../Model/UserModel";

export interface IUserServices{
    Index(): Promise<UserModel[]>;
    Select(id: string): Promise<UserModel>;
}