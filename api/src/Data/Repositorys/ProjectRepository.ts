import Knex from '../DbCon'
import { IProjectRepository } from '../../Domain/Interfaces/Repository/IProjectRepository';
import { ProjectModel } from '../../Domain/Model/ProjectsModel';

export class ProjectRepository implements IProjectRepository{
    private readonly table: string = "projects"


    async Update(project: ProjectModel): Promise<void> {
        const trx = await Knex.transaction();
        await trx(this.table).update({lastScript: project.lastScript}).where('id', project.id);
        trx.commit();        
    }

    async Index(): Promise<ProjectModel[]> {
        return await Knex(this.table).select('*')
    }
    
    async Select(id: string): Promise<ProjectModel> {
        return await Knex(this.table).select("*").where('id', id).first();
    }

    

}