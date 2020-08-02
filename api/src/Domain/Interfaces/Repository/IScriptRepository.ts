import { ScriptsModel } from "../../Model/ScriptsModel";

export interface IScriptsRepository{
    Create(Script: ScriptsModel): Promise<void>;
    SelectById(id: string): Promise<ScriptsModel>
    SelectByName(name: string): Promise<ScriptsModel>
    Index(Project_id?: string): Promise<ScriptsModel[]>
}