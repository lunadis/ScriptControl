import Knex from '../DbCon'
import { IScriptsRepository } from '../../Domain/Interfaces/Repository/IScriptRepository';
import { ScriptsModel } from '../../Domain/Model/ScriptsModel';

export class ScriptRepository implements IScriptsRepository{

    private readonly table: string = "scripts"

    async Create(Script: ScriptsModel): Promise<void> {
        const trx = await Knex.transaction();
        try {
            await trx(this.table).insert(Script)
            await trx.commit();
        } catch (error) {
            console.log(error)
            await trx.rollback();
            throw new Error("Erro ao inserir script no banco")
        }
    }
    SelectById(id: string): Promise<ScriptsModel> {
        throw new Error("Method not implemented.");
    }
    SelectByName(name: string): Promise<ScriptsModel> {
        throw new Error("Method not implemented.");
    }
    Index(Project_id?: string | undefined): Promise<ScriptsModel[]> {
        throw new Error("Method not implemented.");
    }
     
}