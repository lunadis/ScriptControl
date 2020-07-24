import Knex from '../DbCon'
import { Projects } from '../../Domain/models/Projects';


class ProjectsRepository {

    table:string = 'projects'

    async index(): Promise<Projects[]> {
       return await Knex<Projects>(this.table).select("*")
    }

    async GetById(id: number): Promise<Projects | undefined>{
        return await Knex<Projects>(this.table).select('*').where('id', '=', id).first();
    }


}

export default ProjectsRepository