import { IProjectRepository } from "../Domain/Interfaces/Repository/IProjectRepository";
import { ProjectModel } from "../Domain/Model/ProjectsModel";

export class ProjectServices{
    constructor(
        private _ProjectRepo: IProjectRepository
    ){}

    async Index(): Promise<ProjectModel[]>{
        return await this._ProjectRepo.Index();
    }

    async Select(id: string): Promise<ProjectModel>{
        return await this._ProjectRepo.Select(id);
    }

}