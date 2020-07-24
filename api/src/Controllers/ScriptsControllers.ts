import { Request, Response } from 'express'
import ProjectsRepository from '../Data/Repositorys/ProjectsRepoitory'
import { Scripts, ScriptsViewModel } from '../Domain/models/Scripts'
import UserRepository from '../Data/Repositorys/UserRepository'


class ScriptsControllers{
    async Create(req: Request, resp: Response){
        const script: ScriptsViewModel  = req.body
        const project = await new ProjectsRepository().GetById(script.project_id)
        if(!project) return resp.status(404)
            
        const lastScript = project.lastScript + 1

        project.lastScript = lastScript

        const scriptToSave:Scripts = new Scripts()

        scriptToSave.user = await new UserRepository().GetById(script.user_id)
        scriptToSave.project = project
        scriptToSave.name = project.template + lastScript

        return resp.status(200).json(scriptToSave)
    }


    async GetByID(req: Request, resp: Response){
        const id = Number(req.params.id)

        return resp.status(200).json(id)
    }
}


export default ScriptsControllers