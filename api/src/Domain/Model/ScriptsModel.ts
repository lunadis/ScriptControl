export class ScriptsModel{
    public id!: string;
    public name!: string;
    public content!: string;
    public user_id!: string;
    public project_id!: string;

    constructor(props: Omit<ScriptsModel, 'id'>, id?: string){
        Object.assign(this, props)
    }
}