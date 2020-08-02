import { ProjectModel } from "../../Model/ProjectsModel";

export interface IProjectRepository{
    Index(): Promise<ProjectModel[]>;
    Select(id: string): Promise<ProjectModel>;
    Update(project: ProjectModel): Promise<void>;
}