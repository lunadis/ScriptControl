import { ProjectModel } from "../../Model/ProjectsModel";

export interface IProjectServices{
    Index(): Promise<ProjectModel[]>;
    Select(id: string): Promise<ProjectModel>;
}