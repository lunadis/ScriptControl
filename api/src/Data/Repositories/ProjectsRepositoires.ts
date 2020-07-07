import { Projects } from '../../Domain/models/Projects';
import RepositorioBase from './RepositorioBase';
import Knex from 'knex';

class ProjectsRepositories extends RepositorioBase<Projects>{

    constructor(db: Knex){
        super(db, "Projects")
    }

}

export default ProjectsRepositories





