import { Projects } from "../../Domain/models/Projects";
import IProjectsRepositories from "../../Domain/Repositories/IProjectsRepositories";

interface IProjectRepositorie{

    Save(entity: Projects): boolean
    Load(id: number): Projects
    Delete(id: number): Projects
    Index(): Array<Projects>
    
}

export default IProjectsRepositories