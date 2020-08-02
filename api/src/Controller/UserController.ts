import { Request, Response, response } from 'express'
import { UserRepository } from '../Data/Repositorys/UserRepository'
import { UserServices } from '../Services/UserServices';

export class UserController {
    async Index(req: Request, resp: Response) {
        var userRepo = new UserRepository();
        var userServices = new UserServices(userRepo);

        await userServices.Index().then(users => {
            return resp.status(200).json(users)
        }).catch(err=>{
            return resp.status(500).json({erro: `Unexpected error ----> ${err}`})
        })
    }

    async Select(req: Request, resp: Response){
        const {id} = req.params
        var userRepo = new UserRepository();
        var userServices = new UserServices(userRepo);

        if(!id){
            return resp.status(400).json({erro: "É preciso indicar um id"})
        }

        await userServices.Select(id).then(user =>{
            return resp.status(200).json(user)
        }).catch(err =>{
            return resp.status(500).json({erro: `Unexpected error ${err}`})
        })

    }
}