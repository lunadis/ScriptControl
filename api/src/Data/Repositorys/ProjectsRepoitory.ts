import Knex from '../DbCon'
import { Projects } from '../../Domain/models/Projects';


class ProjectsRepository {

    table:string = 'projects'

    async index(): Promise<Projects[]> {
       return await Knex<Projects>(this.table).select("*")
    }

    async GetById(id: number): Promise<Projects>{
        const project =  await Knex<Projects>(this.table).select('*').where('id', id).first().timeout(15)
        if(!project){
            return new Projects()
        }    
        return project
    }

    async Update(projects: Projects): Promise<Projects>{
        const trx = await Knex.transaction()
        const persistedId = await trx(this.table).update(projects)
        await trx.commit()
        return await this.GetById(projects.id)
    }


}

export default ProjectsRepository