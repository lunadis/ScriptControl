import { Request, Response } from 'express'
import ProjectsRepository from '../Data/Repositorys/ProjectsRepoitory'
import { Scripts, ScriptsViewModel, ScriptModel, } from '../Domain/models/Scripts'
import UserRepository from '../Data/Repositorys/UserRepository'
import ScriptRepository from '../Data/Repositorys/SciptsRepository'


class ScriptsControllers {
    async Create(req: Request, resp: Response) {
        const script: ScriptsViewModel = req.body

        const project = await new ProjectsRepository().GetById(script.project_id)
        const user = await new UserRepository().GetById(script.user_id)
        if (!project.name == null || !user.userName == null) return resp.status(404)
        console.log({user, project})
        const lastScript = project.lastScript + 1
        project.lastScript = lastScript
        
        const scriptToSave: Scripts = new Scripts()

        scriptToSave.user = await new UserRepository().GetById(script.user_id)
        scriptToSave.project = project
        scriptToSave.name = project.template + lastScript
        scriptToSave.content = script.content
        var scriptCreated = await new ScriptRepository()
        .Create(new ScriptModel(
            scriptToSave.name,
            project.id,
            scriptToSave.content,
            user.id
        ))
        var projectSave = await new ProjectsRepository().Update(project)


        return resp.status(200).json(scriptCreated)
    }


    async GetByID(req: Request, resp: Response) {
        const id = Number(req.params.id)

        return resp.status(200).json(id)
    }
}


export default ScriptsControllers