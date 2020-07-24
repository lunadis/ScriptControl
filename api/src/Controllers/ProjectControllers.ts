import { Request, Response } from 'express'
import ProjectsRepository from '../Data/Repositorys/ProjectsRepoitory'


class ProjectControllers{
    async index(req: Request, resp: Response){
        const repo = new ProjectsRepository()
        const projects = await repo.index()
        
        return resp.status(200).json(projects)
    }


    async GetByID(req: Request, resp: Response){
        const id = Number(req.params.id)
        const repo = new ProjectsRepository()
        const project = await repo.GetById(id)

        return resp.status(200).json(project)
    }
}


export default ProjectControllers