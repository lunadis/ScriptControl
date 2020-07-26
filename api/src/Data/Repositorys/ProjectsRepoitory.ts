import Knex from '../DbCon'
import { Projects } from '../../Domain/models/Projects';


class ProjectsRepository {

    table:string = 'projects'

    async index(): Promise<Projects[]> {
       return await Knex<Projects>(this.table).select("*")
    }

    async GetById(id: number): Promise<Projects | undefined>{
        return await Knex<Projects>(this.table).select('*').where('id', '=', id).first()
    }

    async Update(projects: Projects): Promise<Projects | undefined>{
        const trx = await Knex.transaction()
        const persistedId = await trx(this.table).update(projects)
        await trx.commit()
        return await this.GetById(projects.id)
    }


}

export default ProjectsRepository