interface IRepositorieBase<T>{

    Save(entity: T): boolean
    Load(id: number): T
    Delete(id: number): T
    Index(): Array<T>
}


export default IRepositorieBase
