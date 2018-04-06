export class User
{
    password: string ;
    userId: string ; 


    constructor(newUserId:string,newPassword:string)
    {
        this.userId=newUserId;
        this.password=newPassword;
    }
}