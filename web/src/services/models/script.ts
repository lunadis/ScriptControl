import Project from './project'


interface Script{
    id: number,
    num: number,
    name: string,
    version: string,
    project: Project,
    branch: string
}


export default Script