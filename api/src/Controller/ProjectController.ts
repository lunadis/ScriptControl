import {Response, Request} from 'express'
import { ProjectRepository } from '../Data/Repositorys/ProjectRepository'
import { ProjectServices } from '../Services/ProjectServices'

export class ProjectController{
    async Index(req: Request, resp: Response){
        var projectRepo =  new ProjectRepository()
        var projectServices = new ProjectServices(projectRepo)

        await projectServices.Index().then(items =>{
            return resp.status(200).json(items)
        }).catch(err=>{
            return resp.status(500).json(err)
        })
    }

    async Select(req: Request, resp: Response){
        const {id} = req.params
        var projectRepo =  new ProjectRepository()
        var projectServices = new ProjectServices(projectRepo)

        if(!id){
            resp.status(400).json({Erro: "É preciso passar o id"})
        }

        await projectServices.Select(id).then(proj =>{
            return resp.status(200).json(proj)
        }).catch(err =>{
            return resp.status(500).json({erro: "Unexpected errror"})
        })
    }
}