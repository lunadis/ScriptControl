import { UserDTO } from "./UserDTO";
import { ProjectDTO } from "./ProjectsDTO";

export class ScriptsDTO {
    public id!: string;
    public name!: string;
    public content!: string;
    public user!: UserDTO;
    public project!: ProjectDTO;

    constructor(props: ScriptsDTO) {
        Object.assign(this, props)
    }
}