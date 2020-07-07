import { Projects } from './Projects'
import { User } from './Users';


interface Scripts {
    id: number,
    name: string,
    project: Projects
    content: string,
    user: User
}


export {
    Scripts
}