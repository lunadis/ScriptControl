export class UserDTO{
    public id!: string;
    public Username!: string;


    constructor(props: UserDTO){
        Object.assign(this, props)
    }
    
}
