import { IScriptServices } from "../Domain/Interfaces/Services/IScriptServices"
import { IUserRepository } from "../Domain/Interfaces/Repository/IUserRepository"
import { IScriptsRepository } from "../Domain/Interfaces/Repository/IScriptRepository"
import { IProjectRepository } from "../Domain/Interfaces/Repository/IProjectRepository"
import { CreateScriptDTO } from "../Domain/Entities/CreateScritpDTO"
import { ScriptsDTO } from "../Domain/Entities/ScriptsDTO"
import { ProjectModel } from "../Domain/Model/ProjectsModel"
import { UserModel } from "../Domain/Model/UserModel"
import { ScriptsModel } from "../Domain/Model/ScriptsModel"

export class ScriptServices implements IScriptServices{
    constructor(
        private _UserRepo: IUserRepository,
        private _ScriptRepo: IScriptsRepository,
        private _ProjectRepo: IProjectRepository,
    ){}

   
    async Create(Script: CreateScriptDTO): Promise<ScriptsDTO> {
        
        var project = await this._ProjectRepo.Select(Script.project_id)
        var user = await this._UserRepo.Select(Script.user_id)

        if(!project){
            throw new Error("Não existe projeto com esse id")
        }
        if(!user){
            throw new Error("Não existe Usuario com esse id")
        }

        var NewScript = this.CreateScript(project, user, Script)

        try{
            await this._ScriptRepo.Create(NewScript).then(_ =>{
                project.lastScript += 1
                this._ProjectRepo.Update(project)
            })

            return new ScriptsDTO({
                ...NewScript,
                project,
                user,
            })
        }catch(err){
            throw new Error("Erro ao criar script")
        }

    }

    private CreateScript(project: ProjectModel, user: UserModel, script: CreateScriptDTO): ScriptsModel {
        var numberOfLast = project.lastScript + 1
        var ScriptName = project.template + numberOfLast

        var NewScript = new ScriptsModel({
            content: script.content,
            name: ScriptName,
            project_id: project.id,
            user_id: user.id
        })


        return NewScript;
    }
}