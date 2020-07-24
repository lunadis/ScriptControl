import { Request, Response } from 'express'
import UserRepository from '../Data/Repositorys/UserRepository'


class UserControllers{
    async index(req: Request, resp: Response){
        const repo = new UserRepository()
        const projects = await repo.index()
        
        return resp.status(200).json(projects)
    }


    async GetByID(req: Request, resp: Response){
        const id = Number(req.params.id)
        const repo = new UserRepository()
        const project = await repo.GetById(id)

        return resp.status(200).json(project)
    }
}


export default UserControllers