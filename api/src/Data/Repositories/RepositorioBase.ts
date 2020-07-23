import IRepositorieBase from "../../Domain/Repositories/IRepositorieBase";
import Knex from "knex";
import db from "../DbCon";

class RepositorioBase<T> implements IRepositorieBase<T>{


    constructor(private db: Knex, table: string) {

    }

    Save(entity: T): boolean {
        throw new Error("Method not implemented.");
    }
    Load(id: number): T {
        throw new Error("Method not implemented.");
    }
    Delete(id: number): T {
        throw new Error("Method not implemented.");
    }
    Index(): T[] {
        throw new Error("Method not implemented.");
    }

}

export default RepositorioBase