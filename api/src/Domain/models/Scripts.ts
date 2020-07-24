import { Projects } from './Projects'
import { Users } from './Users';


interface Scripts {
    id: number,
    name: string,
    project: Projects
    content: string,
    user: Users
}


export {
    Scripts
}