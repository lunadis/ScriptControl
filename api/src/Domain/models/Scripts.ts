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


export {
    Scripts,
    ScriptsViewModel
}