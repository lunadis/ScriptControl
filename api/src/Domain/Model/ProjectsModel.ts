export class ProjectModel{
    public id!: string;
    public name!: string;
    public template!: string;
    public lastScript!: number;

    constructor(props: Omit<ProjectModel, 'id'>){
        Object.assign(this, props)
    }

}
