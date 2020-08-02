import { IProjectRepository } from "../Repository/IProjectRepository";
import { IUserRepository } from "../Repository/IUserRepository";
import { ScriptsModel } from "../../Model/ScriptsModel";
import { ScriptsDTO } from "../../Entities/ScriptsDTO";
import { CreateScriptDTO } from "../../Entities/CreateScritpDTO";

export interface IScriptServices{
    Create(Script: CreateScriptDTO): Promise<ScriptsDTO>;
}