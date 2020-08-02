export class UserModel{
    public id!: string;
    public Username!: string;


    constructor(props: UserModel){
        Object.assign(this, props)
    }
    
}
