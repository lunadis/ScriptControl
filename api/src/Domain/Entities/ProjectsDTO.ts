export class ProjectDTO{
    public id!: string;
    public name!: string;
    public template!: string;
    public lastScript!: number;

    constructor(props: Omit<ProjectDTO, 'id'>){
        Object.assign(this, props)
    }

}
