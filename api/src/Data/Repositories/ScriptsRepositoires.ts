import RepositorioBase from "./RepositorioBase";
import { Scripts } from "../../Domain/models/Scripts";
import IScriptRepositories from "../../Domain/Repositories/IScriptRepositories";
import Knex from "knex";

class ScriptsRepositories extends RepositorioBase<Scripts> implements IScriptRepositories{
    constructor(db: Knex){
        super(db, 'scripts')
    }
}