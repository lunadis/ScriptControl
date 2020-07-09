import { Projects } from '../../Domain/models/Projects';
import RepositorioBase from './RepositorioBase';
import Knex from 'knex';
import IProjectsRepositories from '../../Domain/Repositories/IProjectsRepositories';

class ProjectsRepositories extends RepositorioBase<Projects> implements IProjectsRepositories{
    constructor(db: Knex){
        super(db, "projects")
    }
}

export default ProjectsRepositories





