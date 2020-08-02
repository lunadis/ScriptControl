import { CreateScriptDTO } from "../Domain/Entities/CreateScritpDTO"
import { UserRepository } from "../Data/Repositorys/UserRepository"
import { ScriptRepository } from "../Data/Repositorys/ScriptRepository"
import { ProjectRepository } from "../Data/Repositorys/ProjectRepository"
import { ScriptServices } from "../Services/ScriptServices"
import {Request, Response} from 'express'

export class ScriptController{
     async Create(req: Request, resp: Response){
        const {project_id, user_id, content} = req.body
        var UserRepo = new UserRepository()
        var ScriptsRepo = new ScriptRepository()
        var ProjectRepo =  new ProjectRepository()
        var ScriptsServices = new ScriptServices(UserRepo, ScriptsRepo, ProjectRepo)

        await ScriptsServices.Create({content, project_id, user_id}).then(script =>{
            return resp.status(201).json(script)
        }).catch(err =>{
            return resp.status(400).send(err)
        })

    }
}