import { Projects } from './Projects'
import { Users } from './Users';


class Scripts {
    id!: number
    name!: string
    project!: Projects
    content!: string
    user!: Users

    constructor(){
        
    }
}

interface ScriptsViewModel{
    project_id: number
    content: string,
    user_id: number
}

class ScriptModel{
    name!: string
    project_id!: number
    content!: string
    user_id!: number

    constructor(name: string, projectId: number, content: string, user_id: number){
        this.name = name;
        this.content = content;
        this.user_id = user_id
        this.project_id = projectId
    }
}


export {
    Scripts,
    ScriptsViewModel,
    ScriptModel
}